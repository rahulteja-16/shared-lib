const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin =
	require('webpack').container.ModuleFederationPlugin
// const CopyPlugin = require('copy-webpack-plugin')
const deps = require('../package.json').dependencies

const getWPConfig = (env) => {
	return {
		entry: path.resolve(__dirname, '..', './src/index.tsx'),
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		module: {
			rules: [
				{
					test: /\.(ts|js)x?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
						},
					],
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
					type: 'asset/  inline',
				},
			],
		},
		output: {
			publicPath:
				env === 'dev'
					? 'http://localhost:3004/'
					: 'https://lib.rahulteja.dev/',
		},
		plugins: [
			new HTMLWebpackPlugin({
				template: path.resolve(__dirname, '..', './src/index.html'),
			}),
			new ModuleFederationPlugin({
				name: 'shared',
				filename: 'shared.js',
				exposes: {
					'./Navigation': './src/Components/Navigation',
					'./NavigationTypes': './src/Types/navTypes',
					'./GlobalStyles': './src/Styles/GlobalStyles',
					'./ThemeProvider': './src/Styles/ThemeProvider',
				},
				shared: {
					...deps,
					react: {
						singleton: true,
						requiredVersion: deps.react,
					},
					'react-dom': {
						singleton: true,
						requiredVersion: deps['react-dom'],
					},
				},
			}),
		],
		stats: 'errors-only',
	}
}

module.exports = {
	getWPConfig,
}
