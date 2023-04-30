import * as webpack from 'webpack'
import * as path from 'node:path'
import * as glob from 'glob'
import MiniCSSExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CSSminimizer from 'css-minimizer-webpack-plugin'
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'

// TODO: add ESLint StyleLint PostCSS Nginx deploy browserslist assets loader / plugin and good caching

const PATHS = {
	src: path.join(__dirname, 'src'),
}

export default {
	mode: 'production',
	target: 'web',
	entry: './src/index.tsx',
	stats: 'verbose',
	devtool: false,
	cache: {
		type: 'filesystem',
		name: 'ProdCache',
		maxAge: 1000 * 60 * 60 * 24 * 2,
		compression: 'gzip',
	},
	performance: {
		hints: 'warning',
	},
	optimization: {
		minimizer: [new CSSminimizer()],

		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCSSExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
				],
			},
			{
				test: /\.(tsx|ts)/,
				exclude: /node_modules/,
				use: [{ loader: 'ts-loader' }],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
			title: 'Webpack template',
			filename: 'index.html',
			favicon: './src/images/React-icon.svg.png',
			cache: true,
		}),
		new webpack.DefinePlugin({ MODE: JSON.stringify('production') }),
		new BundleAnalyzerPlugin.BundleAnalyzerPlugin({ openAnalyzer: false }),
		new webpack.ProgressPlugin(),
		new MiniCSSExtractPlugin(),
	],
	output: {
		filename: '[name].[hash].js',
		assetModuleFilename: '[name][ext]',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '...'],
	},
} as webpack.Configuration
