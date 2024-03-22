const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { src, build, extensions, extensionsV3, pages, type, mv } = require('./config')

var ext_entries, manifest_file
if (mv == 2) {
	ext_entries = extensions
	manifest_file = {
		from: path.join(src, 'manifest.json'),
		to: path.join(build, `${type}_${mv}`),
	}
} else {
	ext_entries = extensionsV3
	manifest_file = {
		from: path.join(src, 'manifest_v3.json'),
		to: path.join(build, `${type}_${mv}`, 'manifest.json'),
	}
}

module.exports = {
	context: src,
	entry: {
		...ext_entries.reduce((acc, page) => {
			acc[page] = `./js/${page}.js`
			return acc
		}, {}),
	},
	output: {
		clean: false,
		assetModuleFilename: '[path][name][ext]',
		path: path.join(build, `${type}_${mv}`),
		filename: './js/[name].js',
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.join(src, 'assets'),
					to: path.join(build, `${type}_${mv}`, 'assets'),
				},
				manifest_file,
			],
		}),
		new MiniCssExtractPlugin({
			filename: './css/[name].css',
			chunkFilename: '[name].css',
		}),
		...pages.map(
			(page) =>
				new HTMLWebpackPlugin({
					template: path.join('html', `${page}.html`),
					filename: `${page}.html`,
					chunks: [page],
					minify: false,
					sources: false,
				}),
		),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
			{
				test: /\.(sa|sc)ss$/,
				use: [
					MiniCssExtractPlugin.loader, // extract css from commonjs
					'css-loader', // turn css into commonjs
					'sass-loader', // turn scss into css
				],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader', // turn css into commonjs
				],
			},
			{
				test: /.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './assets',
						},
					},
				],
			},
		],
	},
}
