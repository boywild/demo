const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js')


module.exports = merge(common, {
    devServer: {
        contentBase: './dist',
        port: 8888,
        hot: true,
        open: true,
        inline: true
    },
    devtool: "cheap-module-eval-source-map",
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
        new HtmlWebpackPlugin({
            title: '开发环境',
            template: './public/index.ejs',
            filename:'./index.html',
            isMobile:true
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            PropTypes: 'prop-types'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})
console.log("process.env.NODE_ENV 的值是(webpack.dev.js)："+ process.env.NODE_ENV)