//基础库
//import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//视图组件
import Register from '../components/Register';

//action
//import * as LoginActions from '../actions/login';


//绑定login store到Login组件,注册的同时也登录了,所以绑定login store
function mapStateToProps(state) {
    return {
        login: state.login
    }
}


//绑定login action到Login组件
//function mapDispatchToProps(dispatch) {
//    return bindActionCreators(LoginActions,dispatch);
//}


export default connect(mapStateToProps)(Register);