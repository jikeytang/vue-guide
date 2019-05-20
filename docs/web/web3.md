# 前端开发规范
本文主要整理出前端开发应该具有的规范性，为提高团队协作效率，使开发流程更加规范化。
<!--more-->
## html部分
### 1.1遵循xhtml1.0规则

1. 所有标签必须结束
2. 所有标签必须小写
3. 标签属性必须使用成对引号(单引号或双引号)
4. 标签属性必须有值
5. 所有特殊符号必须转义(&、<、>、...)
6. 文档类型声明及编码：同一位html5声明类型<!DOCTYPE html>。编码统一为<meta charset="utf-8">，书写时利用IDE实现层次分明的缩进。
7. 非特殊情况下样式文件必须外链至<head></head>之间。非特殊情况下JavaScript文件必须外链至页面底部。
	

### 1.2标签属性命名规范

- id：连接符命名法 "hello-world"
- class： 连接符命名法 "hello-world"
- name： 驼峰式命名法 "helloWorld"
	
	
1. 用于结构布局的元素id命名
	+ 主容器：main
	+ 页头：header
	+ 页脚：footer
	+ 内容区域：content
	+ LOGO：logo
	+ 主导航：main-nav
	+ 二级导航：sub-nav

2. name命名
	一般用于表单元素，根据当前元素id属性值命名，去掉id属性值的前缀和所有连接符，使用驼峰式命名法命名，例如id="id-card"，那么name="idCard"。

### 1.3合理使用标签，语义化结构
	
1. 标签合理嵌套
		
	+ span、strong、em等行级元素不能包含块级元素：div、ul、ol、p、h1~h6。尽可能减少div嵌套，例如<div><div>请输入用户名</div></div>可以使用<div><p>请输入用户名</p></div>代替。
	+ 严禁多div症、多span症、多table症，正确使用标签表现DOM结构，在文档去除css的情况下，仍然具有结构和可读性，以下是html标记的使用规范：
		- p：文本段落；
		- dl：定义列表，可包括标题和内容简介的列表；
		- ul：无序列表；
		- ol：有序列表；
		- h1~h6：文章标题、内容区块标题，根据重要性由大到小区分，h1一个页面只出现一次；
		- strong/em：强调文本；
		- img：图像，必须加上alt属性，当图像无法显示时可表示图像信息，背景和按钮使用css处理，不适用img元素；
		- table：数据网格，规则的分栏布局，尽可能显性的定宽和定高。
	+ 充分利用无兼容性问题的html自身标签，比如span，em，strong，label等等，需要为html元素添加自定义属性的时候，首先要考虑下有没有默认的已有的合适标签去设置，如果没有，可以使用须以"data-"为前缀来添加自定义属性。
	+ 书写链接地址时，必须避免重定向，例如：href="http://baidu.com/"，即须在URL地址后面加上"/"。
	+ 合理化表单结构
		+ 使用fieldset元素包裹相同类别的字段
		+ 使用legend元素表示字段类别名称
		+ 使用label表示字段文本，添加必要的for属性，以在点击字段文本时，文本框能获得焦点
		+ 文本框不使用size属性定义宽度，而使用css的width属性
		+ 添加maxlength属性限制输入字符的长度

## Css部分
### 2.1Css命名规则
1. 样式类名全部用小写，首字符必须是字母，禁止数字或其他特殊字符。由以字母开头的小写字符(a-z)、数字(0-9)、中划线(-)组成。
2. 可以使单个单词，也可以使组合单词，要求能够描述清楚模块和元素的含义，使其具有语义化。避免使用123456...red，blue，left，right之类的(如颜色、字号大小等)矢量命名，如class="left-news"、class="2"，以避免当状态改变时名称失去意义。
3. 尽量用单个单词简单描述class名称。
4. 双单词或多单词组合方式：形容词-名词、命名空间-名词、命名空间-形容词-名词。例如：news-list、mod-feeds、mod-my-feeds、cell-title。
5. css文件命名：英文命名，后缀.css。共用wichuang.css，首页index.css，其他页面依实际模块需求命名。
	
