//action类型

module.exports = {

    //login
    LOGIN_INIT:'LOGIN_INIT',                //登录视图初始化
    LOGIN_ERROR:'LOGIN_ERROR',              //登录信息未填写完整
    LOGIN_USER_ERROR:'LOGIN_USER_ERROR',    //用户名格式错误
    LOGIN_PASS_ERROR: 'LOGIN_PASS_ERROR',   //密码格式错误

    LOGIN_REQUEST: 'LOGIN_REQUEST',         //挂起登录请求
    LOGIN_RECEIVE: 'LOGIN_RECEIVE',         //接收登录状况处理

    //register
    REGISTER_INIT: 'REGISTER_INIT',         //注册视图初始化
    REGISTER_ERROR:'REGISTER_ERROR',        //注册信息未填写完整
    REGISTER_USER_ERROR:'REGISTER_USER_ERROR',  //账号格式错误
    REGISTER_PASS_ERROR:'REGISTER_PASS_ERROR',  //密码格式错误
    REGISTER_PASS_TWICE_ERROR:'REGISTER_PASS_TWICE_ERROR',  //两次密码输入不一致
    REGISTER_EMAIL_ERROR:'REGISTER_EMAIL_ERROR',//邮箱格式错误
    REGISTER_TEL_ERROR:'REGISTER_TEL_ERROR',    //电话格式错误

    REGISTER_REQUEST: 'REGISTER_REQUEST',   //挂起注册请求
    REGISTER_RECEIVE: 'REGISTER_RECEIVE',   //接收注册状况处理

    //profile
    MODIFY_INIT:'MODIFY_INIT',              //前端状态初始化(需要注意服务器端数据,刷新时保持一致)
    MODIFY_ERROR:'BRIEF_ERROR',             //输入不能为空
    MODIFY_BRIEF_ERROR:'BRIEF_ERROR',       //简介字数过长
    MODIFY_EMAIL_ERROR:'MODIFY_EMAIL_ERROR',//修改邮箱格式错误
    MODIFY_TEL_ERROR:'MODIFY_TEL_ERROR',    //修改的电话格式错误
    MODIFY_PASS_ERROR:'MODIFY_PASS_ERROR',  //修改的密码格式错误
    MODIFY_VERIFY_ERROR:'MODIFY_VERIFY_ERROR',  //两次新密码输入不一致

    MODIFY_REQUEST: 'MODIFY_REQUEST',       //挂起修改请求
        MODIFY_PASS: 'MODIFY_PASS',         //修改密码
        MODIFY_EMAIL: 'MODIFY_EMAIL',       //修改邮箱
        MODIFY_BRIEF: 'MODIFY_BRIEF',       //修改简介
        MODIFY_TEL: 'MODIFY_TEL',           //修改电话
        MODIFY_AVATAR: 'MODIFY_AVATAR',     //修改头像
        MODIFY_CODE: 'MODIFY_CODE',         //修改二维码
    MODIFY_RECEIVE: 'MODIFY_RECEIVE',       //接收修改状况处理
    MODIFY_LOGIN:  'MODIFY_LOGIN',          //修改信息的同时更新视图个人信息

    //logout
    LOGOUT_RECEIVE: 'LOGOUT_RECEIVE',       //注销

    //article
    ARTICLE_INIT:'ARTICLE_INIT',            //视图初始化
    ARTICLE_REQUEST: 'ARTICLE_REQUEST',     //挂起获取文章请求
    ARTICLE_RECEIVE: 'ARTICLE_RECEIVE',     //获取文章内容处理
    ARTICLE_HOME_RECEIVE:'ARTICLE_HOME_RECEIVE', //获取主页文章列表

    //user
    USER_REQUEST: 'USER_REQUEST',           //获取个人文章列表
    USER_RECEIVE: 'USER_RECEIVE',

    //addArticle
    PREVIEW: 'PREVIEW',          //预览功能
    ADD_TEMP_ARTICLE: 'ADD_TEMP_ARTICLE',  //新增文章
    ADD_ARTICLE_TITLE: 'ADD_ARTICLE_TITLE',//新增标题
    ADD_ARTICLE_INTRO: 'ADD_ARTICLE_INTRO',//新增简介
    CLEAR_ARTICLE: 'CLEAR_ARTICLE',             //删除文章
    SAVE_ARTICLE: 'SAVE_ARTICLE',            //保存文章
    INIT_ARTICLE: 'INIT_ARTICLE',
    ADD_ARTICLE_IMG:'ADD_ARTICLE_IMG',

    //about
    ABOUT_REQUEST: 'ABOUT_REQUEST',        //挂起获取成员列表请求
    ABOUT_RECEIVE: 'ABOUT_RECEIVE'         //获取成员列表
};
