# HTML+CSS知识点梳理
### 学习理解HTML语义化标签
语义化的含义就是用正确的标签做正确的事情，html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的。利于SEO，使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

一些常用的语义化标签有：

`<header>`：header 代表网页或 section 的页眉，通常需要包含 h1~h6 或者 hgroup。

`<footer>`：footer 代表网页或 section 的页脚。通常包含一些基本信息，如：作者、相关文档链接、版权资料等。

`<nav>`：代表页面的导航链接区域。

`<article>`：代表一个在网页中自成一体的内容，其目的是为了方便开发者独立开发或重。通常需要包含一个 header/h1~h6 和一个 footer。

`<section>`：代表文档中的“节”或“段”。通常需要包含 h1~h6。

`<aside>`：代表一块独立的内容区域。通常使用分为两种情况：

- 在 article 中：作为主要内容的附属内容
- 在 article 外：最典型的应用是侧边栏

**CSS样式属性顺序**：

1、定位：position、z-index、left、right、top、bottom、clip等。

2、自身属性：width、height、min-height、max-height、min-width、max-width等。

3、文字样式：color、font-size、letter-spacing、colortext-align等。

4、背景：background-image、border等。

5、文本属性: text-align、vertical-align、text-wrap、text-transform、text-indent、text-decoration、letter-spacing、word-spacing、white-space、text-overflow等。

6、css3中属性：content、box-shadow、animation、border-radius、transform等

目的：减少浏览器reflow(回流)，提升浏览器渲染dom的性能。

