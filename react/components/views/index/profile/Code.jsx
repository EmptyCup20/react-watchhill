import React,{ Component } from 'react';

export default class Code extends Component{
    componentWillMount(){

    }
    _onClick(){

    }
    render() {
        const {codeUrl} = this.props.login.loginUser;
        return (
            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">修改二维码</h3>
                </div>
                <form className="form-horizontal">
                    <div className="box-body">
                        <div className="form-group flie-container">
                            <label>初始二维码</label>
                            <div className='row'>
                                <img src={codeUrl} alt="二维码" className="img-circle col-sm-offset-2" />
                            </div>
                        </div>
                        <div className="form-group flie-container">
                            <label htmlFor="imgUrl">二维码</label>
                            <input id="imgUrl" name="imgUrl" type="file" className="file-loading"  />
                        </div>
                    </div>
                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary pull-right" onClick={this._onClick.bind(this)}>修 改</button>
                    </div>
                </form>
            </div>
        )
    }
    componentDidMount(){
        var _this =this;
        //初始化文件插件
        $('#imgUrl').fileinput({
            language: "zh",
            allowedFileExtensions: ["jpg", "png", "gif", "jpeg"],
            uploadAsync: true,
            maxFileCount: 1,
            uploadUrl: '/user/userImg'
        });
        //文件上传事件
        $('#imgUrl').on('fileuploaded', function(event, data, previewId, index){
            _this.props.modify_login({codeUrl:data.response.data.imgUrl});
        });
    }
}
