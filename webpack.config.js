const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  // Webpack configuration goes here
//   mode: 'development',
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.[hash].js'
//   },
//   devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  }
};