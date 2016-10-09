'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

console.log('webpack.browser.config start running...' );

module.exports = {
    devtool: 'inline-source-map',
    target: 'web',

    entry: [
        'webpack-hot-middleware/client',
        './public/css/my-style.less',
        './react/index'
    ],

    output: {
        path: __dirname + '/public/js',
        filename: "bundle.js",
        publicPath: '/static/'
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },


    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            }
        ]
    },

    plugins: [
        commonsPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css',{allChunks: true})
    ]
};
