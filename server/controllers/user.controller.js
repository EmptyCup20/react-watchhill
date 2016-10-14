var User = require('../proxy/user');
var path = require('path');
var fs = require('fs');
var EventProxy = require('eventproxy');
var user = require('../../mongo/model/user');

var controller = {};
/**
 * 登录验证
 * @param req
 * @param res
 * @param next
 */
controller.loginAuthen = function(req, res, next) {

    var query = req.body;
    User.login(query).then(function(data) {
        if (data.code === 0) {
            req.session.loginUser = data.data;
        }

        res.send(data);

    }, function(data) {
        console.log(data);
    });
}




/**
 * 账号注册
 * @param req
 * @param res
 * @param next
 */
controller.register = function(req, res, next) {
    var query = req.body,
        ep = new EventProxy(),
        user_dir;
    User.addUser(query).then(function(data) {
        console.log(data)
        if (data.code === 0) {
            user_dir = path.resolve('public/images', data.data.author);
            req.session.loginUser = data.data;
            //创建用户文件夹
            fs.mkdir(user_dir, err => {
                ep.all('article', 'userInfo', () => {
                    res.send(data);
                });

                // 侦听error事件
                ep.bind('error', function(err) {
                    // 卸载掉所有handler
                    ep.unbind();
                    // 异常回调
                    callback(err);
                });

                // 创建用户文章文件夹
                fs.mkdir(path.resolve(user_dir, 'article'), err => {
                    if (err) {
                        console.log(err);
                        return ep.emit('error', err);
                    };
                    ep.emit('article');
                });
                // 创建用户个人信息文件夹
                fs.mkdir(path.resolve(user_dir, 'userInfo'), err => {
                    if (err) {
                        console.log(err);
                        return ep.emit('error', err);
                    };
                    ep.emit('userInfo');
                });
            });
        } else {
            res.send(data);
        }
    }, err => {
        console.log(err);
    });
}


/**
 * 注销
 * @param req
 * @param res
 * @param next
 */
controller.logout = function(req, res, next) {
    req.session.destroy(function() { //移除会话
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
controller.profile = function(req, res, next) {

    let user = {};
    let query = req.body;
    query.userId = req.session.loginUser._id;


    //修改密码
    if (req.params.type === 'pass') {
        User.modifyPwd(query).then(function(data) {
            res.send({ status: data.status });
        }, function(data) {
            console.log(data);
        });

        //修改邮箱,简介,电话
    } else {
        User.modfiyUserData(query).then(data => {
            if (data.status === 'success') { //同步服务端登录数据
                req.session.loginUser = {
                    ...req.session.loginUser,
                    ...query
                }
            }
            res.send({ status: data.status });
        })
    }
}



/**
 * 获取用户信息及相应的文章列表
 * @param req
 * @param res
 * @param next
 */
controller.getArticleList = function(req, res, next) {
    User.getArticleList(req.query).then(
        function(data) {
            res.send(data);
        }, function(err) {
            console.log(err);
        }
    )
}


/**
 * 获取About页的成员列表
 * @param req
 * @param res
 * @param next
 */
controller.getMemberList = function(req, res, next) {
    let query = user.find();
    query.limit(6);   //目前只获取六个成员信息
    query.exec((err,docs) => {
        if(docs) {
            let newDocs = [];
            for (let doc of docs) {
                let newDoc = {
                    author:doc.author,
                    avatarUrl:doc.avatarUrl //只获取用户名和头像
                };
                newDocs.push(newDoc);
            }
            res.send({data:newDocs});
        } else {
            res.send({data:[]});    //否则返回空
        }
    })
};






module.exports = controller;