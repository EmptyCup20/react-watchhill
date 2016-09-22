// import { user_no_exist,password_err,user_exist,success } from '../../react/constants/httpType';
import user from '../proxy/user';
/**
 * 登录验证
 * @param req
 * @param res
 * @param next
 */
export function loginAuthen(req, res, next) {

    var query = req.body;
    user.login(query).then(function (data) {
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
    user.addUser(query).then(function (data) {
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
    user.userId = req.session.loginUser._id;

    switch(req.params.type) {
        case 'pass':
            user.oldPwd = query.pass;
            user.newPwd = query.password;
            break;

        case 'info':
            if(query.brief) {
               user.brief = query.brief;
            } else if(query.email) {
               user.email = query.email;
            } else if(query.tel) {
               user.tel = query.tel;
            }
            break;

        default:
            break;
    }


    console.log(user);



}

