学习笔记
1. 一维数组表示二维数组：同余特性`每行的个数×第几列+列下标`
```js
  var arr = [
      [1,2,3,4],
      [5,6,7,8]
  ];
var arr2 = [
    1,2,3,4,
    5,6,7,8
]

//取8 4*1+3 = 7  arr2[7]
console.log(arr2[7]);
```
2. 使用`display:inline-black`会产出空行的感觉。元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器处理，根据white-space的处理方式（默认是normal，合并多余空白），原来HTML代码中的回车换行被转成一个空白符，在字体不为0的情况下，空白符占据一定宽度

3. 数据结构
   1. 先进，先出。js先天支持这个结构(push,shift)
```js
    let arr = [];
    arr.push(1);
    arr.push(2);
    console.log(arr.shift());
```
    2. 先进，先出.unshift,pop
```js
    let arr = [];
    arr.unshift(1);
    arr.unshift(2);
    arr.unshift(3)
    arr.shift();
```

    

