const gulp = require('gulp');
const combine = require('stream-combiner2'); // 集中处理错误
const through = require('through2');
const jdists = require('gulp-jdists');
var del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const pxtorpx = require('postcss-px2rpx');
const fonttobase64 = require('postcss-font-base64');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const minimist = require('minimist');

const environment = {
    string: 'env',
    default: { env: process.env.NODE_ENV || 'production' }
};
const options = minimist(process.argv.slice(2), environment);
const isProduction = options.env === 'environment'; // 判断是否为生产环境

const src = './src';
const dist = './dist';

gulp.task('wxml', () => {
    return gulp.src(`${src}/**/*.wxml`).pipe(gulp.dest(dist));
});

gulp.task('wxss ', () => {
    const combined = combine.obj([
        gulp.src(`${src}/**/*.{wxss,scss}`),
        sass().on('error', sass.logError),
        sourcemaps.init(),
        postcss([pxtorpx(), fonttobase64()]),
        rename((path) => (path.extname = '.wxss')),
        gulp.dest(dist)
    ]);
    combined.on('error', console.error.bind(console));
    return combined;
});

gulp.task('js', () => {
    gulp.src(`${src}/**/*.js`)
        .pipe(
            isProduction
                ? jdists({
                      trigger: 'production'
                  })
                : jdists({ trigger: 'dev' })
        )
        .pipe(isProduction ? through.obj() : sourcemaps.init())
        .pipe(babel({ presets: ['env'] }))
        .pipe(
            isProduction
                ? uglify({
                      compress: true
                  })
                : through.obj()
        )
        .pipe(isProduction ? through.obj() : sourcemaps.write('./'))
        .pipe(gulp.dest(dist));
});

gulp.task('json', () => {
    return gulp.src(`${src}/**/*.json`).pipe(gulp.dest(dist));
});

gulp.task('images', () => {
    return gulp.src(`${src}/images/**`).pipe(gulp.dest(`${dist}/images/`));
});

gulp.task('wxs', () => {
    return gulp.src(`${src}/**/*.wxs`).pipe(gulp.dest(dist));
});

gulp.task('watch', () => {
    ['wxml', 'wxss', 'js', 'json', 'wxs'].forEach((v) => {
        gulp.wathc(`${src}/**/*.${v}`, [v]);
    });
    gulp.watch(`${src}/images/**`, ['images']);
    gulp.watch(`${src}/**/*.scss`, ['wxss']);
});
gulp.tash('clean', () => {
    return del(['./dist/**']);
});
gulp.tash('dev', ['clean'], () => {
    runSequence('json', 'images', 'wxml', 'wxss', 'js', 'wxs', 'cloud', 'watch');
});
gulp.tash('build', ['clean'], () => {
    runSequence('json', 'images', 'wxml', 'wxss', 'js', 'wxs', 'cloud');
});
