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
      '@img': path.resolve('./src/img'),
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
        use: [{ loader: 'vue-style-loader' }, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {loader: 'svg-sprite-loader', options: {}},
      //     {loader: 'svgo-loader', options: {
      //        plugins: [
      //           // 还有很多配置，具体可以查看https://github.com/svg/svgo
      //          { removeViewBox: false },
      //          { removeXMLNS: true }
      //         ]
      //       }
      //      }
      //   ]
      // }
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
