
import { user_no_exist,password_err,success } from '../../react/constants/httpType';

export function loginAuthen(req,res,next) {
    //console.log(req.body.username);
    //console.log(req.body.password);
    if(req.body.username === 'xx' && req.body.password === '1111') {
        //req.session.loginName = req.body.username;
        res.json({status:success});
    } else if(req.body.username !== 'xx') {
        res.json({status:user_no_exist});
    } else if(req.body.password !== '1111') {
        res.json({status:password_err});
    }
}


