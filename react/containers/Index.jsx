import { Link } from 'react-router'
import React,{ Component } from 'react'

export default class Index extends Component{
    render() {
        return (
            <div>

                <h3>导航部分</h3>

                <h1>Watchhill</h1>
                <ul role="nav">
                    <li role="presentation"><Link to="/index" activeClassName="active" onlyActiveOnIndex={true}>主页</Link></li>
                    <li role="presentation"><Link to="/">首页</Link></li>
                    <li role="presentation"><Link to="/blog">博客页</Link></li>
                    <li role="presentation"><Link to="/about">关于页</Link></li>

                    <h4>未登录时显示</h4>

                    <li role="presentation"><Link to="/login">登录页</Link></li>
                    <li role="presentation"><Link to="/register">注册页</Link></li>


                    <h4>登录时显示用户名和注销</h4>

                </ul>

                <hr/>

                <h3>身体部分</h3>
                {this.props.children}

                <hr/>


                <h3>尾部</h3>


            </div>
        )
    }
}