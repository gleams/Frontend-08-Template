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
## Object
Object对象类型，在JavaScript运行时，原生对象的描述方式非常简单，我们只需要关心原型和属性两个部分

## 原型
- 属性
- JavaScript属性是一个key-value对，key可以是Symbol，也可以是字符串，属性主要分为两种
- 数据属性（Data Property），一般同于描述状态，当数据属性中如果存储函数，也可以用来描述行为 访问器属性 （Accessor Property），一般用户描述行为

## API相关
Object.defineProperty Objetc.create/setPrototypeOf/getPrototypeOf new / class / extends neew / function / prototype

## Object[[call]]
JavaScript中存在一些特殊的对象，如函数对象，除了一般的对象属性和原型，函数对象还有一个行为[[call]]，可以利用JavaScript中的funtion关键字、箭头运算符或者Function构造器创建的对象，会有[[call]]这个行为，当用类似f()的语法吧对象仿作函数调用时，会方位到[[call]]这个行为，如果对象中没有[[call]]行为，则会报错

## 数组对象
- Object.prototype（没有setPrototypeOf方法）
- Host Object（也可以支持[[call]] [[construct]]方法）
## Symbol
- 一般用于对象的属性名表示，一般常用的如
`Symbol、Symbol.for`
    
