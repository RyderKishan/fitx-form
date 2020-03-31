const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
          failOnWarning: false,
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
    ],
  },
  entry: {
    main: path.join(__dirname, './src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'debug',
    compress: true,
    open: false,
    writeToDisk: true,
    contentBase: 'build',
    historyApiFallback: true,
    liveReload: false,
    port: 8118,
  },
  plugins: [
    new WebpackManifestPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, './src/public'),
        to: './public',
      },
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/assets/template.html',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/gk_logo.png',
    }),
  ],
});
