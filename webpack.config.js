var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist/assets'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.template.html',
            inject: true
        }),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("styles.bundle.css", {
            allChunks: true
        })
    ],
    module: {
        loaders: [
            {
              test: /\.(js|jsx)?$/,
              loaders: ['babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=react-hot-loader/babel'],
              exclude: /node_modules/,
              include: __dirname
            },
            {
              test: /\.css/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
              exclude: /node_modules/
            },
            {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
              exclude: /node_modules/
            },
            {
              test: /\.png$/,
              loader: "url-loader?limit=100000"
            },
            {
              test: /\.jpg$/,
              loader: "file-loader"
            },
            {
              test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
              loader: 'file-loader'
            }
        ]
    }
};
