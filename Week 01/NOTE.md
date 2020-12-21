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
```






