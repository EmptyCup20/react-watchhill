
import { user_no_exist,password_err,user_exist,success } from '../../react/constants/httpType';

/**
 * 登录验证
 * @param req
 * @param res
 * @param next
 */
export function loginAuthen(req,res,next) {
    //console.log(req.body.username);
    //console.log(req.body.password);
    if (req.body.username === 'xx' && req.body.password === '1111') {
        //req.session.loginName = req.body.username;
        req.session.user = req.body.username;
        res.json({status: success});
    } else if (req.body.username !== 'xx') {
        res.json({status: user_no_exist});
    } else if (req.body.password !== '1111') {
        res.json({status: password_err});
    }
}


/**
 * 账号注册
 * @param req
 * @param res
 * @param next
 */
export function register(req,res,next) {
    if(req.body.username === 'xx') {
        res.json({status:user_exist});
    } else {
        req.session.user = req.body.username;
        res.json({status:success});
    }
}



/**
 * 注销
 * @param req
 * @param res
 * @param next
 */
export function logout(req,res,next) {
    req.session.destroy(function(){     //移除会话
        res.json({status: success});
    });
}


