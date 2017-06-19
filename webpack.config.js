var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './source/javascripts/all.js',

  output: {
    filename: 'all.js',
    path: path.resolve(__dirname, '.tmp')
  },

  module: {
    rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader",
      })
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR

    new BrowserSyncPlugin({
       host: 'localhost',
       port: 3000,
       proxy: 'http://localhost:4567/'
    }),

    new ExtractTextPlugin({
        filename: "all.css",
        disable: process.env.NODE_ENV === "development"
    })

  ],


};
