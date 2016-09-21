import React,{ Component } from 'react';

export default class Info extends Component{
    render() {
        return (
            <div>
                <div className="box box-info">

                    <div className="box-header with-border">
                        <h3 className="box-title">个签修改</h3>
                    </div>
                    <form className="form-horizontal">
                        <div className="box-body">
                            <div className="form-group">
                                <label htmlFor="inputPassword3" className="col-sm-2 control-label">新的个签</label>

                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="New Label" />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-info pull-right">修 改</button>
                        </div>
                    </form>


                    <div className="box-header with-border">
                        <h3 className="box-title">邮箱修改</h3>
                    </div>
                    <form className="form-horizontal">
                        <div className="box-body">
                            <div className="form-group">
                                <label htmlFor="inputEmail3" className="col-sm-2 control-label">原始邮箱</label>

                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" disabled />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword3" className="col-sm-2 control-label">新的邮箱</label>

                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="New Email" />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-info pull-right">修 改</button>
                        </div>
                    </form>


                    <div className="box-header with-border">
                        <h3 className="box-title">电话修改</h3>
                    </div>
                    <form className="form-horizontal">
                        <div className="box-body">
                            <div className="form-group">
                                <label htmlFor="inputEmail3" className="col-sm-2 control-label">原始电话</label>

                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" disabled />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword3" className="col-sm-2 control-label">新的电话</label>

                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="New Tel" />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-info pull-right">修 改</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

