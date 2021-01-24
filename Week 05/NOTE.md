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

 内部方法                 | Handler方法               | 何时触发 |
|:-----                    |: -----                    | ----- |
| [[Get]]                 |   get                    | 读取属性 |
|[[Set]]                  |set                       |写入属性  |  
|[[HasProperty]]          |hasProperty               |in操作符  |
|[[Delete]]               |delete                    |delete操作符
|[[Call]                  |call                      |函数调用
|[[Construct]]            |construct                 |new 操作符
|[[GetPrototypeOf]]       |getPrototypeOf            |Object.getPrototypeOf
|[[SetPrototypeOf]]       |setPrototypeOf            |object.setPrototypeOf
|[[IsExtensible]]         |isExtensible              |object.isExtensible
|[[PreventExtensions]]    |preventExtensions         |Object.preventExtensions
|[[DefineOwnProperty]]    |defineOwnProperty         |Object.defineProperty
|                         |                          |object.defineProperties
|[[GetOwnProperty]]       |getOwnPropertyDescriptor  |Object.getOwnPropertyDescriptor,
| | | for...in
| | | object.keys/values/entries
|[[OwnPropertyKeys]]      |ownPropertyKeys        |Object.getOwnPropertyNames,
| | | object.getOwnPropertySymbols,for...in,
| | | object/keys/values/entries




