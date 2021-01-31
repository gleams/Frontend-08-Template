## 语言按语法分类
1. 非形式语言
    - 中文，英文
2. 形式语言（乔姆斯基谱系）
    - 0型 无限制方法
    - 1型 上下文相关方法
    - 2型 上下文无关文法
    - 3型 正则文法

    **0，1，2，3**是包含关系 2型包含1、0型。

## 产生式（BNF巴科斯-诺尔范式）
1. 用尖括号括起来的名称来表示语法结构名
1. 语法结构分成基础结构和需要用其他语法结构定义的复合结构
    - 基础结构称终结符(Terminal Symbol)--叶子结点的意思。
    - 复合结构称非终结符(Nonterminal Symbol)
1. 引号和中间的字符表示终结符
1. 可以有括号
1. `*`表示重复多次
1. `|`表示或
1. `+`表示至少一次

## 产生式--四则运算
### 四则运算
- `1+2*3`
### 终结符：
- `Number`
- `+ - * /`
### 非终结符
- MultiplicativeExpression(乘法结构)
- AddtiveExpression(加法结构)

```txt
<MultiplicativeExpression>::=<Number>|
    <MultiplicativeExpression>"*"<Number>|
    <MultiplicativeExpression>"/"<Number>|
<AdditiveExpression>::=<MultiplicativeExpression>|
    <AdditiveExpression>"+"<MultiplicativeExpression>|
    <AdditiveExpression>"-"<MultiplicativeExpression>|
```
`Number`定义为了一种特殊的乘法结构，这样定义加法的时候就比较简单，我们就可以认为这个左右都是一个乘法结构。

## 通过产生式理解乔姆斯基谱系
- 0型无限制文法
    - ?::=?
- 1型 上下文想着文法
    - ![](img/02.png)
- 2型 上下文无关文法
    - `<A>::=?`
- 3型 正则文法
    - `<A>::=<A>?`
    - `<A>::=?<A>X`
    
