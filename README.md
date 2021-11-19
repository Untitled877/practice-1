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

#### let命令
let 用来声明变量，所声明的变量只在 let 命令所在的代码块内有效、**不存在变量提升**、存在**暂时性死区**（TDZ）、不允许重复声明。
#### const命令
const 用来声明一个只读的常量，一旦声明，常量的值就不能改变。const 的作用域与 let 命令相同，只在声明所在的块级作用域内有效。**同样不存在变量提升、存在暂时性死区**。

需要注意的是：const 只能保证声明的简单类型的数据是不可变的，而声明的对象只能保证其内存地址不变。可以使用`Object.freeze()`文档 方法冻结对象。
#### 变量的解构赋值
- 数组的解构赋值：一种“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。（只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值）
- 对象的解构赋值：与数组不同的是，数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名。
- 字符串的解构赋值：字符串被转换成一个类似数组的对象，还可以对length属性解构赋值。
- 数值和布尔值的解构赋值：如果等号右边时数值和布尔值，就会先转为对象。
- 函数参数也可以使用解构赋值
解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
#### 模板字符串

模板字符串用反引号（&#96;）标识，它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。将变量名写在 `${}`中来嵌入变量。

#### 标签模板

标签模板是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分，其他参数都是模板字符串各个变量被替换后的值。

#### Set 和 Map 数据结构
##### Set

Set类似于数组，但是成员的值都是唯一的，没有重复的值。

通过 `add()`方法向 Set结构加入成员。

Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

Set 结构的实例有以下属性：
- `Set.prototype.constructor`
- `Set.prototype.size`：返回 Set 实例的成员总数

Set 实例的方法：
-   操作方法
-   Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
    -   Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    -   Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
    -   Set.prototype.clear()：清除所有成员，没有返回值。
-   遍历方法
    -   Set.prototype.keys()：返回键名的遍历器
    -   Set.prototype.values()：返回键值的遍历器
    -   Set.prototype.entries()：返回键值对的遍历器
    -   Set.prototype.forEach()：使用回调函数遍历每个成员

Set的遍历顺序就是插入顺序；

由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以`keys`方法和`values`方法的行为完全一致。

遍历的应用：

-   扩展运算符和Set结构相结合，可以给数组去重

```
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
```

-   数组的 map 和 filter 方法也可以间接用于 Set

```
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}
let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}
```

-   用 Set 实现并集（Union）、交集（Intersect）、差集（Difference）

```
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}
// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```
##### WeakSet

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

-   WeakSet 的成员只能是对象，而不能是其他类型的值。
-   WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用。WeakSet **不可遍历**。

WeakSet 结构有以下三个方法。

-   `WeakSet.prototype.add(value)` ：向 WeakSet 实例添加一个新成员。
-   `WeakSet.prototype.delete(value)` ：清除 WeakSet 实例的指定成员。
-   `WeakSet.prototype.has(value)` ：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

##### Map

Map结构是键值对的集合，提供了一种“值——值”的对应，各种类型的值（包括对象）都可以当作键。

Map构造函数的参数可以是任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构。

-   如果对同一个键多次赋值，后面的值会覆盖前面的值。
-   读取一个未知的值，则返回undefined
-   Map的键是跟内存地址绑定的，只要内存地址不一样，就视为两个键。

Map实例的属性和操作方法

- size 属性：size属性返回 Map 结构的成员总数。

- `Map.prototype.set(key, value)`： set 方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果 key 已经有值，则键值会被更新，否则就新生成该键。
- `Map.prototype.get(key)`： get方法读取key对应的键值，如果找不到key，返回 undefined。

- `Map.prototype.has(key)`： has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。

- `Map.prototype.delete(key)`: delete 方法删除某个键，返回 true。如果删除失败，返回 false。

- `Map.prototype.clear()`: clear 方法清除所有成员，没有返回值。

**遍历方法**

Map 结构原生提供三个遍历器生成函数和一个遍历方法。

-   `Map.prototype.keys()`：返回键名的遍历器。
-   `Map.prototype.values()`：返回键值的遍历器。
-   `Map.prototype.entries()`：返回所有成员的遍历器。
-   `Map.prototype.forEach()`：遍历 Map 的所有成员。

需要特别注意的是，Map 的遍历顺序就是插入顺序。

Map 结构可以转为数组结构（`...`运算符），然后使用数组的`map`方法、`filter`方法实现 Map 的遍历和过滤。

Map与其他数据结构的互相转换

-   Map转为数组：扩展运算符（`...`)
-   数组转为 Map：将数组传入构造函数就可以转为 Map
-   Map转为对象：遍历：如果键都是字符串则可以无损转为对象，否则键名会被转成字符串再作为对象的键名。
-   对象转Map：`Object.entries()`或者遍历 set
-   Map转JSON：
    -   Map键名都是字符串-转为对象JSON：
    
    ```
    function strMapToJson(strMap) {
      return JSON.stringify(strMapToObj(strMap));
    }
    ```
    -   Map键名有非字符串-转为数组JSON：

    ```
    function mapToArrayJson(map) {
      return JSON.stringify([...map]);
    }
    ```

