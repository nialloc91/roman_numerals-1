var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "bin"),
    filename: "www.js"
  },
  target: "node",
  externals: [nodeExternals()],
  stats: {
    colors: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
