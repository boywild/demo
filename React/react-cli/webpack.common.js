const path = require('path');

const config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    extensions: [".js", ".jsx", ".css", "scss"],
    resolve: {
        alias:{
            
        },
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ]
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
    }

}

module.exports = config;