import React,{ Component } from 'react'
//import '../../../../public/css/blogList.less'
import { Link } from 'react-router';

//导航
import history from '../../../history';



export default class Home extends Component{


    //static contextTypes = {
    //    router: PropTypes.object
    //};


    //_onClick(e) {
    //    e.preventDefault();
    //
    //    let id = e.target.getAttribute('data-id');
    //
    //
    //    console.log(id);
    //
    //    //alert(1);
    //
    //    ////to={'/article/' + article._id}
    //    //history.replace({
    //    //    pathname:`/article/${id}`
    //    //});
    //
    //    this.context.router.push(`/article/${id}`);
    //}

    render() {
        const { articles } = this.props;

        return (
            <div className="content-wrapped blog-list">
                <div className="info-box head-response">
                    <div className="info-box-content">
                        <div className="container">
                            <blockquote>
                                <h1>我们始终秉持着emptyCup的精神，追求艺术与技术的完美融合</h1>
                                <h2>一步一个脚印，一天一个开始</h2>
                                <footer>楼宇WEB前端组 <cite title="Source Title">一群有志向的青年、一个欢乐又不失严肃的团队</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div className="container" id="actives">
                    <div className="row head-response-article">
                    {
                        articles.list.map( (article,index,articles) => {
                            return (
                                <div key={article.title} className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="thumbnail article-body">
                                        <Link to={'/article/' + article._id}>
                                            <img  className="lazy artical-image" src={article.image}   alt={article.title} />
                                        </Link>
                                        <div className="caption">
                                            <h3 className="artical-title">
                                                <Link to={'/article/' + article._id}>
                                                    {article.title}
                                                </Link>
                                            </h3>
                                            <small>作者:{article.author}</small>
                                            <br />
                                            <small>{article.createTime}</small>
                                            <p className="artical-describe">
                                                {article.describe}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}
