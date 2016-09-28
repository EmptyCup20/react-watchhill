import React,{ Component } from 'react';
import { MODIFY_EMAIL,MODIFY_BRIEF,MODIFY_TEL } from '../../../../constants/actionType';


export default class Info extends Component{

    _onClick(e) {
        e.preventDefault();
        let data = {};
        let refs = this.refs;

        switch(e.target.id) {
            case MODIFY_BRIEF:
                data = {
                    brief: refs.brief.value
                };
                break;

            case MODIFY_EMAIL:
                data = {
                    email: refs.email.value
                };
                break;

            case MODIFY_TEL:
                data = {
                    tel: refs.tel.value
                };
                break;

            default:
                break;
        }

        this.props.modify_start(e.target.id,data);

        //清空
        refs.brief.value = '';
        refs.email.value = '';
        refs.tel.value = '';

    }


    render() {
        const { profile,login } = this.props;

        return (
            <div>
                {
                    (function (){
                        if(profile.modifyStatus === 'success')  {
                            return (
                                <div className="alert alert-success" role="alert">
                                    修改成功!
                                </div>
                            );
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
                                    <input  type="text" className="form-control" id="profile_brief_new" ref='brief' placeholder="New Label" />
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
                                    <input type="email" className="form-control" id="profile_email_new"  ref='email' placeholder="New Email" />
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
                                    <input type="text" className="form-control" id="profile_tel_new"  ref='tel' placeholder="New Tel" />
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