### 2.2命名空间
在编码思想上，我们可以将页面拆分为不同的层级(布局、模块、原件)。
什么是css命名空间？
通过统一的命名规范定义命名的范围，成为css class&id命名空间。
布局：以语义化的单词layout作为命名空间，例如主栏布局命名layout-main。只改变layout-命名空间后面的命名，layout始终保留。布局的命名空间为layout-xxx
模块：页面是由一个或多个模块组成，模块的英文单词是module，规范写成mod，如新闻模块mod-news，照片展示模块mod-photo-show。模块的命名空间为mod-xxx。
元件：元件是属于模块内部的，也可以说模块是由元件和它内部的自有元素组成。如用户照片信息元件cell-user-photo。元件的命名空间为cell-xxx。

### 2.3添加文档样式
1. 引用外部文件方式添加样式
2. 严禁编写标记内代码
3. 严禁在文档中使用```js <style type="text/css"></style> ```代码块
4. 如果是发布版本，请压缩合并代码，将多个样式文件合并为单个文件。

### 2.4属性简写
为了节省字节数及文件大小，以下属性请使用简写方式。

```js	
padding: top right bottom left;
margin:  top right bottom left;
border:  style width color;
border-top: style width color;
border-right: style width color;
background: color url(image) repeat position;
list-style: type position url(image);
font-weight:400/700;
```

### 2.5字体

1. 全局定义字体：```js body{font:12px arial,helvetica,sans-self;line-height:1.5;}```
2. font-family:
	1. 等宽字体组合：Arial,Helvetica,sans-serlf;
	2. 不等宽(宽扁)字体组合：Verdana,Trebuchet MS,sans-serlf;
	3. 中文字体：除非内容文本需要，不推荐强制定义；

### 2.6编写兼容的css代码
	
1. 页面必须在ie6~8、firefox、opera、safari、chrome下显示兼容。
2. 尽量不使用IE有条件注释方式，对某一版本浏览器编写额外的样式表。
3. 尽量不要使用!important或下划线等招数编写代码。

## 图片部分
	
1. 背景图片：bg001，bg002，bg003.....
2. 一般图片：img001，img002，img003.....
3. 特定图片：如banner，logo按照具体情况命名
4. 按钮图片：btn-submit，btn-cancel...
5. 运用css sprite技术集中小的背景图或图标，减小页面http请求。
6. 图片格式仅限于gif||png||jpg
7. 在保证视觉效果的情况下选择最小的图片格式与图片质量，以减小加载时间
	

## JavaScript部分
### 4.1Js命名规范
Js文件命名：英文命名，后缀.js。共用wichung-common.js，其他依实际模块需求命名

### 4.2在文档中引入js
1. 使用外部文件方式引用js
2. 将引用js的代码集中放置在一起，可放置在</head>之前或</body>之前，严禁在body间分散放置
3. 使DOM结构和js代码分离，禁止写在标记内部
4. 如果是发布版本，请将多个稳定版本的js文件压缩、归类放置到单个文件内，压缩和最小化js文件。
5. 引入js库文件，文件名须包含库名称及版本号及是否为压缩版，比如jquery-1.1.1.min.js；引入插件，文件名格式为库名称+插件名称，比如JQuery.cookie.js；
	
### 4.3优化JQuery代码，提高性能
1. 原则上仅引入JQuery库，弱需引入第三方库，须与团队其他人员讨论决定
2. JQuery变量命名：$name，普通变量命名：name
3. 选择器从最近的ID开始继承或直接使用ID选择器：$("#id tag")
4. 选择器在使用class前加上标签名：$("span.span1");
5. 尽量使用ID选择器代替class
6. 要获取子元素请使用子选择器，而不要使用后代选择器：$("#id>span")
7. 使用data()存储临时变量
8. 避免使用live()方法绑定事件
9. 在父级元素监听事件，对目标元素进行操作：$("#id").click(function(e){});
10. 推迟加载拖放、动画、视觉特效等代码，把可能会影响页面加载速度的代码绑定到$(window).load()事件中。

			
