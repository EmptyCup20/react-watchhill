//基础库
import { Link } from 'react-router';
import React,{ Component,PropTypes } from 'react';
//import '../../../../public/css/header.less';

//导航
import history from '../../../history';


export default class Header extends Component{

    static propTypes = {
        login: PropTypes.object.isRequired
    };


    logout(e) {
        e.preventDefault();
        //alert('111');
        this.props.logout();    //注销

        history.replace({
            pathname:'/index'
        });
    }

    render() {

        const { login } = this.props;

        return(
            <header className="main-header skin-header-user header-response">
                <nav className="navbar navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand"><b>Watch</b>Hill</Link>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar-collapse">
                                <i className="fa fa-bars" />
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav navbar-left" role="nav">
                                <li>
                                    <Link to="/index">主页</Link>
                                </li>
                                <li>
                                    <Link to="/about">关于</Link>
                                </li>
                            </ul>

                            {

                                (function (_this) {
                                    if (login.logined) {
                                        return (
                                            <ul className="nav navbar-nav navbar-right">
                                                <li className="dropdown">
                                                    <Link to="/add_article">新增文章</Link>
                                                </li>
                                                 <li className="dropdown user user-menu">
                                                    <a href="" className="dropdown-togglt" data-toggle="dropdown" aria-expanded="false">
                                                        <img src={login.loginUser.avatarUrl} alt="User Image" className="user-image" />
                                                        <span className="hidden-xs">{login.loginUser.author}</span>
                                                    </a>
                                                     <ul className="dropdown-menu">
                                                         <li className="user-header">
                                                             <Link to={'/user/'+ login.loginUser._id}>
                                                                 <img src={login.loginUser.avatarUrl} className="img-circle" alt="user image" />
                                                             </Link>
                                                             <p className="user-info">
                                                                 <div className="user-info-brief">{login.loginUser.brief}</div>
                                                                 <small>{login.loginUser.tel}</small>
                                                                 <small>{login.loginUser.email}</small>
                                                             </p>
                                                         </li>

                                                         <li className="user-footer">
                                                             <div className="pull-left">
                                                                 <Link to="/profile"   className="btn btn-default btn-flat">个人中心</Link>
                                                             </div>
                                                             <div className="pull-right">
                                                                 <a className="btn btn-default btn-flat" onClick={_this.logout.bind(_this)}>退出登录</a>
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
        );
    }
}
