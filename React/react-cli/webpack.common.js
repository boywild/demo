const path = require('path');
/**
 * 全局匹配路径
 */
const DIST = path.resolve(__dirname, './dist');
const SRC = path.resolve(__dirname, "./src");
const APP = path.resolve(__dirname, './app');
const ASSETS = path.resolve(__dirname, "./src/assets");
const COMPONENT = path.resolve(__dirname, "./src/components");
const HOCS = path.resolve(__dirname, './src/hocs');
const I18N = path.resolve(__dirname, './src/i18n');
const LAYOUTS = path.resolve(__dirname, './src/layouts');
const SCSS = path.resolve(__dirname, './src/scss');
const UTIL = path.resolve(__dirname, "./src/util");
const VIEWS = path.resolve(__dirname, './src/views');

const ENV = process.env.NODE_ENV || 'development';
const IS_PRO = ENV === 'production';

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: DIST
    },

    resolve: {
        modules: ["node_modules", SRC, UTIL, ASSETS, COMPONENT, APP, HOCS, I18N, LAYOUTS, VIEWS, SCSS],
        extensions: [".js", ".jsx", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                include: [SRC]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: [SRC]
            },
            {
                test: /\.scss$/,
                use: IS_PRO ? [
                    {
                        loader: 'css-loader',
                        options: { minimize: true, sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ] : [
                        {
                            loader: 'style-loader',
                            options: {
                                singleton: true
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true }
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true, includePaths: SRC }
                        }
                    ],
                include: [SRC]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'assets/images/[hash:8].[name].[ext]'
                    }
                }],
                include: [SRC]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        mimetype: 'image/svg+xml'
                    }
                }],
                include: [SRC]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './fonts'
                    }
                }],
                include: [SRC]
            }
        ]
    }

}

module.exports = config;