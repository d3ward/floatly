var path = require("path"),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin,
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");
WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, './src'),
  entry: {
    content: "./js/content.js",
    options: "./js/options.js",
    background: "./js/background.js"
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: "manifest.json",to : "manifest.json"},
        {from: "png",to:"png"},
        {from: "svg",to:"svg"}
      ]
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "html", "options.html"),
      filename: "html/options.html",
      sources: false,
      minify: false,
      chunks: ["options"]
    }),
  ]
};