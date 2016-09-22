//基础库
import React,{ Component,PropTypes } from 'react';
import { Link } from 'react-router';

//基础组件
import Input from '../elements/Input';
import Button from '../elements/Button';

//常量
import { _onClick } from '../../constants/privateType';                //私有函数常量
import { user_exist } from '../../constants/httpType'; //注册状态常量

//导航
import history from '../../history';



export default class Login extends Component{

    static propTypes = {
        register: PropTypes.object.isRequired
    };

    componentWillUpdate(nextProps,nextState) {
        if(nextProps.login.logined) {
            history.replace({
                pathname:'/index'
            });
        }
    }


    _onClick(e) {
        e.preventDefault();

        let username = $('#register_username').val().trim(),
            pass = $('#register_pass').val().trim(),
            password = $('#register_password').val().trim(),
            email = $('#register_email').val().trim(),
            tel = $('#register_tel').val().trim(),
            team = $('#register_team').val().trim();


        //这里先暂时不检测
        if(username && password && email && tel && team) {
            let user = {
                author:username,
                password:password,
                email:email,
                tel:tel,
                team:team
            };

            this.props.register_start(user);
        } else {
            alert('请填写完整!');
        }
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


                    {
                        (function(){
                            if(register.registerStatus === user_exist) {
                                return (
                                    <div className="alert alert-danger" role="alert">
                                        用户名已经存在!
                                    </div>
                                );
                            }
                        }())
                    }


                    <form>
                        <div className="form-group has-feedback">
                            <Input id="register_username" name='author' type="text" className="form-control" placeholder="账号" />
                            <span className="form-control-feedback"> <i className="fa fa-user fa-fw" /></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input id="register_pass" name='pass' type="password" className="form-control" placeholder="密码" />
                            <span className="form-control-feedback"> <i className="fa fa-lock fa-fw" /></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input id="register_password" name="password" type="password" className="form-control" placeholder="密码确认" />
                            <span className="form-control-feedback"> <i className="fa fa-lock fa-fw" /></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input id="register_email" name="email" type="email" className="form-control" placeholder="邮箱" />
                            <span className="form-control-feedback"> <i className="fa fa-comment fa-fw" /></span>
                        </div>
                        <div className="form-group has-feedback">
                            <Input id="register_tel" name="tel" type="text" className="form-control" placeholder="电话" />
                            <span className="form-control-feedback"> <i className="fa fa-phone fa-fw" /></span>
                        </div>
                        <div className="form-group has-feedback">
                            <select id="register_team" name="team" className="form-control">
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
                </div>
            </div>
        );
    }
}