-   JSON转Map：
    -   所有键名都是字符串
    ```
    function objToStrMap(obj) {
      let strMap = new Map();
      for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
      }
      return strMap;
    }

    function jsonToStrMap(jsonStr) {
      return objToStrMap(JSON.parse(jsonStr));
    }
    ```
    -   整个JSON是一个数组，且每个数组本身又是一个有两个成员的数组

    ```
    function jsonToMap(jsonStr) {
      return new Map(JSON.parse(jsonStr));
    }
    ```

**WeakMap**

WeakMap 与 Map 的区别：

-   WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
-   WeakMap的键名所指向的对象，它的键名所引用的对象都是弱引用，不计入垃圾回收机制。WeakMap没有遍历操作，也没有size属性。

WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。

WeakMap只有四个方法可用：`get()`、`set()`、`has()`、`delete()`。

#### Reflect

Reflect对象是ES6 为了操作对象而提供的新 API。

#### Promise

Promise 是异步编程的一种解决方案， 解决了传统异步编程回调地狱的问题。Promise是一个对象，从它可以获取异步操作的消息。

Promise对象有三种状态：

-   pending（进行中）
-   fulfilled（已成功）
-   rejected（已失败）

只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。其中 pending 是初始状态，状态的变化只有两种：

-   pending -> fulfilled（异步任务完成）
-   pending -> rejected（异步任务失败）

只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。

Promise的缺点：

-   无法取消Promise，一旦新建它就会立即执行，无法中途取消
-   如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
-   当处于pending状态时，无法得知目前进展到哪一个阶段

##### API：

-   `Promise.resolve()` 方法可以将现有对象转为Promise对象。
-   `Promise.reject()` 方法返回一个`rejected`状态的新的Promise实例。
-   `Promise.try()`方法模拟 try 代码块处理同步或异步操作，`Promise.catch()`方法模拟catch代码块捕获错误。

##### Promise 基本用法

```
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

Promise 新建后就会立即执行。

- **Promise.prototype.then()：** 它的作用是为 Promise 实例添加状态改变时的回调函数。then 方法的第一个参数是 resolved 状态的回调函数，第二个参数（可选）是 rejected 状态的回调函数。

```
p.then(onFulfilled[, onRejected]);

p.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
```
- **Promise.prototype.catch():** `Promise.prototype.catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。

Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。**一般来说，不要在** **then()** **方法里面定义 Reject 状态的回调函数（即** **then** **的第二个参数），总是使用** **catch** **方法。**

跟传统的`try/catch`代码块不同的是，如果没有使用`catch()`方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。

- **Promise.prototype.finally():** `finally()`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。

