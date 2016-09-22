// import { user_no_exist,password_err,user_exist,success } from '../../react/constants/httpType';
import User from '../proxy/user';


/**
 * 登录验证
 * @param req
 * @param res
 * @param next
 */
export function loginAuthen(req, res, next) {

    var query = req.body;
    User.login(query).then(function (data) {
       if(data.code === 0) {
           req.session.loginUser = data.data;
       }

       res.send(data);

    }, function (data) {
       console.log(data);
    });
}




/**
 * 账号注册
 * @param req
 * @param res
 * @param next
 */
export function register(req, res, next) {
    var query = req.body;
    User.addUser(query).then(function (data) {
        if(data.code === 0) {
            req.session.loginUser = data.data;
        }
        res.send(data)
    }, function (data) {
        console.log(data);
    });
}


/**
 * 注销
 * @param req
 * @param res
 * @param next
 */
export function logout(req, res, next) {
    req.session.destroy(function () {     //移除会话
        res.json({
            "code": 0,
            "data": null,
            "status": 'success'
        });
    });
}


/**
 * 用户信息修改(密码,邮箱,简介,电话)
 * @param req
 * @param res
 * @param next
 */
export function profile(req, res, next) {

    let user = {};
    let query = req.body;
    query.userId = req.session.loginUser._id;

    console.log(query);

    //修改密码
    if(req.params.type === 'pass') {
        User.modifyPwd(query).then( data => {
            console.log(data);
            res.send(data);
        });

    //修改邮箱,简介,电话
    }else{
        User.modfiyUserData(query).then( data => {
            console.log(data);
            res.send(data);
        })
    }







}

