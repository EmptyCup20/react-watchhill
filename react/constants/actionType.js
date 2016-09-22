//action类型

module.exports = {

    //login
    LOGIN_REQUEST: 'LOGIN_REQUEST',         //挂起登录请求
    LOGIN_RECEIVE: 'LOGIN_RECEIVE',         //接收登录状况处理

    //register
    REGISTER_REQUEST: 'REGISTER_REQUEST',   //挂起注册请求
    REGISTER_RECEIVE: 'REGISTER_RECEIVE',   //接收注册状况处理

    //logout
    LOGOUT_RECEIVE: 'LOGOUT_RECEIVE',        //注销

    //addArticle
    PREVIEW: 'PREVIEW',          //预览功能
    ADD_TEMP_ARTICLE: 'ADD_TEMP_ARTICLE'  //新增文章
};
