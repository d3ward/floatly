const path = require('path')

module.exports = {
	src: path.resolve(__dirname, '../src'),
	build: path.resolve(__dirname, '../dist'),
	extBuild: path.resolve(__dirname, '../dist-ext'),
	extJS: ['background', 'content', 'options'],
	extPages: ['options'],
	extV3JS: ['service_worker', 'content', 'options'],
	pages: ['index'],
	type: process.env.TYPE,
	mv: process.env.MV,
}
