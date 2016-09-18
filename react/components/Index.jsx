//基础库
import { Link } from 'react-router';
import React,{ Component,PropTypes } from 'react';

//基础组件(demo)
import Button from './elements/Button';


//导航
import history from '../history';

export default class Index extends Component{

    static propTypes = {
        login: PropTypes.object.isRequired
    };


    logout(e) {
        e.preventDefault();
        //alert('111');
        this.props.logout();    //注销
    }


    // componentWillUpdate(nextProps,nextState) {
    //    if(!nextProps.login.logined) {
    //        history.replace({
    //            pathname:'/'
    //        });
    //    }
    // }


    render() {

        const { login } = this.props;
        //console.log(login);
 
        return (
            <div>
                <header className="main-header skin-header-user">
                    <nav className="navbar navbar-static-top">
                        <div className="container">
                            <div className="navbar-header">
                                <Link to="/" className="navbar-brand"><b>Watch</b>Hill</Link>
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#navbar-collapse">
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="navbar-collapse">
                                <ul className="nav navbar-nav navbar-left">
                                    <li>
                                        <Link to="/index">主页</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">博客</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">关于</Link>
                                    </li>
                                </ul>
                                
                                {
                                    (function (obj){
                                        if(login.logined) {
                                            return (
                                                <ul className="nav navbar-nav navbar-right">
                                                    <li class="dropdown">
                                                        <Link href="#">新增文章</Link>
                                                    </li>

                                                     <li className="dropdown user user-menu">
                                                        <a href="" className="dropdown-togglt" data-toggle="dropdown" aria-expanded="false">
                                                            <img src="#" alt="User Image" className="user-image" />
                                                            <span className="hidden-xs">{login.loginUser.username}</span>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li className="user-header">
                                                                <Link href="#">
                                                                    <img src="#" className="img-circle" alt="user image" />
                                                                </Link>
                                                                <p>
                                                                    人生一世
                                                                    <small>18768107826</small>
                                                                    <small>11@qq.com</small>
                                                                </p> 
                                                            </li>
                                                            <li className="user-footer">
                                                                <div className="pull-left">
                                                                    <Link href="#" className="btn btn-default btn-flat">个人中心</Link>
                                                                </div>
                                                                <div className="pull-right">
                                                                    <Link  className="btn btn-default btn-flat" onClick={obj.logout.bind(obj)}>退出登录</Link>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            )
                                        } else {
                                            return (
                                                <ul className="nav navbar-nav navbar-right">
                                                    <li>
                                                        <Link to="/login">登录</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/register">注册</Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    }(this))
                                }

                            </div>
                        </div>
                    </nav>
                </header>



                <h3>导航部分</h3>

                <h1>Watchhill</h1>
                <ul role="nav">
                    <li role="presentation"><Link to="/index" activeClassName="active" onlyActiveOnIndex={true}>主页</Link></li>
                    <li role="presentation"><Link to="/index">主页</Link></li>
                    <li role="presentation"><Link to="/blog">博客页</Link></li>
                    <li role="presentation"><Link to="/about">关于页</Link></li>
                    {
                        (function (obj){
                            if(login.logined) {
                                return (
                                    <l>
                                        <li role="presentation">登录用户:{login.loginUser.username}</li>
                                        <li role="presentation"><a onClick={obj.logout.bind(obj)} > 注销 </a></li>
                                    </l>
                                )
                            } else {
                                return (
                                    <l>
                                        <li role="presentation"><Link to="/login">登录</Link></li>
                                        <li role="presentation"><Link to="/register">注册</Link></li>
                                    </l>
                                )
                            }
                        }(this))
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