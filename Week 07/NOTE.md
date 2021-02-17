## JavaScript 表达式|运算符和表达式
- Atom
- Expression
- Statement
- Structure
- Program/Module

### Atom
Grammar
- Grammar Tree vs Priority
 - `+ -`
 - `* /`
 - `()`
 
 ```txt
    +
   / \
  1   *
     / \
    2   3
    
    1+2*3 
 //构造语法树（中缀树）
 
 ```
- Left hand side & Right hand side

Runtime
- Type Convertion
- Reference

### Expression(表达式)
- Member(点运算符)
    - `a.b`
    - `a[b]`
    - foo\`string\`
    - super.b
    - super['b']
    - new.target
    - new Foo()
- New
    - new Foo
    
```js
// Example
new a()()
new new a()

```
### Reference
- Object
- Key
- delete
- assign

### Call Expressions
- Call(函数调用)
    - foo()
    - super()
    - foo()['b']
    - foo().b
    - foo()\`abc`
```js
// Example
new a()['b']
```

### Left Handside & Right Handside
```txt
a.b = c; //Left Handside 
a+b = c; //Right Handside 不行
左手和右手运算
```

### Update
 - a++
 - a--
 - --a
 - ++a
 
 ```js
// Example
++a++   //是不合法的
++(a++) //是不合法的

```

### Unary 单目去处符
 - delete a.b
 - void f00()
 - typeof a
 - +a
 - -a
 - ~a
 - !a
 - await a (await会对后续语法有影响)
 
 ### Exponental 
    - **
 ```js
3**2 **3    //唯一一个右运算符
3**(2**3)
```
- Multiplicative
    - `*/%`
- Additive
    - `+ -`
- Shift 
    - `<<>>>>>`
- RelationShip
    - `<> <= >= instanceof in`
- Equality
    - ==
    - !=
    - ===
    - !==
- Bitwise
    - & ^ |
- Logical
    - &&
    - ||
- Conditional
- ?:

## Type Convertion

- a+b
- "false" == false
- a[o] = 1;

<table>
<tr>
    <th></th>
    <th>Number</th>
    <th>String</th>
    <th>Boolean</th>
    <th>Undefined</th>
    <th>Null</th>
    <th>Object</th>
    <th>Symbol</th>
</tr>
<tr>
    <td>Number</td>
    <td>-</td>
    <td></td>
    <td>0 false</td>
    <td>X</td>
    <td>X</td>
    <td>Boxing</td>
    <td>X</td>
</tr>
<tr>
    <td>String</td>
    <td></td>
    <td>-</td>
    <td>""false</td>
    <td>X</td>
    <td>X</td>
    <td>Boxing</td>
    <td>X</td>
</tr>
<tr>
    <td>Boolean</td>
    <td>true 1<br/>false 0</td>
    <td>'true'<br/>'false'</td>
    <td>-</td>
    <td>X</td>
    <td>X</td>
    <td>Boxing</td>
    <td>X</td>
</tr>
<tr>
    <td>Undefined</td>
    <td>NaN</td>
    <td>'Undefined'</td>
    <td>0 false</td>
    <td>false</td>
    <td>-</td>
    <td>X</td>
    <td>X</td>
</tr>
<tr>
    <td>Null</td>
    <td>0</td>
    <td>'null'</td>
    <td>false</td>
    <td>X</td>
    <td>-</td>
    <td>X</td>
    <td>X</td>
</tr>
<tr>
    <td>Object</td>
    <td>ValueOf</td>
    <td>ValueOf<br/>toString</td>
    <td>true</td>
    <td>X</td>
    <td>X</td>
    <td>-</td>
    <td>X</td>
</tr>
<tr>
    <td>Symbol</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>Boxing</td>
    <td>X</td>
</tr>
</table>

## Unboxing (拆箱转换-把一个Object转换为一个普通的基本类型)

- ToPrimitive
- toString Vs valueOf
- Symbol.toPrimitive

```js
var o = {
    toString(){
        return "2";
    },
    valueOf(){
        return 1;
    },
    [Symbol.toPrimitive](){
        return 3;
    }
    
}
// 加法先调用 valueOf
// 作为属性名 优先调用toString
```

## Boxing

<table>
<tr>
    <th>
        类型
    </th>
    <th>
    对象
    </th>
    <th>
        值
    </th>
</tr>
<tr>
    <td>Number</td>
    <td>new Number(1)</td>
    <td>1</td>
</tr>
<tr>
    <td>String</td>
    <td>new String('a')</td>
    <td>'a'</td>
</tr>
<tr>
    <td>Symbol</td>
    <td>new Object(Symbol('a'))</td>
    <td>Symbol('a')</td>
</tr>
</table>

## Statement(语句)

Grammar
- 简单语句
- 组合语句
- 声明

Runtime
- Completion Record(语句执行结果记录)
- Lexical Environment（作用域）

### Completion Record(语句执行结果记录)
- [[type]]:normal,break,continue,return,or throw
- [[value]]:基本类型
- [[target]]:label

### 简单语句
- ExpressionStatement
- EmptyStatement
- DebuggerStatement
- ThrowStatement
- ContinueStatement
- BreakStatement
- ReturnStatement

### 复合语句
- BlockStatement
- IfStatement
- SwitchStatement(不介意使用)
- IterationStatement（循环语句）
- WithStatement（不介意使用）
- LabelStatement
- TryStatement

### Block

- BlockStatement
```js
{
    
}
```

### Iteration

- while()
- do {} while()
- for(;;)
- for( in )
- for( of)

### 声明
- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableDeclaration
- ClassDeclaration
- LexiDeclaration

## 声明 （在只function body里）
- function 
- function *
- async function
- async function *
- var 
 
## 预处理（pre-process）
```js
var a = 2;
void function(){
    a = 1;
    return 
    var a;
}();
console.log(a);

```
```js
var a = 2;
void function( ) {
  a = 1;
  return ;
  const a;
}
console.log(a);
```

## 作用域

```js
var a = 2;
void function() {
  a = 1;
  {
      var a;
  }
}()
console.log(a);
```

```js
var a =2;
void function() {
  a =1;
  {
      const a;
  }
}();
console.log(a);
```

