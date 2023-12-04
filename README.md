# 学习elementui

## 总览

- webpack4搭建环境
- 工程化
- 发布部署，CI/CD
- 搭建官网
- 编写源码组件

## 初始化环境和webpack基本配置

安装first commit中的依赖

这个需要添加上
```json
  "peerDependencies": {
    "vue": "^2.7.15"
  }
```

配置`webpack.config.js`

```js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './examples/main.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js'
  },
  devServer: {},
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
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
    })
  ]
}
```

添加`scripts`之后，运行npm run dev

