import React,{ Component } from 'react';
import { Link } from 'react-router';
//import '../../../../public/css/profile.less'


export default class Profile extends Component{
    render() {
        const {pathname} = this.props.location;
        const {login} = this.props;
        return (
            <div className="container profile-style">
                <section className="content-header">
                    <h1>个人基本信息</h1>
                </section>
                <div className='row'>
                    <div className="col-lg-3 col-md-3 col-sm-12 box-body">
                        <div className="box box-solid">
                            <ul className="nav nav-pills nav-stacked">
                                <li className={pathname=='/profile/info'?'active':''}> <Link to="/profile/info" className="list-group-item">个人信息</Link> </li>
                                <li className={pathname=='/profile/pass'?'active':''}><Link to="/profile/pass" className="list-group-item">密码</Link></li>
                                <li className={pathname=='/profile/avatar'?'active':''}><Link to="/profile/avatar" className="list-group-item" >头像</Link></li>
                                <li className={pathname=='/profile/code'?'active':''}><Link to="/profile/code" className="list-group-item">二维码</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-9 col-sm-12 content">
                        <section>
                            {this.props.children}
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
