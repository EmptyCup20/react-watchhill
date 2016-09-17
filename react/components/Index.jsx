import { Link } from 'react-router';
import React,{ Component } from 'react';

export default class Index extends Component{
    render() {

        const { login } = this.props;
 
        return (
            <div>

                <h3>导航部分</h3>

                <h1>Watchhill</h1>
                <ul role="nav">
                    <li role="presentation"><Link to="/index" activeClassName="active" onlyActiveOnIndex={true}>主页</Link></li>
                    <li role="presentation"><Link to="/">首页</Link></li>
                    <li role="presentation"><Link to="/blog">博客页</Link></li>
                    <li role="presentation"><Link to="/about">关于页</Link></li>

                    {
                        !login.logined 
                        ?
                        <l>
                            <li role="presentation"><Link to="/login">登录页</Link></li>
                            <li role="presentation"><Link to="/register">注册页</Link></li>
                        </l>
                        :
                        <li role="presentation"><Link>登录用户名:{login.loginUser.username}</Link></li>

                    }






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