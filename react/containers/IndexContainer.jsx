//基础库
import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//视图组件
import Index from '../components/Index';


function mapStateToProps(state) {
    return {
        login: state.login
    }
}



export default connect(mapStateToProps)(Index);