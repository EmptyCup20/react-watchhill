//action类型

module.exports = {

    //login
    LOGIN_INIT:'LOGIN_INIT',                //登录视图初始化
    LOGIN_REQUEST: 'LOGIN_REQUEST',         //挂起登录请求
    LOGIN_RECEIVE: 'LOGIN_RECEIVE',         //接收登录状况处理

    //register
    REGISTER_INIT: 'REGISTER_INIT',         //注册视图初始化
    REGISTER_REQUEST: 'REGISTER_REQUEST',   //挂起注册请求
    REGISTER_RECEIVE: 'REGISTER_RECEIVE',   //接收注册状况处理

    //profile
    MODIFY_INIT:'MODIFY_INIT',              //前端状态初始化(需要注意服务器端数据,刷新时保持一致)
    MODIFY_REQUEST: 'MODIFY_REQUEST',       //挂起修改请求
        MODIFY_PASS: 'MODIFY_PASS',         //修改密码
        MODIFY_EMAIL: 'MODIFY_EMAIL',       //修改邮箱
        MODIFY_BRIEF: 'MODIFY_BRIEF',       //修改简介
        MODIFY_TEL: 'MODIFY_TEL',           //修改电话
    MODIFY_RECEIVE: 'MODIFY_RECEIVE',       //接收修改状况处理
    MODIFY_LOGIN:  'MODIFY_LOGIN',          //修改信息的同时更新视图个人信息

    //logout
    LOGOUT_RECEIVE: 'LOGOUT_RECEIVE',        //注销

    //addArticle
    PREVIEW: 'PREVIEW',          //预览功能
    ADD_TEMP_ARTICLE: 'ADD_TEMP_ARTICLE',  //新增文章
    ADD_ARTICLE_TITLE: 'ADD_ARTICLE_TITLE',//新增标题
    ADD_ARTICLE_INTRO: 'ADD_ARTICLE_INTRO',//新增简介
    DEL_ARTICLE: 'DEL_ARTICLE'
};
