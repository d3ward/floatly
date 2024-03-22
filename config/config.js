const path = require('path')

module.exports = {
	src: path.resolve(__dirname, '../src'),
	build: path.resolve(__dirname, '../dist'),
	extensions: ['background', 'content', 'options'],
	extensionsV3: ['service_worker', 'content', 'options'],
	pages: ['options'],
	website: ['index'],
	dist: path.resolve(__dirname, '../dist/website'),
	type: process.env.TYPE,
	mv: process.env.MV,
}
