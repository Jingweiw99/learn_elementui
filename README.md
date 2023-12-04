# 学习 elementui

## 总览

- [学习 elementui](#学习-elementui)
  - [总览](#总览)
  - [初始化环境和 webpack 基本配置](#初始化环境和-webpack-基本配置)
  - [babel 配置](#babel-配置)
  - [添加prettier和eslint](#添加prettier和eslint)

## 初始化环境和 webpack 基本配置

安装 first commit 中的依赖

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

添加`scripts`之后，运行 npm run dev

## babel 配置

Babel Plugins 分为语法插件和转义插件

插件的短名称：`babel-plugin-myPlugin`等同于`myPlugin`

- 转换插件用于转换你的代码。
- 语法插件只允许 Babel 解析(parse)特定类型的语法(而不是转换)。

Babel Presets 可以看成是一组预先设定的插件列表集合

预设的短名称：`babel-preset-myPreset`等同于`myPreset`

---

执行顺序

- Plugins 执行顺序在 Presets 之前
- Plugins 是按照配置项`first to last`
- Presets 是按照配置项`last to first`

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

`webpack.config.js`中添加 rules

```js
  {
    test: /\.(jsx?|babel|es6)$/,
    include: process.cwd(),
    exclude: /node_modules/,
    loader: 'babel-loader'
  }
```

添加测试代码见 main.js，Jsx.vue 文件

## 添加prettier和eslint

```bash
npm install prettier@2 -D
```

```js
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 160,
  trailingComma: 'none',
  endOfLine: 'auto'
}
```

然后添加.prettierignore文件

测试npx prettier --write .

---
eslint配置

```bash
npm i eslint@7 eslint-config-prettier@8 eslint-plugin-prettier@3 eslint-plugin-vue@7 eslint-webpack-plugin@2 -D
```

然后再.eslintrc.js中

```js
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
}
```

插件plugins这里是简写：eslint-plugin-prettier => prettier,vue也是如此

这里vue插件中包含了配置，因此plugin:vue/essential，使用eslint-plugin-vue插件的essential配置选项。

然后添加eslint推荐配置，prettier的配置

这时，编辑器就会报错了，如果通过vscode配置通过prettier格式化，可以格式化成功。

添加scripts
```
"lint": "eslint --ext .vue,.jsx,.js ."
```

运行npm run lint，发现错误修复了。

如果想要自动修复，使用插件eslint-webpack-plugin，

在webpack.config.js中添加这个插件，然后调用一下
```js
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

new ESLintWebpackPlugin({
  fix: true, // webpack编译时自动修复
  extensions: ['.js', '.vue', '.jsx']
})
```

这时，在开发环境中如果重新编译就会自动lint修复。鼠标光标失去编辑器的编码区域焦点也会自动修复。


