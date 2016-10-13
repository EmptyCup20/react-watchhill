import React,{ Component,PropTypes } from 'react';
import { MODIFY_PASS } from '../../../../constants/actionType';
import { pass_twice_error,pass_error,init,old_pwd_err,modify_err,success } from '../../../../constants/httpType';



export default class Code extends Component{


    static propTypes = {
        modify_error:PropTypes.func.isRequired,  //输入不能为空
        pass_error:PropTypes.func.isRequired,    //密码格式错误
        verify_error:PropTypes.func.isRequired,  //两次新密码输入不一致
        profile:PropTypes.object.isRequired
    };

    _onFocus(e) {
        //去掉警示框
        let status = this.props.profile.modifyStatus;
        if(status !== init) {
            this.props.modify_init();
        }
    }

    _onClick(e) {
        e.preventDefault();
        let pass = this.refs.pass.value,
            password = this.refs.password.value,
            verify = this.refs.verify.value;

        let passReg = /^[A-Za-z0-9]{1,15}$/;        //密码必须为数字或字母

        if(pass && password && verify) {
            if(!passReg.test(pass) || !passReg.test(password)) {
                this.props.pass_error();
            } else if(password !== verify) {
                this.props.verify_error();
            } else {
                let data = {
                    oldPwd:pass,
                    password:password
                };

                this.props.modify_start(MODIFY_PASS,data)
            }

            this.refs.pass.value = '';
            this.refs.password.value = '';
            this.refs.verify.value = '';

        } else {        //填写不完整
            this.props.modify_error();
        }



    }


    render() {

        const { profile } = this.props;

        return (
            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">密码修改</h3>
                </div>
                <form className="form-horizontal">
                    <div className="box-body">
                        <div className="form-group">
                            <label htmlFor="profile_pass" className="col-sm-2 control-label">原始密码</label>

                            <div className="col-sm-10">
                                <input type="password" ref='pass' className="form-control" id="profile_pass" onFocus={this._onFocus.bind(this)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile_password" className="col-sm-2 control-label">新的密码</label>

                            <div className="col-sm-10">
                                <input type="password" ref='password' className="form-control" id="profile_password" onFocus={this._onFocus.bind(this)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile_verify" className="col-sm-2 control-label">密码确认</label>

                            <div className="col-sm-10">
                                <input type="password" ref='verify' className="form-control" id="verify" onFocus={this._onFocus.bind(this)} />
                            </div>
                        </div>
                    </div>


                    {
                        (function (){
                            switch(profile.modifyStatus) {
                                case modify_err:
                                    return (
                                        <div className="alert alert-danger" role="alert">
                                            请填写完整!
                                        </div>
                                    );


                                case pass_error:
                                    return (
                                        <div className="alert alert-danger" role="alert">
                                            请填写正确格式的密码!
                                        </div>
                                    );

                                case pass_twice_error:
                                    return (
                                        <div className="alert alert-danger" role="alert">
                                            两次新密码输入内容不一致!
                                        </div>
                                    );


                                case old_pwd_err:
                                    return (
                                        <div className="alert alert-danger" role="alert">
                                            原始密码错误!
                                        </div>
                                    );

                                case success:
                                    return (
                                        <div className="alert alert-success" role="alert">
                                            修改成功!
                                        </div>
                                    );
                                default:
                                    break;
                            }
                        }())
                    }


                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary pull-right" onClick={this._onClick.bind(this)}>修 改</button>
                    </div>
                </form>
            </div>
        )
    }
}
