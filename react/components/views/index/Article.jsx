import React,{ Component } from 'react'

export default class Article extends Component{
    render() {
        return (
           <div className="container">
               <br/>
               <div className="row">
                   <div className="col-lg-4 col-md-4 col-sm-12">
                       <div className="module-categories module">
                           <div className="box box-primary row">
                               <div className="box-body box-profile col-sm-12 col-md-12 col-lg-12">
                                   <a>
                                       <img className="profile-user-img img-responsive img-circle" alt="个人照片" />
                                   </a>
                                   <h3 className="profile-username text-center">作者</h3>
                                   <p className="text-muted text-center">个签</p>
                                   <p className="text-muted text-center">组别</p>

                                   <ul className="list-group list-group-unbordered">
                                       <li className="list-group-item">
                                           <b>联系方式:</b>
                                       </li>
                                       <li className="list-group-item">
                                           <b>邮箱:</b>
                                       </li>
                                   </ul>
                                   <a className="btn btn-primary btn-block"><b>更多文章...</b></a>
                                   <div className="box-img">
                                           <img  alt="扫二维码" />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div className="col-lg-8 col-md-8 col-sm-12">
                       <div className="content-wrapper bg-content">
                           <div className="container md-content">
                               2313213
                           </div>
                       </div>
                   </div>

               </div>
           </div>
        )
    }
}