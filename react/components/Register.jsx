//基础库
import React,{ Component,PropTypes } from 'react';
import { Link } from 'react-router';

//基础组件
import Input from './elements/Input';
import Button from './elements/Button';

//常量
import { _onClick } from '../constants/privateType';                //私有函数常量


//导航
import history from '../history';



export default class Login extends Component{

    _onClick(e) {
        e.preventDefault();
        //alert('1111');
        let username = $('#register_username').val(),
            pass = $('#register_pass').val(),
            password = $('#register_password').val(),
            email = $('#register_email').val(),
            tel = $('#register_tel').val(),
            team = $('#register_team').val();
    }

    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/"><strong>Watch</strong>Hill</Link>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">账号注册</p>
                    <form>
                        <div className="form-group has-feedback">
                            <Input name='author' type="text" className="form-control" placeholder="账号" />
                            <span className="form-control-feedback"> <i className="fa fa-user fa-fw"></i></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input name='pass' type="password" className="form-control" placeholder="密码" />
                            <span className="form-control-feedback"> <i className="fa fa-lock fa-fw"></i></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input name="password" type="password" className="form-control" placeholder="密码确认" />
                            <span className="form-control-feedback"> <i className="fa fa-lock fa-fw"></i></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input name="email" type="text" className="form-control" placeholder="邮箱" /> 
                            <span className="form-control-feedback"> <i className="fa fa-comment fa-fw"></i></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input name="tel" type="text" className="form-control" placeholder="电话" />
                            <span className="form-control-feedback"> <i className="fa fa-phone fa-fw"></i></span>
                        </div>
                        <div className="form-group has-feedback">
                            <select name="team" className="form-control">
                                <option value="Web前端组">Web前端组</option>
                                <option value="Web前端组">Web前端组</option>
                                <option value="Web前端组">Web前端组</option>
                                <option value="Web前端组">Web前端组</option>
                                <option value="Web前端组">Web前端组</option>
                                <option value="Web前端组">Web前端组</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                            </div>
                            <div className="col-xs-4">
                                <Button type="submit" id="submit" className="btn btn-primary btn-block btn-flat">注册</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
