// npm i
// npm run dev
// npm run build

const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;


module.exports = {
	entry: ['./js/webpack.js', './scss/main.scss'],
	output: {
		filename: 'js/temp-webpack/webpack-bundle_[contenthash:4].js',
		path: path.resolve(__dirname, 'dist'),
		chunkFilename: 'js/temp-webpack/[name]_[contenthash:8].js',
	},
	mode: 'development',
	target: 'web',
	context: path.resolve(__dirname, 'src'),
	devtool: 'source-map',
	optimization: {
		minimize: false,
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
				generator: {
					filename: '[path][name][ext]',
					chunkFilename: '[name]__[hash:8][ext]',
				},
			},
			{
				test: /\.(html)$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: false,
							sources: false
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [ 
					{
						loader: MiniCssExtractPlugin.loader,
					},
						'css-loader',
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sassOptions: {
								outputStyle: 'expanded',
							},
						},
					},
				],
			},
			{
				test: /\.(png|jpeg|svg|gif|jpg)$/,
				use: ['file-loader'],
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin({
			dry: true,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[name]__[contenthash:8].css',
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/js/'),
					to: path.resolve(__dirname, 'dist/js/'),
					globOptions: {
						ignore: [ '**/js/webpack.js',]
					},
				},
				{
					from: path.resolve(__dirname, 'src/template/'),
					to: path.resolve(__dirname, 'dist/template/'),
				},
				{
					from: path.resolve(__dirname, 'src/css/'),
					to: path.resolve(__dirname, 'dist/css/'),
				},
				{
					from: path.resolve(__dirname, 'src/img/'),
					to: path.resolve(__dirname, 'dist/img/[path][name][ext]'),
				},
				{
					from: path.resolve(__dirname, 'src/fonts/'),
					to: path.resolve(__dirname, 'dist/fonts/'),
				},
			],
		}),
		new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i,}),
		...glob.sync('./src/*.html').map((htmlFile) => {
			return new HtmlWebpackPlugin({
				minify: false,
				inject: true,
				filename: path.basename(htmlFile),
				template: path.basename(htmlFile),
			});
		}),
	],
	devServer: {
        historyApiFallback: true,
        // contentBase: path.resolve(__dirname, '/dist'),
        open: true,
		openPage: 'http://localhost:8080',
        compress: true,
		// host: '0.0.0.0',
        // hot: true,
		// watchContentBase: true,
		inline: true,
        port: 8080,
		overlay: {
			warnings: true,
			errors: true,
		},
		stats: {
			colors: true,
			modules: false,
			chunks: false,
			chunkGroups: false,
			chunkModules: false,
			env: true,
		},
    },
}