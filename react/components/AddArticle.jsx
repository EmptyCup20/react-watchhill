import React,{ Component } from 'react';
import '../../public/css/addArticle.less'
//基础组件
import Input from './elements/Input';
import Button from './elements/Button';

export default class AddArticle extends Component{
    componentWillMount(){

    }
    render(){
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
                                    <textarea id="atricleDescribe" className="form-control" rows="3" placeholder="简介..."></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="imgUrl">封面</label>
                                    <input id="imgUrl" name="imgUrl" type="file" className="file-loading" data-upload-url="/article/add" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="articleFile">文章图片</label>
                                    <input id="articleFile" name="articleFile" type="file" className="file-loading" multiple data-upload-url="/article/add" />
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
                                    <div className="nav-tabs-custom">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><a href="#edit" data-toggle="tab"><i className="fa fa-pencil fa-fw"></i>编辑</a></li>
                                            <li><a href="#preview" data-toggle="tab"><i className="fa fa-eye fa-fw"></i>预览</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="active tab-pane" id="edit">
                                                <div className="form-group">
                                                    <textarea  className="form-control"  id="text-input" oninput="this.editor.update()" rows="3" placeholder="请在此输入文本 ..."></textarea>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="preview">

                                                <div id="preview">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
        function Editor(input, preview) {
            this.update = function () {
                preview.innerHTML = markdown.toHTML(input.value);
            };
            input.editor = this;
            this.update();
        }
        var a = function (id) { return document.getElementById(id); };
        new Editor(a("text-input"), a("preview"));
    }
}
