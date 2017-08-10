const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: {
    main: [
      './index.js'
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
      {
        test: /\.(css)$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              modifyVars: { "@primary-color": "#1DA57A" },
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
