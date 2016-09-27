import React,{ Component } from 'react';
import '../../../../public/css/addArticle.less'
//基础组件
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import Markdown from '../../elements/Markdown.jsx'

export default class AddArticle extends Component{
    componentWillMount(){
        this.props.preview('');
    }
    addTitle(event){
        this.props.addTitle(event.target.value);
    }
    addIntro(event){
        this.props.addIntro(event.target.value);
    }
    add_del(){
        this.props.addTempArticle(this.props.addArticle);
    }

    render(){
        const { preview, addArticle } = this.props
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
                                    <input type="text" className="form-control" id="atricleTitle" name="atricleTitle" onBlur={this.addTitle.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="atricleDescribe">简介</label>
                                    <textarea id="atricleDescribe" className="form-control" rows="3" placeholder="简介..." onBlur={this.addIntro.bind(this)}  />
                                </div>
                                <div id = 'btn-div' className={addArticle.articleId?"clear":"add"}>
                                    <button type="button" id="article-add" className="btn-primary btn-block btn-flat btn button" onClick={this.add_del.bind(this)} > {addArticle.articleId?"删除清空":"新建文章"} </button>
                                </div>
                                <br></br>
                                <div className={addArticle.articleId?"":"hidden"} id="article-detail">
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

                                    <button type="button" id="article-upload" className="btn-primary btn-block btn-flat btn button">保存</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
    componentDidMount(){
        var _this = this;
        var imgUrl = {
            filename : '',
            url : ''
        };
        var files = [];

        //初始化文件插件
        $('#imgUrl').fileinput({
            language: "zh",
            allowedFileExtensions: ["jpg", "png", "gif", "jpeg"],
            uploadAsync: true,
            maxFileCount: 1,
            uploadUrl: '/article/uploadimg',
            uploadExtraData : function (previewId, index) {
                var obj = {
                    type:'cover',
                    articleId:_this.props.addArticle.articleId
                };
                return obj;
            }

        });
        $('#articleFile').fileinput({
            language: "zh",
            allowedFileExtensions: ["jpg", "png", "gif", "jpeg"],
            uploadAsync: true,
            maxFileSize:200,
            uploadUrl: '/article/uploadimg',
            uploadExtraData : function (previewId, index) {
                var obj = {
                    type:'article',
                    articleId:_this.props.addArticle.articleId
                };
                return obj;
            }
        });

        //文件上传事件
        $('#imgUrl').on('fileuploaded', function(event, data, previewId, index){
            imgUrl.filename = data.filenames[0];
            imgUrl.url = data.response.data.url;
        });

        $('#articleFile').on('fileuploaded', function(event, data, previewId, index){
            files = data.files;
        });

        //文件上传，ajax数据添加
        // $('#imgUrl').on('filepreajax', function(event, previewId, index) {
        //     $('#imgUrl').fileinput({
        //         uploadExtraData: {
        //             type:'cover',
        //             articleId:_this.props.addArticle.articleId
        //         }
        //     });
        // });
        // $('#articleFile').on('filepreajax', function(event, previewId, index) {
        //     $('#articleFile').fileinput({
        //         uploadExtraData: {
        //             type:'article',
        //             articleId:_this.props.addArticle.articleId
        //         }
        //     });
        // });

        $('#article-add').click(function(e){
            if($(e.target).parent().attr('class').indexOf('clear')>-1){
                $('#atricleTitle').val('');
                $('#atricleDescribe').val('');
                $('#imgUrl').fileinput('clear');
                $('#articleFile').fileinput('clear');
                $('#text-input').val('');
            }
        });

    }

}
