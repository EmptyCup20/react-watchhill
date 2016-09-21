//基础库
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//视图组件
import Home from '../views/index/Home';


function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}


//绑定logout action到Logout组件
//function mapDispatchToProps(dispatch) {
//    return bindActionCreators(LogoutActions,dispatch);
//}


export default connect(mapStateToProps)(Home);