/**
 * 请求的返回信息
 * @Author zhangxin14
 * @Date   2016/9/20
 *
 */

module.exports = {
    /* 成功信息 */
    successMsg: {
        "code": 0,
        "data": null,
        "status": 'success'
    },

    /* 注册失败(用户名已存在) */
    registerErr: {
        "code": 11,
        "data": null,
        "status": 'user_exist'
    },

    /* 登录失败(用户名不存在) */
    loginNoExistErr:{
        "code": 21,
        "data": null,
        "status": 'user_no_exist'
    },
    
    /* 登录失败(密码错误) */
    loginPwdErr:{
        "code": 22,
        "data": null,
        "status": 'password_err'
    },
};
