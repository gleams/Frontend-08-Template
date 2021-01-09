# LL算法（left left算法）
# 四则运算
# LL语法分析

```text
<Expression>::=
    <AdditiveExpression><EOF>
<AdditiveExpression>::=
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>
<MultiplicativeExpression>::=
    <Number>
    |<AdditiveExpression><*><MultiplicativeExpression>
    |<AdditiveExpression></><MultiplicativeExpression>

```

```text
<AdditiveExpression>::=
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>
    |<AdditiveExpression><*><MultiplicativeExpression>
    |<AdditiveExpression></><MultiplicativeExpression>
    
    expression

```

1. 加法是由左右两个乘法组成的，加法是可以连加的。（重复自身的一个序列）
1. 乘法是特殊的加法，只有一项的加法。
1. EOF是一个结束符。 
1. `exec`会多次匹配。
1. 调用 regexp.exec(str) 会返回第一个匹配项，并将紧随其后的位置保存在属性 regexp.lastIndex 中。 -下一次同样的调用会从位置 regexp.lastIndex 开始搜索，返回下一个匹配项，并将其后的位置保存在 regexp.lastIndex 中
```js
var reg = /a/g;
var str = 'abc_abc_abc'

var r1 = reg.exec(str);
r1 // ["a"]
r1.index // 0
reg.lastIndex // 1

var r2 = reg.exec(str);
r2 // ["a"]
r2.index // 4
reg.lastIndex // 5

var r3 = reg.exec(str);
r3 // ["a"]
r3.index // 8
reg.lastIndex // 9

var r4 = reg.exec(str);
r4 // null
reg.lastIndex // 0
```
