import React,{ Component } from 'react';
import { MODIFY_PASS } from '../../../../constants/actionType';



export default class Code extends Component{


    _onClick(e) {
        e.preventDefault();
        let pass = this.refs.pass.value,
            password = this.refs.password.value,
            verify = this.refs.verify.value;

        if(pass === password) {
            this.refs.password.value = '';
            this.refs.verify.value = '';
            alert('新密码与原始密码一致!');
        } else if(password !== verify) {
            this.refs.password.value = '';
            this.refs.verify.value = '';
            alert('两次新密码不一致!');
        }


        else {
            let data = {
                pass:pass,
                password:password
            };

            this.props.modify_start(MODIFY_PASS,data)
        }
    }


    render() {
        return (
            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title">密码修改</h3>
                </div>
                <form className="form-horizontal">
                    <div className="box-body">
                        <div className="form-group">
                            <label htmlFor="profile_pass" className="col-sm-2 control-label">原始密码</label>

                            <div className="col-sm-10">
                                <input type="password" ref='pass' className="form-control" id="profile_pass" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile_password" className="col-sm-2 control-label">新的密码</label>

                            <div className="col-sm-10">
                                <input type="password" ref='password' className="form-control" id="profile_password" placeholder="New Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile_verify" className="col-sm-2 control-label">密码确认</label>

                            <div className="col-sm-10">
                                <input type="password" ref='verify' className="form-control" id="verify" placeholder="New Password" />
                            </div>
                        </div>
                    </div>
                    <div className="box-footer">
                        <button type="submit" className="btn btn-info pull-right" onClick={this._onClick.bind(this)}>修 改</button>
                    </div>
                </form>
            </div>
        )
    }
}