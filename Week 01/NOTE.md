## 学习笔记
### 1. HTML部分
按HTML文档插入html标签，注意顺序即可。

### 2. css部分

### 3. js部分
1. 注意三元运算符的使用
```js
      cell.innerText =
         pattern[i][j] == 2 ? "❌" :
         pattern[i][j] == 1 ? "⭕️" : "";
```
以上代码和使用`if(){}else if(){}else{}`一直。上面的代码更简洁。

---
1. 二维数组的调用。

```js
 let pattern = [
         [2,0,0],
         [0,1,0],
         [0,0,0]
     ];
   //要打印出第一个2，取值为
   console.log(pattern[0][0]) //输出2
   //取1
   console.log(pattern[1][1])//输出1
   
   //可以对应为坐标系统
   //          j
   //        i 2,0,0
   //          0,1,0
   //          0,0,0
   //
   //i为二维数组的外层，j为内层。
   
   
   // 对角线第一种情况为 i,j相等。
   //          j
   //        i 2,0,0
   //          0,2,0
   //          0,0,2
   
   
   // 对角线第一种情况为 i,j相等。
   //          j
   //        i 0,0,2
   //          0,2,0
   //          2,0,0
   
   // 对角线第二种情况为 i,j相加等于2。也就是i,j相加等于内层的长度减1
   
   //          j
   //        i 0,0,0,2
   //          0,0,2,0
   //          0,2,0,0
   //          2,0,0,0
   
```

### 4. 实现异步操作
1. 回调
1. Promise
1. async/await


---

### 5. 查看有多个HTML标签

- [wahtwg](whatwg.org) 文档查询
- 浏览器只要是HTMLElement的实例都是标签
    
    ```js
    Object.getOwnPropertyNames(window).filter((item)=>{return window[item].prototype instanceof HTMLElement})
    ``` 


### 备注
1. 学习方法
   1. 最早出现的论文、杂志
   2. 最初的实现案例
2. 标准和文档
   1. w3.org
   2. developer.mozilla.org
   3. developer.apple.com
3. 大师
   1. Tim Berners-Lee
   2. Brendan Eich
   3. Bjarne Stroustrup
   


