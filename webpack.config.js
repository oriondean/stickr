var path = require('path');
var scripts = path.resolve(__dirname, 'home/scripts');

module.exports = {
    entry: [
        './app/scripts/index.js'
    ],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: scripts
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: scripts,
                query: { presets: ['es2015', 'react'] }
            },
            {
                test: /\.html$/,
                loader: 'html',
                include: scripts
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: scripts
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: path.resolve(__dirname, 'app/styles')
            },
            {
                test: /index.html$/,
                loader: 'file',
                query: { name: 'index.html' },
                include: path.resolve(__dirname, 'app/')
            },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};