module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: __dirname + '/src'
    }]
  }
};
