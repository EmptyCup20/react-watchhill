import { Link } from 'react-router'
import React,{ Component } from 'react'

export default class App extends Component{
    render() {
        return (
            <div>
                <h1>Watchhill首页</h1>
                <ul role="nav">
                    <li role="presentation"><Link to="/index">主页</Link></li>
                    <li role="presentation"><Link to="/login">登录</Link></li>
                    <li role="presentation"><Link to="/register">注册</Link></li>
                </ul>
            </div>
        )
    }
}


