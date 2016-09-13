# react-watchhill


## Bug1

官方文档


```javascript
"scripts": {
  "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
  "start:dev": "webpack-dev-server --inline --content-base public/ --history-api-fallback",
  "start:prod": "npm run build && node server.bundle.js",
  "build:client": "webpack",
  "build:server": "webpack --config webpack.server.config.js",
  "build": "npm run build:client && npm run build:server"
}
```