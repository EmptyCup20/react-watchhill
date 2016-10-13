//基础库
import React,{ Component,PropTypes } from 'react';
import { Link } from 'react-router';
import { login_error,user_error,pass_error,init,success } from '../../constants/httpType';


//基础组件
import Input from '../elements/Input';
import Button from '../elements/Button';

//常量
import { _onClick } from '../../constants/privateType';                //私有函数常量
import { user_no_exist,password_err } from '../../constants/httpType'; //登录状态常量

//导航
import history from '../../history';

export default class Login extends Component{

    static propTypes = {
        login_init:PropTypes.func.isRequired,           //登录视图初始化
        login_error:PropTypes.func.isRequired,          //填写不完整
        login_userError:PropTypes.func.isRequired,      //用户格式错误
        login_passError:PropTypes.func.isRequired,      //密码格式错误
        login_start: PropTypes.func.isRequired,         //发起登录请求
        login: PropTypes.object.isRequired
    };


    //这里是否可以加static属性,公司测试
    //不能修改属性和状态,在render之前接收到新的props和state进行执行
    componentWillUpdate(nextProps,nextState) {
        //console.log(nextProps.login);
        if(nextProps.login.logined) {
             history.replace({
                pathname:'/index'
             });   
        }
    }

    _onFocus(e) {
        //去掉警示框
        let status = this.props.login.loginStatus;
        if(status !== 'init' && status !== 'success') {
            this.props.login_init();
        }
    }

    _onClick(e) {
        e.preventDefault();

        let username = $('#login_username').val(),
            password = $('#login_password').val(),
            usernameReg =/^[\w]{1,15}$/,            //[A-Za-z0-9_] 账号必须为数字字母或者是下划线
            passwordReg = /^[A-Za-z0-9]{1,15}$/;    //密码必须为数字或字母

        //1.如果账号密码都填写了
        if(username && password) {
            if(!usernameReg.test(username)) {               //账号格式错误
                this.props.login_userError();
            } else if(!passwordReg.test(password)) {        //密码格式错误
                this.props.login_passError();
            } else {
                let user = {
                    author: username,
                    password: password
                };
                this.props.login_start(user);               //发起登录请求
            }
        //2.未填写完整
        } else {
            this.props.login_error();                       //未填写完整
        }
    }


    render() {

        const { login } = this.props;       //注意这里应该查看容易中允许传入的state属性
        //console.log(login.loginStatus);

        return (
           <div className="login-box skin-login">
               <div className="login-logo">
                   <Link to="/"><strong>Watch</strong>Hill</Link>
               </div>

               <div className="login-box-body">
                   <p className="login-box-msg">
                       账号登录
                   </p>

                   <from>
                       <div className="form-group has-feedback">
                           <Input  id="login_username" type="text" className="form-control"  placeholder="账号"  onFocus={this._onFocus.bind(this)}  />
                           <span className="form-control-feedback"> <i className="fa fa-user fa-fw" /></span>
                       </div>
                       <div className="form-group has-feedback">
                           <Input  id="login_password" type="password" className="form-control" placeholder="密码" onFocus={this._onFocus.bind(this)} />
                           <span className="form-control-feedback"> <i className="fa fa-lock fa-fw" /></span>
                       </div>

                       <div className="row">
                           <div className="col-xs-8">
                           </div>
                           <div className="col-xs-4">
                               <Button type="submit"  className=" btn-primary btn-block btn-flat btn" onClick={this._onClick.bind(this)} >登录</Button>
                           </div>
                       </div>
                   </from>

                   <br/>

                   {
                       (function (){
                           switch(login.loginStatus) {
                               case user_no_exist:
                                   return (
                                       <div className="alert alert-danger" role="alert">
                                           登录的用户名不存在!
                                       </div>
                                   );

                               case password_err:
                                   return (
                                       <div className="alert alert-danger" role="alert">
                                           密码错误!
                                       </div>
                                   );

                               case user_error:
                                   return (
                                       <div className="alert alert-danger" role="alert">
                                           请填写正确格式的账号,必须为16位以内的数字,字母和下划线组成!
                                       </div>
                                   );

                               case pass_error:
                                   return (
                                       <div className="alert alert-danger" role="alert">
                                           请填写正确格式的密码,必须为16位以内的数字和字母组成!
                                       </div>
                                   );

                               case login_error:
                                   return (
                                       <div className="alert alert-danger" role="alert">
                                           请填写完整!
                                       </div>
                                   );



                               default:
                                   break;
                           }
                       }())
                   }


               </div>
           </div>
        )
    }
}


