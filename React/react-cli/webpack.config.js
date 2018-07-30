const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        port: 8888,
        hot: true,
        open: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                },
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        mimetype: 'image/svg+xml'
                    }
                }]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './fonts'
                    }
                }]
            }


        ]
    },
    plugins: [
        // new webpack.NamedModulesPlugin(),
        // new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
        // new UglifyJsPlugin(),
        // new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
        // new webpack.optimize.ModuleConcatenationPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './index.html'
        })
    ]
}

module.exports = config;