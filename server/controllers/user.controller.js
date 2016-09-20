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


