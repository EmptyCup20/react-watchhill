//请求状态

module.exports = {


    init: 'init',                       //初始化

    //login
                                        //注意这里是未发起请求时的校验错误
    login_error:'login_error',          //登录信息未填写完整

                                        //服务器返回错误
    user_no_exist: 'user_no_exist',     //用户不存在
    password_err: 'password_err',       //密码错误

    //register
    register_error:'register_error',    //注册信息未填写完整
    user_exist: 'user_exist',           //用户存在
    pass_twice_error:'pass_twice_error',    //两次密码输入不一致
    email_error:'email_error',          //邮箱格式错误
    tel_error:'tel_error',              //电话格式错误

    //login || register
    user_error: 'user_error',           //用户格式错误
    pass_error: 'pass_error',           //用户密码错误


    //profile
    old_pwd_err: 'old_pwd_err',         //原始密码错误


    success:'success',                  //请求成功
    fail:'fail'                         //请求失败
};