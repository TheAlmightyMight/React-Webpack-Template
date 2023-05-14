import * as webpack from 'webpack'
import * as path from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'

export default {
	mode: 'production',
	target: 'web',
	entry: './src/index.tsx',
	bail: true,
	devtool: false,
	performance: {
		hints: 'warning',
	},
	module: {
		rules: [
			{ test: /\.svg/, type: 'asset/inline' }, // https://webpack.js.org/guides/asset-modules/
			{
				test: /\.(png|jpe?g|gif|woff|woff2?|eot|ttf|otf|webp|avif)$/i, // Matches any of the specified file types
				type: 'asset/resource', // Uses the asset modules to emit the file as a separate asset instead of inlining it
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
			title: 'Webpack template',
			filename: 'index.html',
			favicon: './src/assets/React-icon.png',
			cache: true,
		}),
		new BundleAnalyzerPlugin.BundleAnalyzerPlugin({ openAnalyzer: false }),
	],
	output: {
		filename: '[name].[contenthash].js',
		asyncChunks: true,
		path: path.resolve(__dirname, 'dist'),
		clean: false,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '...'],
	},
} as webpack.Configuration
