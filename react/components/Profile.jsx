import React,{ Component } from 'react';
import { Link } from 'react-router';



export default class Profile extends Component{
    render() {
        return (
            <div className="container">
                <br/>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="list-group">
                        <Link to="/profile/info" className="list-group-item">个人信息</Link>
                        <Link to="/profile/pass" className="list-group-item">密码</Link>
                        <Link to="/profile/avatar" className="list-group-item">头像</Link>
                        <Link to="/profile/code" className="list-group-item">二维码</Link>
                    </div>
                </div>
                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    {this.props.children}
                </div>
            </div>
        )
    }
}







