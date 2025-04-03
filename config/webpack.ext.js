const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const { src, extBuild, extJS, extV3JS, extPages, type, mv } = require('./config')
const packageJson = require('../package.json')

var ext_entries, manifest_file
if (mv == 2) {
	ext_entries = extJS
	manifest_file = {
		from: path.join(src, 'manifest.json'),
		to: path.join(extBuild, `${type}_${mv}`),
	}
} else {
	ext_entries = extV3JS
	manifest_file = {
		from: path.join(src, 'manifest_v3.json'),
		to: path.join(extBuild, `${type}_${mv}`, 'manifest.json'),
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
		path: path.join(extBuild, `${type}_${mv}`),
		filename: './js/[name].js',
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.join(src, 'assets'),
					to: path.join(extBuild, `${type}_${mv}`, 'assets'),
				},
				manifest_file,
			],
		}),
		new MiniCssExtractPlugin({
			filename: './css/[name].css',
			chunkFilename: '[name].css',
		}),
		...extPages.map(
			(page) =>
				new HTMLWebpackPlugin({
					template: `./${page}.ejs`,
					filename: `${page}.html`,
					chunks: [page],
					minify: false,
					sources: false,
				}),
		),
		new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(packageJson.version)
        })
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
                test: /\.ejs$/i,
                use: ['html-loader', 'template-ejs-loader']
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
