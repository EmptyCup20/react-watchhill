import React,{ Component } from 'react';
import { Link } from 'react-router';

export default class Article extends Component{



    render() {

        const { articles,params } = this.props;
        let loading = true;     //正在获取文章
        let showArticle = {};   //显示的文章

        for(let article of articles.contentList) {
            if(article._id === params.id) {
                showArticle = article;
                loading = false;        //已经获取到文章
                break;
            }
        }

        return (
           <div className="container">
               <br/>
               {
                    loading
                    ?
                        <div className="alert alert-info" role="alert">
                            文章正在加载,请稍后...
                        </div>
                    :
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="module-categories module">
                                    <div className="box box-primary row">
                                        <div className="box-body box-profile col-sm-12 col-md-12 col-lg-12">
                                            <a>
                                                <img src={showArticle.avatarUrl} className="profile-user-img img-responsive img-circle" alt="个人照片" />
                                            </a>
                                            <h3 className="profile-username text-center">{showArticle.author}</h3>
                                            <p className="text-muted text-center">{showArticle.brief}</p>
                                            <p className="text-muted text-center">{showArticle.team}</p>

                                            <ul className="list-group list-group-unbordered">
                                                <li className="list-group-item">
                                                    <b>联系方式:</b>
                                                    <a className="pull-right" title={showArticle.tel}>{showArticle.tel}</a>
                                                </li>
                                                <li className="list-group-item">
                                                    <b>邮箱:</b>
                                                    <a className="pull-right" title={showArticle.email} href={"mailto:"+ showArticle.email}>{showArticle.email}</a>
                                                </li>
                                            </ul>
                                            <Link to={'/user/' + showArticle.userId} className="btn btn-primary btn-block"><b>更多文章...</b></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="content-wrapper bg-content markdown-body">

                                        <div dangerouslySetInnerHTML={{__html:showArticle.content }}>
                                        </div>
                                </div>

                                <div className="jumbotron">
                                    <p>扫二维码</p>
                                    <img  src={showArticle.codeUrl} alt="扫二维码" />
                                </div>
                            </div>
                        </div>
               }
           </div>
        )
    }
}
