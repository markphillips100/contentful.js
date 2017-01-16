'use strict'
var webpack = require('webpack')
var path = require('path')
var RewirePlugin = require('rewire-webpack')
var plugins = [
  new RewirePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  )
}

module.exports = {
  context: path.join(__dirname, 'lib'),
  entry: './contentful.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'contentful.js',
    libraryTarget: 'umd',
    library: 'contentful'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|dist)/,
        loader: 'babel'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      }
    ]
  },
  plugins: plugins
}
