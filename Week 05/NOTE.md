## proxy
1. Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
1. Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
## proxy 语法
```js
let proxy = new Proxy(target, handler)
```
+ target —— 是要包装的对象，可以是任何东西，包括函数。
+ handler —— 代理配置：带有“捕捉器”（“traps”，即拦截操作的方法）的对象。比如 get 捕捉器用于读取 target 的属性，set 捕捉器用于写入 target 的属性，等等。
javascript 中的内部方法，这所谓的"内部方法"，它描述了最底层的工作方式。例如：[[get]],[[set]];用于添加到new proxy的handler参数中以拦截操作的方法

<table border="1">
<tr>
    <td>内部方法</td>
    <td>Handler方法</td>
    <td>何时触发</td>
</tr>
<tr>
    <td>[[Get]]</td>
    <td>get </td>
    <td>读取属性</td>
</tr>

<tr>
    <td>[[Set]] </td>
    <td>set</td>
    <td>写入属性</td>
</tr>
<tr>
    <td>[[HasProperty]] </td>
    <td>hasProperty</td>
    <td>in操作符</td>
</tr>
<tr>
    <td>[[Delete]]</td>
    <td>delete</td>
    <td>delete操作符</td>
</tr>
<tr>
    <td>[[Call]</td>
    <td>call</td>
    <td>函数调用</td>
</tr>
<tr>
    <td>[[Construct]] </td>
    <td>construct</td>
    <td>new 操作符</td>
</tr>
<tr>
    <td>[[GetPrototypeOf]]</td>
    <td>getPrototypeOf</td>
    <td>Object.getPrototypeOf</td>
</tr>
<tr>
    <td>[[SetPrototypeOf]] </td>
    <td>setPrototypeOf</td>
    <td>object.setPrototypeOf</td>
</tr>
<tr>
    <td>[[IsExtensible]] </td>
    <td>isExtensible</td>
    <td>object.isExtensible</td>
</tr>
<tr>
    <td>[[PreventExtensions]] </td>
    <td>preventExtensions</td>
    <td>Object.preventExtensions</td>
</tr>
<tr>
    <td>[[DefineOwnProperty]] </td>
    <td>defineOwnProperty </td>
    <td>Object.defineProperty<br/>
    object.defineProperties
    </td>
</tr>
<tr>
    <td>[[GetOwnProperty]] </td>
    <td>getOwnPropertyDescriptor </td>
    <td>Object.getOwnPropertyDescriptor,<br/>
    for...in<br/>
    object.keys/values/entries
    </td>
</tr>
<tr>
    <td>[[OwnPropertyKeys]]</td>
    <td>ownPropertyKeys  </td>
    <td>Object.getOwnPropertyNames,<br/>
         object.getOwnPropertySymbols,for...in,<br/>
         object/keys/values/entries
    </td>
</tr>
</table>




