const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js')


module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            PropTypes: 'prop-types'
        }),
        new CleanWebpackPlugin(['./dist']),
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './index.html'
        })
    ]
})