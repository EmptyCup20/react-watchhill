import db_tools from '../../mongo/db_tools';
import statusMsg from '../../mongo/statusMsg';

var User = function() {};

//用户注册
User.addUser = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.queryByCondition('user', { author: obj.author }).then(data => {
            //用户存在
            if (data.length !== 0) {
                resolve(statusMsg.registerErr);
                return;
            }
            db_tools.add('user', obj).then(
                data => {
                    statusMsg.successMsg.data = data.toObject();
                    if (statusMsg.successMsg.data.password) {
                        // 不返回用户密码
                        delete statusMsg.successMsg.data.password;
                    }
                    resolve(statusMsg.successMsg);
                },
                err => {
                    reject(err);
                }
            );
        }, err => {
            reject(err);
        });

    });
};

//登录
User.login = function(obj) {
    return new Promise((resolve, reject) => {
        //查询用户是否存在
        db_tools.queryByCondition('user', { author: obj.author }).then(data => {
            if (data.length === 0) {
                //返回用户不存在信息
                resolve(statusMsg.loginNoExistErr);
                return;
            }
            //查询用户的密码是否错误
            db_tools.queryByCondition('user', { author: obj.author, password: obj.password }, '-password').then(data => {
                if (data.length === 0) {
                    //返回密码错误信息
                    resolve(statusMsg.loginPwdErr);
                    return;
                }
                //返回登录成功
                statusMsg.successMsg.data = data[0].toObject();
                resolve(statusMsg.successMsg);
            }, err => {
                reject(err);
            })
        }, err => {
            reject(err);
        });
    });
};

//修改用户密码
User.modifyPwd = function(obj) {
    return new Promise((resolve, reject) => {
        //判断旧密码是否正确
        db_tools.queryByCondition('user', { _id: obj.userId }, 'password').then(data => {
            data = data[0].toObject();
            if (data.password !== obj.oldPwd) {
                resolve(statusMsg.modfiyPwdErr);
                return;
            }

            delete obj.oldPwd;

            //修改密码
            db_tools.edit('user', obj).then(data => {
                //返回成功信息
                resolve(data);
            }, err => {
                reject(err);
            })
        }, data => {
            reject(data);
        });
    });
};

//修改用户资料
User.modfiyUserData = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.edit('user',obj).then(data=>{
            resolve(data);
        },err=>{    
            reject(err);
        });
    });
}

module.exports = User;
