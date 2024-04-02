const main = require('./webpack.website')
const { merge } = require('webpack-merge')
const { build } = require('./config')

module.exports = merge(main, {
	mode: 'development',
	devServer: {
		static: {
			directory: build,
		},
		compress: true,
		port: 3000,
		hot: true,
		open: true,
	},
})