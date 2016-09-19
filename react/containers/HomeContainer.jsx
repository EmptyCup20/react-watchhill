//基础库
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//视图组件
import Home from '../components/Home';


//function mapStateToProps(state) {
//    return {
//        login: state.login
//    }
//}


//绑定logout action到Logout组件
//function mapDispatchToProps(dispatch) {
//    return bindActionCreators(LogoutActions,dispatch);
//}


export default connect()(Home);