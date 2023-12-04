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

## babel配置

Babel Plugins分为语法插件和转义插件

插件的短名称：`babel-plugin-myPlugin`等同于`myPlugin`

- 转换插件用于转换你的代码。
- 语法插件只允许Babel解析(parse)特定类型的语法(而不是转换)。

Babel Presets可以看成是一组预先设定的插件列表集合

预设的短名称：`babel-preset-myPreset`等同于`myPreset`

---
执行顺序

- Plugins执行顺序在Presets之前
- Plugins是按照配置项`first to last`
- Presets是按照配置项`last to first`
    
```bash
npm i @babel/core @babel/cli @babel/preset-env babel-loader@8 babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx -D
```

---
`babel.config.json`中

```json
{
  "presets": ["@babel/env"],
  "plugins": ["transform-vue-jsx"]
}
```

---
`webpack.config.js`中添加rules

```js
  {
    test: /\.(jsx?|babel|es6)$/,
    include: process.cwd(),
    exclude: /node_modules/,
    loader: 'babel-loader'
  }
```

添加测试代码见main.js，Jsx.vue文件
