import db_tools from '../../mongo/db_tools';
import statusMsg from '../../mongo/statusMsg';
import path from 'path';
import fs from 'fs';
var Article = function() {};

//获取文章列表
Article.getArticleList = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.query('article', obj, '-content').then(
            data => {
                resolve(data);
            },

            err => {
                reject(err);
            }
        );
    });
};

//获取文章内容及作者信息(byArticleId)
Article.getArticle = function(obj) {
    var queryObj = {
        _id: obj.articleId
    };
    return new Promise((resolve, reject) => {
        db_tools.queryByCondition('article', queryObj, 'content author').then(articleData => {
            articleData = articleData[0].toObject(); //转成对象字面量
            //根据author字段查询作者信息，过滤密码字段
            db_tools.queryByCondition('user', { author: articleData.author }, '-password').then(userData => {
                userData = !!userData.length ? userData[0].toObject() : [];
                articleData.userInfo = userData;
                resolve(articleData);
            })
        }, err => {
            reject(err);
        });
    });
};

//新增文章
Article.addArticle = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.add('article', obj).then(data => {
            statusMsg.successMsg.data = data.toObject()
            resolve(statusMsg.successMsg);
        }, err => {
            reject(err);
        });
    });
};

//修改文章
Article.modfiyArticle = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.edit('article', obj).then(data => {
            resolve(data);
        }, err => {
            reject(err);
        });
    });
};

//获取文章中上传图片的url
Article.getImgUrl = function(obj) {
    var user_dir;
    statusMsg.successMsg.data = [];
    return new Promise((resolve, reject) => {
        user_dir = path.resolve('public/images', req.session.loginUser.author, 'article', obj.articleId);
        fs.readdir(user_dir, (err, data) => {
            data.forEach(function(value, index) {
                statusMsg.successMsg.data.push(path.resolve(user_dir, value));
            });
            resolve(statusMsg.successMsg);
        });

    });
};
module.exports = Article;
