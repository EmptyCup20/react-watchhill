import React,{ Component } from 'react';
import { Link } from 'react-router';

export default class User extends Component{

    render() {

        let loading = true;
        const { user,params } = this.props;
        const  lists  = user.articleList;

        let showList = {};   //显示的文章列表

        for(let articleList of lists) {
            if(articleList._id === params.id) {
                showList = articleList;
                loading = false;        //已经获取到用户列表
                break;
            }
        }


        return (

            <div className="content-wrapper">
                <br/>
                {
                    loading
                    ?
                        <div className="alert alert-info" role="alert">
                            信息正在加载,请稍后...
                        </div>
                    :

                        <div className="info-box">
                            <div className="info-box-content">
                                <div className="container authors-info">
                                    <blockquote>
                                        <p className="module-list-item">
                                            <a>
                                                <img class="img-circle" width="60" height="80" alt="个人照片" />
                                            </a>
                                        </p>
                                        <ul className="module-list">
                                            <li className="module-list-item">作者:{showList.author}</li>
                                            <li className="module-list-item">联系方式：{showList.tel}</li>
                                            <li className="module-list-item">邮箱: {showList.email}</li>
                                        </ul>
                                    </blockquote>
                                </div>
                                <div className="container author-info-list">
                                    <ul className="timeline">
                                        <li className="time-label">
                                            <span className="bg-red">
                                                10 Feb. 2014
                                            </span>
                                        </li>
                                        {
                                            showList.articleList.map(function(article,index,lists) {
                                                return (
                                                    <li key={article._id}>
                                                        <i className="fa fa-comment-o bg-yellow" />
                                                        <div className="timeline-item">
                                                            <span className="time"><i className="fa fa-clock-o" />article.createTime</span>
                                                            <h3 className="timeline-header">
                                                                <Link to={'/article/' + article._id}>
                                                                    {article.title}
                                                                </Link>
                                                            </h3>

                                                            <div className="timeline-body">
                                                                {article.describe}
                                                            </div>

                                                            <div className="timeline-footer">
                                                                <Link to={'/article/' + article._id} className="btn btn-primary btn-xs">阅读全文...</Link>
                                                            </div>

                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}


