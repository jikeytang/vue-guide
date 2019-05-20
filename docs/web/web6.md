# 前端模块化
模块化是指将一个复杂的系统分解为多个模块以方便编码 。

## CommonJS
CommonJS (http://www.commonjs.org)是一种被广泛使用的 JavaScript 模块化规范，其核心思想是通过 require方法来同步加载依赖的其他模块，通过module.exports导出需要暴露的接口。CommonJS规范的流行得益于Node.js采用了这种方式，后来这种方式被引入到了网页开发中。例如：
```js
// 导入
const moduleA = require('./moduleA'); 
// 导出
module.exports = moduleA.someFunc;
```
CommonJS 的优点在于:

+ 代码可复用于 Node.js 环境下井运行，例如做同构应用:
+ 通过Npm发布的很多第三方模块都采用了CommonJS规范。

CommonJS的缺点在于，这样的代码无法直接运行在浏览器环境下，必须通过工具转换成标准的ES5。
CommonJS还可以细分为CommonJS1 和 CommonJS2，区别在于CommonJS1只能通过exports.XX=XX的方式导出，而CommonJS2在CommonJS1的基础上加入了module.exports=XX的导出方式。CommonJS通常指 CommonJS2。
## AMD
AMD(https://en.wikipedia.org/wiki/Asynchronous_module_definition)也是一种 JavaScript模块化规范，与CommonJS最大的不同在于，它采用了异步的方式去加载依赖的模块。AMD
规范主要用于解决针对浏览器环境的模块化问题，最具代表性的实现是requirejs.org)。例如：
```js
// 定义一个模块
define ('module' , ['dep'] , function (dep) {
 return exports;
});
//导入和使用
require (['module'] , function (module) {
});
```
AMD 的优点在于:

+ 可在不转换代码的情况下直接在浏览器中运行。
+ 可异步加载依赖。
+ 可并行加载多个依赖。
+ 代码可运行在浏览器环境和Node.js环境下。

AMD的缺点在于JavaScript运行环境没有原生支持AMD，需要先导入实现了AMD的库后才能正常使用。

## ES6模块化
ES6模块化是国际标准化组织ECMA提出的JavaScript模块化规范，它在语言层面上实现了模块化。浏览器厂商和 Node. 都宣布要原生支持该规范。它将逐渐取代CommonJS和AMD规范，成为浏览器和服务器通用的模块解决方案 。
采用ES6模块化导入及导出的代码如下:
```js
//导 入
import { readFile } from ’ fs ’; 
import React from ’react’; //导出
export function hello {) {}; 
export default {
//...
};
```
ES6模块虽然是终极模块化方案，但它的缺点在于目前无法直接运行在大部分JavaScript
运行环境下，必须通过工具转换成标准的ES5后才能正常运行。

## 样式文件中的模块化
除了JavaScript开始进行模块化改造，前端开发里的样式文件也支持模块化。以scss为例，将一些常用的样式片段放进一个通用的文件里，再在另一个文件里通过@import语句导入和使用这些样式片段:
```css
//util.scss 文件
//定义样式片段
@mixin center { 
    //水平坚直居中 
    position: absolute; 
    left: 50%;
    top: 50%;
    transform : translate( -50%，-50%);
}
// main.scss 文件
//导入和使用util.scss中定义的样式片段 
@import "util";
#box{
@include center ;
}
```