参考文章： [CSS书写规范和顺序](https://juejin.cn/post/6844903914110713869)

### 学习和理解盒模型

参考文档：[盒模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)

块级盒子（Block box）：

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- width 和 height 属性可以发挥作用
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

内联盒子（Inline box）：

- 盒子不会产生换行。
-  width 和 height 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。

### 布局
#### 水平居中
- inline 级元素和 inline-block级元素：给父元素添加 `text-align:center`;
- block级元素
  - 确定宽度：
    - 设置`margin-left:auto;`和`margin-right:auto;`
    - 设置`position:absolute;`和`left: 50%; margin-left: -1/2width;`
    - 设置`position:absolute; left:0; right:0;` 和 `margin:auto;`
  - 不确定宽度
    - 利用table标签，将居中的内容放入table>tr>td里，对table设置`margin:auto;`
    - `display:table;`基本同上
    - 设置`display:absolute; left:50%;`和 `transform: translateX(-50%);`
    - 利用相对定位：父容器设置：`display:inline-block; position: relative; left: 50%;`子元素设置：`position: relative; right: 50%;`
    - 利用 flex 布局：父容器设置：`display: flex; justify-content: center;`
#### 垂直居中
- inline级元素：设置line-height=height即可实现
- inline-block元素：设置`vertical-align:middle;`
- block级元素
  - 确定高度
    - 绝对定位和负margin，设置`position:absolute; top: 50%; margin-top: -1/2width;`
    - 绝对定位和margin:auto，设置`position:absolute; top:0; bottom:0; margin:auto;`
  - 不确定高度
    - 利用table标签
    - 设置`position: absolute; top: 50%; transform: translateY(-50%);`
    - 利用flex布局：父容器设置：`display: flex; align-items: center;`
#### 水平垂直居中
- inline级元素：line-height=height，`text-align:center;`
- inline-block元素：`vertical-align:middle; text-align:center;`
- block级元素
  - 利用table标签
  - display:table
  - 确定宽高：
    - 伪元素：https://jsbin.com/winohoy/1/edit?html,css,output
    - 绝对定位和负margin：https://jsbin.com/kiwicon/1/edit?html,css,output
    - 绝对定位和margin:auto: https://jsbin.com/qelarah/1/edit?html,css,output
  - 不确定宽高：
    - 绝对定位和translate: https://jsbin.com/qayaxab/1/edit?html,css,output
    - flex布局：https://jsbin.com/nanizac/1/edit?html,css,output
#### 左、右对齐
- inline级和inline-block级：父容器添加`text-align:left/right;`
- block级：`margin-left:auto;`右对齐，`margin-right:auto;`左对齐
### CSS动画
- transition

过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。

语法：
`transition: <property> <duration> <timing-function> <delay>;`

参考文档： [transition mdn文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)
- animation

CSS animations 使得可以将从一个CSS样式配置转换到另一个CSS样式配置。使用@keyframes建立两个或两个以上关键帧；使用animation属性或其子属性配置动画时间、时长以及其他动画细节，创建动画序列。

参考文档：[CSS 动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

# JavaScript 部分
### JavaScript 事件流
当一个节点产生一个事件时，该事件会在元素节点与根节点之间按特定的顺序传播，路径所经过的节点都会收到该事件，这个传播过程称为DOM事件流。
### 事件冒泡和事件捕获
IE提出的事件流是事件冒泡，即从下至上，从目标触发的元素逐级向上传播，直到window对象。

网景的事件流是事件捕获，即从document逐级向下传播到目标元素。

### DOM事件处理

DOM事件处理分为3个级别，DOM0级事件处理，DOM2级事件处理和DOM3级事件处理。

- DOM0级事件：具有极好的跨浏览器优势，会以最快的速度绑定。DOM0级只支持冒泡阶段。
  - 方式一：内联模型：缺点是不符合 W3C 中关于内容与行为分离的基本规范。
```
<div onclick="btnClick()">click</div>
<script>
function btnClick(){
    console.log("hello");
}
</script>
```
  - 方式二：脚本模型（动态绑定）：缺点是同一个节点只能添加一次同类型事件。
```
<div id="btn">点击</div>
<script>
var btn=document.getElementById("btn");
btn.onclick=function(){
    console.log("hello");
}
</script>
```
```
<div id="btn3">
    btn3
    <div id="btn2">
        btn2
        <div id="btn1">
            btn1
        </div>
    </div>
</div>
<script>
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    btn1.onclick=function(){
        console.log(1)
    }
    btn2.onclick=function(){
        console.log(2)
    }
    btn3.onclick=function(){
        console.log(3)
    }
</script>
```
- DOM2级事件：定义了
  - `addEventListener()`——添加事件侦听器
  - `removeEventListener()`——删除事件侦听器
函数均有3个参数：第一个参数是要处理的事件名，第二个参数是作为事件处理程序的函数，第三个参数是一个Boolean值，默认 false 表示使用冒泡机制，true表示捕获机制。`addEventListener()`可以绑定多个事件处理程序。但同样的事件和事件流机制下相同方法只会触发一次。
- 阻止事件传播
  - 可以通过`stopPropagation()`来阻止冒泡
  - 通过`preventDefault()`来阻止默认事件
### 事件委托
事件委托利用冒泡的原理，由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。

优点：
- 减少内存消耗，提高性能
- 可以监听动态元素
封装事件委托：
```
function delegate(element, eventType, selector, fn) {
        element.addEventListener(eventType, e => {
            let el = e.target
            while(!el.matches(selector)) {
                if(element === el) {
                    el = null
                    break
                }
                el = el.parentNode
            }
            el && fn.call(el, e, el)
        })
        return element
    }
```
### JavaScript的基础类型和引用类型
文档：[JavaScript数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

最新的ECMAScript 标准定义了8中数据类型：
- 7种原始类型：可以使用 typeof 运算符检查
  - Boolean
  - Number
  - String
  - Symbol
  - BigInt
  - undefined
  - null
- Object
  - 判断对象的类型：
    - 已知对象类型： instanceof
    - 对象原型链判断方法：Object.prototype.toString.call()
    - 根据对象的 constructor 进行判断
  
基本类型和引用类型的区别：

基本数据类型：

- 按值访问，可操作保存在变量中实际的值
- 值被保存在栈内存中，占据固定大小的空间

引用数据类型：

- 引用类型的值是按引用访问的
- 保存在堆内存中的对象，不能直接访问操作对象的内存空间

### ES6 语法学习

[ES6 标准入门教程](https://www.bookstack.cn/read/es6-3rd/sidebar.md)

**let命令**

let 用来声明变量，所声明的变量只在 let 命令所在的代码块内有效、不存在变量提升、存在暂时性死区（TDZ）、不允许重复声明。

**const命令**

const 用来声明一个只读的常量，一旦声明，常量的值就不能改变。const 的作用域与 let 命令相同，只在声明所在的块级作用域内有效。同样不存在变量提升、存在暂时性死区。需要注意的是：const只能保证声明的简单类型的数据是不可变的，而声明的对象只能保证其内存地址不变。可以使用`Object.freeze()`方法冻结对象。

**变量的解构赋值**

- 数组的解构赋值：一种“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。（只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值）
- 对象的解构赋值：与数组不同的是，数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名。
- 字符串的解构赋值：字符串被转换成一个类似数组的对象，还可以对`length`属性解构赋值。
- 数值和布尔值的解构赋值：如果等号右边时数值和布尔值，就会先转为对象。

