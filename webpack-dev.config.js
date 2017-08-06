const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: {
    main: [
      //'webpack/hot/only-dev-server',
      './index.js',
    ],
  },
  //配置dev server，即启动一个webpack内置的http server来调试WEB应用
  devServer: {
    //contentBase表示devserver的DocumentRoot
    contentBase: __dirname,
    hot: true,     //devserver热加载开关, 这个必须配合HotModuleReplacementPlugin才可以工作
    inline: true,  //和调试信息有关
    port: 9081,    //devserver监听的端口
    host: '192.168.65.239',  //指定devserver监听的IP地址
  },
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
};

module.exports = config;
