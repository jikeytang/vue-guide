# Javascript设计模式详解
设计模式是程序员必须掌握的基础知识，无论是前端开发、移动端还是后台，都需要掌握。它是成为一名合格工程师的必要条件。如果你只懂得敲代码，不懂得设计程序，那永远成为不了一名高级工程师。如果你是一名高级工程师，那么你肯定具有一定的设计能力，对于整个项目架构布局有更好的设计。

## 开发环境搭建
作为一名前端开发人员，在这里默认安装好node环境。
### 初始化npm环境
通过npm init命令初始化工程环境，在根目录下创建src文件夹，在文件夹中创建index.js文件。
### 安装webpack
在命令行中输入 npm install webpack webpack-cli --save-dev 即可安装。然后在根目录下创建webpack.dev.config.js文件。然后写入以下内容：

```js
module.exports = {
    entry:'./src/index.js',//入口文件
    output: {              //输出文件
        path: __dirname,
        filename: "./release/bundle.js"
    }
}
```
在package.json中scripts中添加以下命令：

```js
"dev": "webpack --config ./webpack.dev.config.js --mode development"
```
然后运行npm run dev即可打包。
### 安装webpack-dev-server
在命令行中输入 npm install webpack-dev-server html-webpack-plugin --save-dev来安装。
### 安装babel
在命令行中输入npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev安装。然后在根目录创建.babelrc文件。

## 设计原则和设计模式
### 设计原则
