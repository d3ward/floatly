const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	optimization: {
		minimize: false,
	},
	plugins: [new CleanWebpackPlugin()],
})
