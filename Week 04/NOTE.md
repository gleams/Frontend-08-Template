## 字符串分析算法
1. 字典树
    + 大量高重复字符串的存储与分析
    + 使用情况1亿字符集，找频度。
1. KMP（长字符串里找部分字符串，部分匹配）
    + 在长字符串里找模式
1. wildcard
    + 带通配符的字符串模式
1. 正则
    + 字符串通用模式匹配
1. 状态机
    + 通用的字符串分析
1. LL LR
    + 字符串多层级结构分析

## 字典树
![](img/pic1.jpg)
    
## MKP字符串模式匹配
![](img/pic2.jpg)

## wildcard:ab*c?d*abc*a?d
 + 只有*:ab*cd*abc*a?d
 + 只有?:c?d,a?d
 ![](img/pic3.jpg)
 
 1. 白色星号尽量少匹配，橙色星号尽量多匹配。
 2. 绿色开头一段：
 3. 蓝色结尾一段：
 中间白色为`*+字符`一组。就是KMP
