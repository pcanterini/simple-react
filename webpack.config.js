module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    }
};
