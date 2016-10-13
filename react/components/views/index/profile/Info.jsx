import React,{ Component,PropTypes } from 'react';
import { MODIFY_EMAIL,MODIFY_BRIEF,MODIFY_TEL } from '../../../../constants/actionType';
import { init,brief_err,email_error,modify_err,tel_error,success } from '../../../../constants/httpType';

export default class Info extends Component{

    static propTypes = {
        modify_init:PropTypes.func.isRequired,   //提示初始化
        brief_error:PropTypes.func.isRequired,   //简介过长
        modify_error:PropTypes.func.isRequired,  //输入不能为空
        email_error:PropTypes.func.isRequired,   //email格式有误
        tel_error:PropTypes.func.isRequired,     //tel格式有误
        modify_start:PropTypes.func.isRequired,  //发起修改请求
        login:PropTypes.object.isRequired,
        profile:PropTypes.object.isRequired
    };


    _onFocus(e) {
        //去掉警示框
        let status = this.props.profile.modifyStatus;
        if(status !== init && status !== success) {
            this.props.modify_init();
        }
    }


    _onClick(e) {
        e.preventDefault();
        let data = {};
        let refs = this.refs;
        let emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
            telReg = /^1\d{10}$/;

        switch(e.target.id) {
            case MODIFY_BRIEF:

                let brief = refs.brief.value;

                if(brief.length >= 40) {
                    this.props.brief_error();   //简介过长
                } else if(!brief) {
                    this.props.modify_error();  //内容不能为空
                } else {
                    data = {
                        brief: brief
                    };
                }

                break;

            case MODIFY_EMAIL:
                let email = refs.email.value;

                if(!email) {
                    this.props.modify_error();  //内容不能为空
                } else if(!emailReg.test(email)) {
                    this.props.email_error();   //email格式有误
                } else {
                    data = {
                        email: email
                    };
                }

                break;

            case MODIFY_TEL:

                let tel = refs.tel.value;

                if(!tel) {
                    this.props.modify_error();  //内容不能为空
                } else if(!telReg.test(tel)) {
                    this.props.tel_error();   //tel格式有误
                } else {
                    data = {
                        tel: tel
                    };
                }

                break;

            default:
                break;
        }


        if(data.brief || data.email || data.tel) {
            this.props.modify_start(e.target.id,data);
            //清空
            refs.brief.value = '';
            refs.email.value = '';
            refs.tel.value = '';
        }


    }


    render() {
        const { profile,login } = this.props;

        return (
            <div>

                {
                    (function (){
                        switch(profile.modifyStatus) {
                            case brief_err:
                                return (
                                    <div className="alert alert-danger" role="alert">
                                        简介过长!
                                    </div>
                                );

                            case modify_err:
                                return (
                                    <div className="alert alert-danger" role="alert">
                                        修改前请输入修改内容!
                                    </div>
                                );


                            case email_error:
                                return (
                                    <div className="alert alert-danger" role="alert">
                                        请填写正确的邮箱格式!
                                    </div>
                                );

                            case tel_error:
                                return (
                                    <div className="alert alert-danger" role="alert">
                                        请填写正确的电话格式!
                                    </div>
                                );


                            default:
                                break;
                        }
                    }())
                }





                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h3 className="box-title">个签修改</h3>
                    </div>
                    <form className="form-horizontal">
                        <div className="box-body">
                            <div className="form-group">
                                <label htmlFor="profile_brief" className="col-sm-2 control-label">原始个签</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="profile_brief" value={login.loginUser.brief} disabled />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="profile_brief_new" className="col-sm-2 control-label">新的个签</label>

                                <div className="col-sm-10">
                                    <input  type="text" className="form-control" id="profile_brief_new" ref='brief'  onFocus={this._onFocus.bind(this)} />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button id={MODIFY_BRIEF} type="submit" className="btn btn-primary pull-right" onClick={this._onClick.bind(this)} >修 改</button>
                        </div>
                    </form>



                    <div className="box-header with-border">
                        <h3 className="box-title">邮箱修改</h3>
                    </div>
                    <form className="form-horizontal">
                        <div className="box-body">
                            <div className="form-group">
                                <label htmlFor="profile_email" className="col-sm-2 control-label">原始邮箱</label>

                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="profile_email" value={login.loginUser.email} disabled />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="profile_email_new" className="col-sm-2 control-label">新的邮箱</label>

                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="profile_email_new"  ref='email'  onFocus={this._onFocus.bind(this)} />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button id={MODIFY_EMAIL} type="submit" className="btn btn-primary pull-right" onClick={this._onClick.bind(this)} >修 改</button>
                        </div>
                    </form>


                    <div className="box-header with-border">
                        <h3 className="box-title">电话修改</h3>
                    </div>
                    <form className="form-horizontal">
                        <div className="box-body">
                            <div className="form-group">
                                <label htmlFor="profile_tel" className="col-sm-2 control-label">原始电话</label>

                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="profile_tel" value={login.loginUser.tel} disabled />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="profile_tel_new" className="col-sm-2 control-label">新的电话</label>

                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="profile_tel_new"  ref='tel' onFocus={this._onFocus.bind(this)}  />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button id={MODIFY_TEL} type="submit" className="btn btn-primary pull-right" onClick={this._onClick.bind(this)} >修 改</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
