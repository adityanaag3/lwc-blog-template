/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LwcWebpackPlugin = require('lwc-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/pages/about/about.js',
        layout_post: './src/11ty-layouts/post/post.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new LwcWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: ['index'],
            filename: './index.njk',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/about/about.html',
            chunks: ['about'],
            filename: 'about/index.njk'
        }),
        new HtmlWebpackPlugin({
            template: './src/11ty-layouts/post/post.html',
            chunks: ['layout_post'],
            filename: '_includes/layout-post.njk'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/resources/', to: 'resources/' },
                { from: 'src/admin/', to: 'admin/' },
                { from: 'src/posts/', to: 'posts/' }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                exclude: path.resolve(__dirname, './src/modules/'),
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                lwc: {
                    test: /[\\/]node_modules[\\/]@lwc[\\/]engine/,
                    chunks: 'all',
                    priority: 1
                },
                node_vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -10
                }
            },
            name: false
        }
    },
    stats: 'errors-only'
};
