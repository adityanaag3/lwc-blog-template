/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/pages/about/about.js',
        post: './src/11ty-layouts/post/post.js'
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: ['index'],
            excludeChunks: ['about', 'post'],
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/about/about.html',
            chunks: ['about'],
            filename: 'about/index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/11ty-layouts/post/post.html',
            chunks: ['post'],
            filename: 'posts/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: path.resolve(__dirname, './src/modules/'),
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    }
};
