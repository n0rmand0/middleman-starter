const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let postCssOptions = [  require('autoprefixer')() ];
if ( process.env.NODE_ENV === 'production' ) {
  postCssOptions.push( require('cssnano')() )
}

let webpackConfig = {
  entry: './source/javascripts/all.js',

  output: {
    filename: 'all.js',
    path: path.resolve(__dirname, '.tmp')
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
          {
              loader: "css-loader",
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: postCssOptions
            }
          },
          {
              loader: "sass-loader"
          },
        ],
          // use style-loader in development
          fallback: "style-loader",
        })
      },
    ]
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new BrowserSyncPlugin({
       host: 'localhost',
       port: 3000,
       proxy: 'http://localhost:4567/'
    },
    {
    //  reload: false
   }),
    new ExtractTextPlugin({
        filename: "all.css",
        // disable: process.env.NODE_ENV === "development"
    })
  ],

};


module.exports = webpackConfig;
