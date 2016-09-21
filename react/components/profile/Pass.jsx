import React,{ Component } from 'react';

export default class Code extends Component{
    render() {
        return (
            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title">密码修改</h3>
                </div>
                <form className="form-horizontal">
                    <div className="box-body">
                        <div className="form-group">
                            <label for="inputEmail3" className="col-sm-2 control-label">原始密码</label>

                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputPassword3" className="col-sm-2 control-label">新的密码</label>

                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="New Password" />
                            </div>
                        </div>
                    </div>
                    <div className="box-footer">
                        <button type="submit" className="btn btn-info pull-right">修 改</button>
                    </div>
                </form>
            </div>
        )
    }
}