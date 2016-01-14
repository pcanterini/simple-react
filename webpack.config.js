var path = require('path');

module.exports = {
  devtool: 'source-map', // dev only, also slower
  entry: './src/main',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass',
      include: path.join(__dirname, 'src')
    }]
  }
};
