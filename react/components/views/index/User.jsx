import React,{ Component } from 'react'

export default class User extends Component{

    render() {

        return (

            <div className="content-wrapper">
                <div className="info-box">
                    <div className="info-box-content">
                        <div className="container authors-info">
                            <blockquote>
                                <p className="module-list-item"><a><img width="60" height="80" alt="个人照片" /></a>
                                </p>
                                <ul className="module-list">
                                    <li className="module-list-item">作者:</li>
                                    <li className="module-list-item">联系方式：</li>
                                    <li className="module-list-item">邮箱: </li>
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
                                <li>
                                <i className="fa fa-comment-o bg-yellow" />
                                <div className="timeline-item">
                                <span className="time"><i className="fa fa-clock-o" />4324312</span>
                                <h3 className="timeline-header"><a href="<%= list.url %>">43214321432</a></h3>

                                <div className="timeline-body">
                                42314321......
                                </div>

                                <div className="timeline-footer">
                                    <a className="btn btn-primary btn-xs">阅读全文...</a>
                                </div>

                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