- **Promise.all():** `Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。 同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。

注意，如果作为参数的 Promise 实例，自己定义了 catch 方法，那么它一旦被rejected，并不会触发`Promise.all()`的 catch 方法。

- **Promise.race():** `Promise.race(iterable)` 方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。

- **Promise.allSettled():** `Promise.allSettled()`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。

- **Promise.any():** `Promise.any()`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只要参数实例有一个变成 fulfilled 状态，包装实例就会变成 fulfilled 状态；如果所有参数实例都变成 ejected 状态，包装实例就会变成 rejected 状态。

#### Iterator 和 for...of 循环

**遍历器（Iterator）** 是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。

**for...of 循环：**

JavaScript 原有的`for...in`循环，只能获得对象的键名，不能直接获取键值。ES6 提供`for...of`循环，允许遍历获得键值。

- 数组：`for...in`循环读取键名，`for...of`循环读取键值。`for...of`循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。

- Set 和 Map 结构：遍历的顺序是按照各个成员被添加进数据结构的顺序。Set 结构遍历时，返回的是一个值，而 Map 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前 Map 成员的键名和键值。

- 类似数组的对象：并不是所有类似数组的对象都具有 Iterator 接口，一个简便的解决方法，就是使用`Array.from`方法将其转为数组。

- 对象：对于普通的对象，`for...of`结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。但是，这样情况下，`for...in`循环依然可以用来遍历键名。

#### Generator 函数

Generator 函数是 ES6 提供的一种异步编程解决方案。调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的 next 方法，就会返回一个有着 value 和 done 两个属性的对象。value 属性表示当前的内部状态的值，是 yield 表达式后面那个表达式的值；done 属性是一个布尔值，表示是否遍历结束。

Generator 最大的特点是可以交出函数的执行权（即暂停执行）

本质上，Generator 函数是一个封装的异步任务，或者说是异步任务的容器。

-   `next()` 方法可以理解为一个“启动方法”，作用是分阶段的执行 Generator 函数。每次调用一个迭代器内部的next()方法，Generator 函数内部的指针，就是从上一次停下的地方继续运行，直到遇到下一个 `yield` 语句。
-   `next()` 方法可以接收参数，传入的参数，其实是把上一个`yield`语句返回的值给覆盖了，第一个`next()`方法其实是启动器，在它之前没有`yield`语句，所以给第一个`next()`方法传参是没有意义的。
-   Generator 函数支持 for..of循环，用来迭代 Generator 函数在执行时，生成的那个迭代对象。
-   `Generator.prototype.throw()`：Generator 函数返回的遍历器对象，都有一个 throw 方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
-   `Generator.prototype.return()`：Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。
-   `yield*`表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数。
#### async函数

async 函数是 Generator 函数的语法糖。 使用 async 关键字放在函数声明之前使其成为异步函数。

-   返回 Promise 对象：async函数返回一个 Promise 对象。async函数内部return 语句返回的值，会成为then方法回调函数的参数。
-   Promise 对象的状态变化：async 函数返回的 Promise 对象，必须等到内部所有 await 命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到  return 语句或者抛出错误。只有 async 函数内部的异步操作执行完，才会执行 then 方法指定的回调函数。
-   await 命令：async 函数的 await 命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
-   错误处理：如果 await 后面的异步操作出错，那么等同于 async 函数返回的 Promise 对象被 reject。防止出错的方法：将其放在`try...catch`代码块之中。

`Async/await` 让你的代码看起来是同步的，在某种程度上，也使得它的行为更加地同步。

#### Class的用法

ES6 提供了 class 关键字，引入了 Class（类）的概念，通过 class 关键，可以定义类。ES6 的 class 可以看作只是一个语法糖，class 写法只是让对象原型的写法更加清晰。更像面向对象编程的语法。

```
class Point{
  constructor(x, y){
	this.x = x;
	this.y = y;
}
  // 定义类的方法
  toString() {
	return'('+this.x +', '+this.y +')';
    }
}
```

类的数据类型就是函数，类本身就指向构造函数。类的内部所有定义的方法，都是不可枚举的（与 ES5 的行为不一致）

-   严格模式：类和模块的内部，默认就是严格模式，所以不需要使用 `use stric`t 指定运行模式。
-   不存在提升：类不存在变量提升。
-   name 属性：函数的 name 属性被 Class 继承。
-   某个方法之前加上（*），就表示该方法是一个 Generator 函数。
-   this 的指向：它默认指向类的实例。

**静态方法**

-   在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。静态方法中的 this 关键字（如果有），指的是类，而不是实例。
-   父类的静态方法，可以被子类继承。

**new.target 属性**

返回 new 命令作用于的那个构造函数，这个属性可以用来确定构造函数是怎么调用的。

**Class 的继承**

ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到 this上面（`Parent.apply(this)`）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（**所以必须先调用** **super** **方法**），然后再用子类的构造函数修改 this。

-   基于原型的继承：

```
function Animal(color){
     this.color = color
 }
 Animal.prototype.move = function(){} 
 function Dog(color, name){
     Animal.call(this, color) // 或者 Animal.apply(this, arguments)
     this.name = name
 }

 // 下面三行实现 Dog.prototype.__proto__ = Animal.prototype
 function temp(){}
 temp.prototype = Animal.prototype
 Dog.prototype = new temp()

 Dog.prototype.constuctor = Dog 
 Dog.prototype.say = function(){ console.log('汪')}

 var dog = new Dog('黄色','阿黄')
```

-   用 class 的继承:

```
 class Animal{
     constructor(color){
         this.color = color
     }
     move(){}
 }
 class Dog extends Animal{
     constructor(color, name){
         super(color)
         this.name = name
     }
     say(){}
 }
```

-   `Object.getPrototypeOf()`：该方法可以用来从子类上获取父类。所以可以使用这个方法判断一个类是否继承了另一个类。
-   类的 `prototype` 属性和`__proto__`属性：
    -   子类的`__proto__`属性，表示构造函数的继承，总是指向父类。
    -   子类`prototype`属性的`__proto__`属性，表示方法的继承，总是指向父类的`prototype`属性。

#### Module的用法

ES6 模块不是对象，而是通过 `export` 命令显式指定输出的代码，再通过 `import` 命令输入。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。

-   `import()`：支持动态加载模块。返回一个 Promise 对象，import() 类似于 Node 的 require 方法，区别主要是前者是**异步加载**，后者是同步加载。适用于：
    -   按需加载
    -   条件加载
    -   动态的模块路径
-   ES6 的模块自动采用严格模式
-   export 命令：`export`命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。另外，`export`语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
-   import 命令：使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。
-   使用`import* as circle from './circle';`实现模块的整体加载。
-   使用`export default`命令，为模块指定默认输出。

ES6 模块与 CommonJS 模块的差异：
-   CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
-   CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
