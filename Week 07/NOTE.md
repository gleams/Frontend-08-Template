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
    
    
</tr>
</table>
