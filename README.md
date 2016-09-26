# react-watchhill

## Component

- containers[容器组件]:控制向视图组件分发`state`和`action`
- views[视图组件]:实际组件,视图组件中含有子视图组件,视图组件由基础组件构成
- elements[基础组件]:元素构成的基础组件,用于检测属性的合理性(这里只用了两个样例)

## 问题
- State Tree
如何做到合理的分配`State Tree`,从而使`state`变化时,需要渲染的组件最小化,如何合理的改变`State Tree`,避免不必要的渲染.

- server.bundle.js
服务端打包问题.

- webpack打包
打包文件过大问题.

- img问题
src找不到路径时会向服务端发起当前组件的重新渲染请求,Link标签失效