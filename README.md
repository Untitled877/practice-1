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
