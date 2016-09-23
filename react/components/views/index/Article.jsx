import React,{ Component } from 'react'

export default class Article extends Component{
    render() {
        return (
           <div className="container">
               <div className="row">
                   <div className="col-lg-4 col-md-4 col-sm-12">
                       <div className="module-categories module">
                           <div className="box box-primary row">
                               <div className="box-body box-profile col-sm-12 col-md-12 col-lg-12">
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

                                   <div className="box-img">
                                           <img  src="#" alt="扫二维码" />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}