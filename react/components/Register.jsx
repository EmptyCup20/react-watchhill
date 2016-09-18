//基础库
import React,{ Component,PropTypes } from 'react';

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
            <div className="container">
                <h1>账号注册</h1>
                <form role="form">
                    <div className="form-group">
                        <label htmlFor="register_username">账号</label>
                        <Input id="register_username" type="text" className="form-control" placeholder="账号" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register_pass">密码</label>
                        <Input id="register_pass" type="password" className="form-control" placeholder="密码" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register_password">密码确认</label>
                        <Input id="register_password" type="password" className="form-control" placeholder="密码确认" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register_email">邮箱</label>
                        <Input id="register_email" type="email" className="form-control" placeholder="邮箱" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register_tel">电话</label>
                        <Input id="register_tel" type="text" className="form-control" placeholder="电话" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register_team">组别</label>
                        <select id="register_team" className="form-control">
                            <option value="web前端组">web前端组</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <div>
                            <Button type="submit" className="btn btn-default" onClick={this._onClick.bind(this)}  >注 册</Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
