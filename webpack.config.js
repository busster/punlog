var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
            presets: ['@babel/preset-env']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};