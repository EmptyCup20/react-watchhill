//基础库
import React,{ Component,PropTypes } from 'react';
import { Link } from 'react-router';

//基础组件
import Input from '../elements/Input';
import Button from '../elements/Button';

//常量
import { _onClick } from '../../constants/privateType';                //私有函数常量
import { tel_error,email_error,init,user_error,pass_error,pass_twice_error,register_error,user_exist,success } from '../../constants/httpType';

//导航
import history from '../../history';



export default class Login extends Component{

    static propTypes = {
        register_init:PropTypes.func.isRequired,
        register_error:PropTypes.func.isRequired,           //填写不完整
        register_userError:PropTypes.func.isRequired,       //账号格式错误
        register_passError:PropTypes.func.isRequired,       //密码格式错误
        register_passTwiceError:PropTypes.func.isRequired,  //两次密码输入不一致
        register_emailError:PropTypes.func.isRequired,      //邮箱格式错误
        register_telError:PropTypes.func.isRequired,        //电话格式错误
        register_start:PropTypes.func.isRequired,           //发送注册请求
        register: PropTypes.object.isRequired
    };

    componentWillUpdate(nextProps,nextState) {
        if(nextProps.login.logined) {
            history.replace({
                pathname:'/index'
            });
        }
    }


    _onFocus(e) {
        let status = this.props.register.registerStatus;
        if(status !== 'init' && status !== 'success') {
            this.props.register_init();
        }
    }


    _onClick(e) {
        e.preventDefault();

        let username = $('#register_username').val(),
            pass = $('#register_pass').val(),
            password = $('#register_password').val(),
            email = $('#register_email').val(),
            tel = $('#register_tel').val(),
            team = $('#register_team').val();

        let usernameReg =/^[\w]{1,15}$/,            //[A-Za-z0-9_] 账号必须为数字字母或者是下划线
            passReg = /^[A-Za-z0-9]{1,15}$/,        //密码必须为数字或字母
            emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
            telReg = /^1\d{10}$/;


        if(username && pass && password && email && tel && team) {
            if(!usernameReg.test(username)) {                   //账号格式错误
                this.props.register_userError();
            } else if(!passReg.test(pass)) {
                this.props.register_passError();                //密码格式错误
            } else if(pass !== password) {
                this.props.register_passTwiceError();           //两次密码输入不一致
            } else if(!emailReg.test(email)) {
                this.props.register_emailError();               //邮箱格式错误
            } else if(!telReg.test(tel)) {
                this.props.register_telError();                 //电话格式错误
            } else {
                let user = {
                    author:username,
                    password:password,
                    email:email,
                    tel:tel,
                    team:team
                };
                this.props.register_start(user);                //发送注册请求
            }
        } else {
            this.props.register_error();                        //未填写完整
        }





        ////这里先暂时不检测
        //if(username && password && email && tel && team) {
        //    let user = {
        //        author:username,
        //        password:password,
        //        email:email,
        //        tel:tel,
        //        team:team
        //    };
        //
        //    this.props.register_start(user);
        //} else {
        //    alert('请填写完整!');
        //}
    }

    render() {

        const { register } = this.props;

        return (
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/"><strong>Watch</strong>Hill</Link>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">账号注册</p>

                    <form>
                        <div className="form-group has-feedback">
                            <Input id="register_username" name='author' type="text" className="form-control" placeholder="账号" onFocus={this._onFocus.bind(this)} />
                            <span className="form-control-feedback"> <i className="fa fa-user fa-fw" /></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input id="register_pass" name='pass' type="password" className="form-control" placeholder="密码"  onFocus={this._onFocus.bind(this)}/>
                            <span className="form-control-feedback"> <i className="fa fa-lock fa-fw" /></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input id="register_password" name="password" type="password" className="form-control" placeholder="密码确认" onFocus={this._onFocus.bind(this)} />
                            <span className="form-control-feedback"> <i className="fa fa-lock fa-fw" /></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input id="register_email" name="email" type="email" className="form-control" placeholder="邮箱"  onFocus={this._onFocus.bind(this)} />
                            <span className="form-control-feedback"> <i className="fa fa-comment fa-fw" /></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input id="register_tel" name="tel" type="text" className="form-control" placeholder="电话" onFocus={this._onFocus.bind(this)} />
                            <span className="form-control-feedback"> <i className="fa fa-phone fa-fw" /></span>
                        </div>
                        <div className="form-group has-feedback">
                            <select id="register_team" name="team" className="form-control" onFocus={this._onFocus.bind(this)} >
                                <option value="Web前端组">Web前端组</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                            </div>
                            <div className="col-xs-4">
                                <Button type="submit" id="submit" className="btn btn-primary btn-block btn-flat" onClick={this._onClick.bind(this)} >注册</Button>
                            </div>
                        </div>
                    </form>

                    <br/>

                    {
                        (function (){
                            switch(register.registerStatus) {
                                //case user_no_exist:
                                //    return (
                                //        <div className="alert alert-danger" role="alert">
                                //            用户名不存在!
                                //        </div>
                                //    );
                                //
                                //case password_err:
                                //    return (
                                //        <div className="alert alert-danger" role="alert">
                                //            密码错误!
                                //        </div>
                                //    );
                                //
                                //case user_error:
                                //    return (
                                //        <div className="alert alert-danger" role="alert">
                                //            账号格式错误,必须为16位以内的数字,字母和下划线组成!
                                //        </div>
                                //    );
                                //
                                //case pass_error:
                                //    return (
                                //        <div className="alert alert-danger" role="alert">
                                //            密码格式错误,必须为16位以内的数字和字母组成!
                                //        </div>
                                //    );

                                case user_exist:
                                    return (
                                        <div className="alert alert-danger" role="alert">
                                            用户名已经存在!
                                        </div>
                                    );


                                case user_error:
                                    return (
                                        <div className="alert alert-danger" role="alert">
                                            账号格式错误,必须为16位以内的数字,字母和下划线组成!
                                        </div>
                                    );


                                case pass_error:
                                    return (
                                        <div className="alert alert-danger" role="alert">
                                            密码格式错误,必须为16位以内的数字和字母组成!
                                        </div>
                                    );

                                case pass_twice_error:
                                    return (
                                        <div className="alert alert-danger" role="alert">
                                            两次密码输入不一致!
                                        </div>
                                    );

                                case email_error:
                                    return (
                                        <div className="alert alert-danger" role="alert">
                                            邮箱格式错误!
                                        </div>
                                    );

                                case tel_error:
                                    return (
                                        <div className="alert alert-danger" role="alert">
                                            电话必须是11位数字的移动电话号码!
                                        </div>
                                    );


                                case register_error:
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
        );
    }
}
