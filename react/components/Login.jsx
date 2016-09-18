//基础库
import React,{ Component,PropTypes } from 'react';
import { Link } from 'react-router';


//基础组件
import Input from './elements/Input';
import Button from './elements/Button';

//常量
import { _onClick } from '../constants/privateType';                //私有函数常量
import { user_no_exist,password_err } from '../constants/httpType'; //登录状态常量

//导航
import history from '../history';

export default class Login extends Component{

    static propTypes = {
        login_start: PropTypes.func.isRequired,
        login: PropTypes.object.isRequired
    };


    //不能修改属性和状态,在render之前接收到新的props和state进行执行
    componentWillUpdate(nextProps,nextState) {
        //console.log(nextProps.login);
        if(nextProps.login.logined) {
             history.replace({
                pathname:'/index'
             });   
        }
    }


    _onClick(e) {
        e.preventDefault();
        //console.log(this.refs.username.value);
        //console.log(this.refs.password.value);    //使用此种方式主要用于制作可控表单
        //let username = document.getElementById('username'),
        //    password = document.getElementById('password');


        let username = $('#login_username').val(),
            password = $('#login_password').val();

        //这里还要做一个登录格式验证

        if(username.trim() && password.trim()) {
            //console.log(username.value);
            //console.log(password.value);
            let user = {
                username: username.trim(),
                password: password.trim()
            };

            //console.log('user:',user);
            this.props.login_start(user);
            //console.log('this.props.login:',this.props.login);

        } else {
            alert('空');
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

                   {
                       (function (){
                           switch(login.loginStatus) {
                               case user_no_exist:
                                   return (

                                       <div className="alert alert-danger" role="alert">
                                           用户名不存在!
                                       </div>
                                   );

                               case password_err:
                                   return (
                                       <div className="alert alert-danger" role="alert">
                                           密码错误!
                                       </div>
                                   );
                               default:
                                   break;
                           }
                       }())
                   }


                   <from>
                       <div className="form-group has-feedback">
                           <Input id="login_username" className="form-control" placeholder="账号"  />
                           <span className="form-control-feedback"> <i className="fa fa-user fa-fw"></i></span>
                       </div>
                       <div className="form-group has-feedback">
                           <Input  id="login_password" type="password" className="form-control" placeholder="密码" />
                           <span className="form-control-feedback"> <i className="fa fa-lock fa-fw"></i></span>
                       </div>

                       <div className="row">
                           <div className="col-xs-8">
                           </div>
                           <div className="col-xs-4">
                               <Button type="submit"  className=" btn-primary btn-block btn-flat btn" onClick={this._onClick.bind(this)} >登录</Button>
                           </div>
                       </div>
                   </from>
               </div>
           </div>
        )
    }
}


