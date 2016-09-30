# react-watchhill

## 命令

### 打包

客户端
```javascript
npm run browser
```

服务端
```javascript
npm run node
```

### 测试

客户端
```javascript
npm run test-client
```

客户端karma
```javascript
npm run karma-test-client
```


服务端
```javascript
npm run test-server
```

### 开发环境启动服务

```javascript
npm start
```


## 组件

| 组件类型      |     说明 |
| :-------- | :--------|
| `containers`    |   容器组件控制向视图组件分发`state`和`action` |
| `views`    | 视图组件是实际渲染的组件,含有子视图组件,视图组件由基础组件构成   |
| `elements`    | 元素构成的基础组件,用于检测属性的合理性   |



## 问题

| 问题      |     说明 |
| :-------- | :--------|
| `State Tree`    |   如何做到合理的分配`State Tree`,从而使`state`变化时,需要渲染的组件最小化,如何合理的改变`State Tree`,避免不必要的渲染. |
| `server.bundle.js`    | 服务端打包问题   |
| `webpack`打包    | 前端打包文件过大问题   |
| `img`元素    | `src`找不到路径时会向服务端发起当前组件的重新渲染请求   |

## 参考文献

[https://github.com/xxholly32/Blog/issues/6](https://github.com/xxholly32/Blog/issues/6)
[https://github.com/sahat/newedenfaces-react](https://github.com/sahat/newedenfaces-react)