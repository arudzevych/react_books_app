const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader', 'autoprefixer-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.svg$/,
                use: '@svgr/webpack',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.js'
        })
    ]
}