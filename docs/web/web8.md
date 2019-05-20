# webpack从入门到精通
+ 参考[webpack中文指南](https://www.webpackjs.com/guides/)

## 安装webpack
在安装Webpack前请确保我们的系统安装了5.0.0及以上版本的Node. (https://nodejs.org)。
### 安装Webpack到本项目
+ npm i -D 是 npm install --save-dev 的简写，是指安装模块并保存到 package.json 的 devDependencies 
+ npm i -D webpack #安装最新的稳定版
+ npm i -D webpack@版本 #安装指定版本
+ npm i -D webpack@beta #安装最新的体验版本

如果你使用 webpack 4+ 版本，你还需要安装 CLI。
```shell
npm install --save-dev webpack-cli
```

安装完成后，我们可以通过以下途径运行安装到本项目的 Webpack:
+ 在项目根目录下对应的命令行里通过node_modules/.bin/webpack运行
Webpack的可执行文件。
+ 在Npm Script里定义的任务会优先使用本项目下的Webpack，代码如下:
```json
"scripts":{ "start":"webpack 一 config webpack.config.js"}
```
### 安装Webpack到全局
```js
npm i -g webpack
```
推荐安装到本项目，原因是可防止不同的项目因依赖不同版本的Webpack而导致冲突。

## 使用webpack
新建一个index.html。内容如下：
```js
<html> <head>
<meta charset=”UTF-8”> </head>
<body>
<div id=” app” ></div>
〈!一导入 Webpack 输出的 JavaScript 文件一〉 
<script src=”./dist/bundle.js”></script> </body>
</html>
```
新建一个工具函数show.js。内容如下：
```js
//操作 DOM 元素，将content显示到网页上
function show(content) {
window.document.getElementByid('app') .innerText = 'Hello，'+ content;
//通过 CommonJS 规范导出 show 函数
module.exports = show;
```
新建一个main.js。内容如下：
```js
//通过 CommonJS 规范导入 show 函数 
const show= require ('./show.js'); 
// 执行 show 函数
show (’ Webpack ’);
```
Webpack在执行构建时默认会从项目根目录下的webpack.config.js文件中读取配置，所以我们还需要新建它，其内容如下：
```js
const path= require ('path'); 
module.exports = {
//JavaScript 执行入口文件 
entry:'./main.js', 
output: {
// 将所有依赖的模块合并输出到一个bundle.js文件
filename : 'bundle.js',
// 将输出文件都放到 dist 目录下
path: path.resolve( dirname, ’ . Id工st ’)，
} }
```
在项目根目录下执行webpack命令运行Webpack构建，我们会发现目录下多出一个dist目录，里面有个 bundle.js文件， bundle.js 文件是一个可执行的JavaScript文件，它包含页面所依赖的两个模块 main.js、 show.js，以及内置的webpackBootstrap启动函数。这时用浏览器打开index.html网页，将会看到 Hello, Webpack。
Webpack是一个打包模块化JavaScript的工具，它会从 main.js出发，识别出源码中的模块化导入语句，递归地找出入口文件的所有依赖，将入口和其所有依赖打包到一个单独的文件中。从Webpack2版本开始，Webpack己经内置了对ES6、CommonJS、AMD模块化语句的支持 。
