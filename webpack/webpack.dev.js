const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const webpack = require('webpack');
module.exports = merge(baseConfig, {
    // devtool: 'inline-source-map', // 压缩方式
    mode: 'development',
    devServer: {
    clientLogLevel: "warning",
     hot: true, // 热更新
     open: false, // 自动打开页面
     contentBase: path.resolve('./dist'), // 告诉服务从哪提供内容
    },
    plugins: [
    ]
})