//基础库
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//action
import * as addArticle from '../actions/addArticle';

//视图组件
import AddArticle from '../views/index/AddArticle.jsx';

function mapStateToProps(state) {
    return {
        addArticle: state.addArticle
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(addArticle,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AddArticle);
