//基础库
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//action
import * as ArticleActions from '../../actions/article';

//视图组件
import Home from '../views/index/Home';




function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}


//绑定article action到Home组件
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ArticleActions,dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);