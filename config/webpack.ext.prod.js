const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ext = require('./webpack.ext')

module.exports = merge(ext, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
			}),
		],
	},
	output: {
		filename: 'js/[name].js',
	},
	plugins: [new CleanWebpackPlugin()],
})
