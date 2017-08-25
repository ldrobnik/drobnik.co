var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts' // the file that starts the app
    },

    // tells webpack which file extensions to resolve
    resolve: {
        extensions: ['.js', '.ts']
    },

    // setting up loaders for .html and .css files
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }] // simply copies any .css files
            }
        ],
        exprContextCritical: false

    }
};