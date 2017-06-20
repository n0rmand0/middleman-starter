const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

let config = {
  "entry":  [
    "./source/javascripts/all.js",
    "./source/stylesheets/all.scss"
  ],
  output: ".tmp",
  "proxy": "http://localhost:4567",
  "watch": [
    "./source/**/*.haml"
  ]
}

let postCssOptions = [  require('autoprefixer')() ];
if ( process.env.NODE_ENV === 'production' ) {
  postCssOptions.push( require('cssnano')() )
}

let webpackConfig = {
  entry: config.entry,

  output: {
    filename: 'all.js',
    path: path.resolve(__dirname, config.output)
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
    new CleanWebpackPlugin(
      [config.output]
    ),
    new BrowserSyncPlugin({
       port: 3000,
       proxy: config.proxy,
       files: config.watch,
       reloadDelay: 500,
       notify: false
    },
    {
    //  reload: false
   }),
    new ExtractTextPlugin({
        filename: "all.css",
    })
  ],

};


module.exports = webpackConfig;
