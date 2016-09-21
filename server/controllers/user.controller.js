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
           let login = data.data[0];    //数据库给的是数组
           req.session.author = login.author;
           req.session.avatarUrl = login.avatarUrl;
           req.session.email =  login.email;
           req.session.team =  login.team;
           req.session.brief =  login.brief;
           req.session.codeUrl =  login.codeUrl;
           req.session.tel =  login.tel;
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
            let login = data.data;    //数据库给的是数组
            req.session.author = login.author;
            req.session.avatarUrl = login.avatarUrl;
            req.session.email =  login.email;
            req.session.team =  login.team;
            req.session.brief =  login.brief;
            req.session.codeUrl =  login.codeUrl;
            req.session.tel =  login.tel;
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


