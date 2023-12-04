const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './examples/main.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    publicPath: '/',
    hot: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compileOptions: {
            preserveWhiteSpace: false
          }
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false //“[object Module]”问题
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'learn-elementui',
      favicon: './public/favicon.ico',
      template: './public/index.html',
      filename: 'index.html',
      inject: true
    }),
    new ESLintWebpackPlugin({
      fix: true, // webpack编译时自动修复
      extensions: ['.js', '.vue', '.jsx']
    })
  ]
}
