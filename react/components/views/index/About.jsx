import React,{ Component } from 'react';
import '../../../../public/css/about.less';

export default class About extends Component{
    render() {
        return (
            <div className="content-wrapper">
                <div className="jumbotron masthead head head-response">
                    <div className="container head-title">
                        <h1>HIK FED</h1>
                        <h2>HIK FED (Hikvision The Front-End Development Community) 海康前端开发社区</h2>
                    </div>
                </div>

                <div id="actives" className="container">
                    <div className="row">
                        <div className="box head-response-first">
                            <div className="box-header">
                                <h3 className="box-title">我们是谁</h3>
                            </div>
                            <div className="box-body">
                                <p>HIK FED是一个海康威视web前端开发社区，其中 FE 是 Front End 的缩写，D 是开发的意思:</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">我们的成员</h3>
                            </div>
                            <div className="box-body">
                                <ul className="users-list clearfix">
                                    <li>
                                        <img className="member-img" src="/images/default/avatar.jpg" alt="" />
                                        <a className="users-list-name" href="#">liumeng</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">我们的理念</h3>
                            </div>
                            <div className="box-body">
                                <p><strong>EmptyCup，</strong>不仅仅是需要保持谦逊，更多的是需要打开你的思维，发掘新的前端世界.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">我们要做什么</h3>
                            </div>
                            <div className="box-body">
                                <p>
                                    前端的世界一直在变化着，在各种熟悉的语言进化中迅速的化学反应。也许你和我们一样，对前端的理解也在不断刷新。
                                </p>
                                <p>
                                    不变的永远是变化，专业，无论什么时刻，我们用专业的态度，专业的技术，开发专业的产品，分享专业的知识。
                                </p>
                                <p>
                                    我们必须专业，必须严谨，必须乐于分享！为了保持与时代并行的脚步！
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">加入我们</h3>
                            </div>
                            <div className="box-body">
                                <p>
                                    如果您对web前端有足够的热情，又乐于分享，请加入我们！
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
