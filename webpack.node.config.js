var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'server.js'),

    output: {
        filename: 'server.bundle.js'
    },

    target: 'node',

    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server'
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext
    }, {}),

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    node: {
        __filename: false,
        __dirname: false
    },

    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:['es2015','stage-0','react']
                }
            }
        ]

    }

};

