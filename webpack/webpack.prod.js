const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    devtool: 'source-map', // 压缩方式
    mode: 'production'
})