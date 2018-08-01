const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "util"),
            path.resolve(__dirname, "assets"),
            path.resolve(__dirname, "component")
        ],
        extensions: [".js", ".jsx", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            },
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