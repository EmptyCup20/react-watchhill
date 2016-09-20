'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

console.log('webpack.browser.config start running...' );

module.exports = {

    target: 'web',

    entry: {
        'bundle': './react/index.js'
    },

    output: {
        path: './public/js',
        filename: "[name].js"
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

                loader: 'babel-loader',
                query: {
                    //plugins: ['babel-plugin-transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            }
        ]
    },

    plugins: [
        commonsPlugin,
        new ExtractTextPlugin('../../public/css/style.css',{allChunks: true})
    ]
};
