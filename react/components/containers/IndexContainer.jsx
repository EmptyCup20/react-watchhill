//基础库
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//action
import * as LogoutActions from '../../actions/logout';

//视图组件
import Index from '../views/Index';


function mapStateToProps(state) {
    return {
        login: state.login
    }
}


//绑定logout action到Logout组件
function mapDispatchToProps(dispatch) {
    return bindActionCreators(LogoutActions,dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Index);