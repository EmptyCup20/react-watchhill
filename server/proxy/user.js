import db_tools from '../../mongo/db_tools';
import statusMsg from '../../mongo/statusMsg';

var User = function() {};

//用户注册
User.addUser = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.queryByCondition('user', { author: obj.author }).then(function(data) {
            //用户存在
            if (data.length !== 0) {
                resolve(statusMsg.registerErr);
                return;
            }
            db_tools.add('user', obj).then(
                function(data) {
                    resolve(data);
                },
                function(err) {
                    reject(err);
                }
            );
        }, function(data) {
            reject(err);
        });

    });
};

//登录
User.login = function(obj) {
    return new Promise((resolve, reject) => {
        //查询用户是否存在
        db_tools.queryByCondition('user', { author: obj.author }).then(function(data) {
            if (data.length === 0) {
                //返回用户不存在信息
                resolve(statusMsg.loginNoExistErr);
                return;
            }
            //查询用户的密码是否错误
            db_tools.queryByCondition('user', { author: obj.author, password: obj.password }, '-password').then(function(data) {
                if (data.length === 0) {
                    //返回密码错误信息
                    resolve(statusMsg.loginPwdErr);
                    return;
                }
                //返回登录成功
                statusMsg.successMsg.data = data;
                resolve(statusMsg.successMsg);
            }, function(data) {
                reject(err);
            })
        }, function(data) {
            reject(err);
        })
    })
}
module.exports = User;
