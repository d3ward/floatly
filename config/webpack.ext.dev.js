const { merge } = require('webpack-merge')
const ext = require('./webpack.ext')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(ext, {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	optimization: {
		minimize: false,
	},
	plugins: [new CleanWebpackPlugin()],
})
