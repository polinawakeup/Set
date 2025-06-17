// eslint-disable-next-line no-unused-vars
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // исключаем эту папку
        loader: 'babel-loader',
      },
    ],
  },

  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
  },
};
