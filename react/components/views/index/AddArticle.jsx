import React,{ Component } from 'react';
import '../../../../public/css/addArticle.less'
//基础组件
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import Markdown from '../../elements/Markdown.jsx'

export default class AddArticle extends Component{
    componentWillMount(){
        this.props.preview('');
        // this.props.addTempArticle();
    }
    render(){
        const { preview, addArticle} = this.props
        return(
            <div className="content-wrapper add-article">
                <div id="container">
                    <div className="row">
                        <div className="col-xs-10  col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                            <div className="page-header">
                                <h1>新增文章</h1>
                            </div>
                            <form  id="articleForm">
                                <div className="form-group">
                                    <label htmlFor="atricleTitle">标题</label>
                                    <Input type="text" className="form-control" id="atricleTitle" name="atricleTitle" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="atricleDescribe">简介</label>
                                    <textarea id="atricleDescribe" className="form-control" rows="3" placeholder="简介..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="imgUrl">封面</label>
                                    <input id="imgUrl" name="imgUrl" type="file" className="file-loading"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="articleFile">文章图片</label>
                                    <input id="articleFile" name="articleFile" type="file" className="file-loading" multiple  />
                                    <p className="help-block">请选择.jpg.jpeg.png.gif格式的文件上传</p>
                                    <div className="btn-group">
                                       <div>
                                           <div className="btn btn-primary">获取图片的url路径</div>
                                       </div>
                                        <ul>
                                        </ul>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="text-input">文章</label>
                                    <Markdown preview={preview} addArticle={addArticle}></Markdown>
                                </div>

                                <button type="button" id="article-upload" className="btn-primary btn-block btn-flat btn button">上传</button>

                            </form>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
    componentDidMount(){
        $('#imgUrl').fileinput({
            language: "zh",
            allowedFileExtensions: ["jpg", "png", "gif", "jpeg"],
            uploadAsync: true,
            maxFileCount: 1
        });
        //初始化文章的表单
        $('#articleFile').fileinput({
            language: "zh",
            allowedFileExtensions: ["jpg", "png", "gif", "jpeg"],
            uploadAsync: true,
            maxFileSize:200
        });
    }

}
