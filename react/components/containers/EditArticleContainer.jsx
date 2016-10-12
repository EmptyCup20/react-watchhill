//基础库
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//action
import * as addArticle from '../../actions/addArticle';

//视图组件
import EditArticle from '../views/index/EditArticle.jsx';

function mapStateToProps(state) {
    return {
        addArticle: state.addArticle,
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(addArticle,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(EditArticle);
