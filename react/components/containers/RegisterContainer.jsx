//基础库
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//视图组件
import Register from '../views/Register';

//action
import * as RegisterActions from '../../actions/register';


//绑定login store到Login组件,注册的同时也登录了,所以绑定login store
function mapStateToProps(state) {
    return {
        register: state.register,
        login:state.login
    }
}


//绑定register action到Login组件
function mapDispatchToProps(dispatch) {
    return bindActionCreators(RegisterActions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);