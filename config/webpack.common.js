const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pathToMainJs = require.resolve("../src/index.js");
const pathToIndexCss = require.resolve("../src/styles.css");
const pathToIndexHtml = require.resolve("../src/index.html");
const pathToIndexFavicon = require.resolve("../src/img/favicon.ico");
const pathToCar = require.resolve("../src/img/header/orange-car.svg");
const pathToShape = require.resolve("../src/img/header/shape.png");

module.exports = {
  entry: [
    "@babel/polyfill",
    pathToMainJs,
    pathToIndexCss,
    pathToIndexHtml,
    pathToIndexFavicon,
    pathToCar,
    pathToShape,
  ],
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext][query]",
        },
      },
      {
        test: /\.html$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext][query]",
        },
      },
      {
        test: /\.(png|jpg|ico|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext][query]",
        },
      },
    ],
  },
};
