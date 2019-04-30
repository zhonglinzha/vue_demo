const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: path.resolve('./src/base/index.js'),
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve('./dist'),
    publicPath: '',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.sass'],
    alias: {
      vue$: 'vue/dist/vue.esm.js', //配置别名 确保webpack可以找到.vue文件
      '@base': path.resolve('./src/base'),
      '@dll': path.resolve('./src/dll'),
      '@page': path.resolve('./src/page'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{ loader: 'vue-style-loader' }, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/base/index.html'),
      filename: 'index.html',
    }),
    new VueLoaderPlugin(),
  ],
};
