const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const webpack = require('webpack');
const AutoDllPlugin = require('autodll-webpack-plugin');
module.exports = merge(baseConfig, {
    // devtool: 'source-map', // 压缩方式
    mode: 'production',
    plugins: [
        new AutoDllPlugin({
            inject: true, // will inject the DLL bundles to index.html
            filename: '[name].js',
            entry: {
              vendor: [
                'vue',
                'babel-polyfill'
              ]
            }
          })
    ]
})