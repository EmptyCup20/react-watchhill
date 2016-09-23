import db_tools from '../../mongo/db_tools';
import statusMsg from '../../mongo/statusMsg';
var Article = function() {};

//获取文章列表
Article.getArticleList = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.query('article', obj, '-content -_id -__v').then(
            data => {
                resolve(data);
            },

            err => {
                reject(err);
            }
        );
    });
};

//获取文章内容及作者信息
Article.getArticle = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.queryByCondition('article', obj, 'content author').then(articleData => {
            articleData = articleData.toObject(); //转成对象字面量
            //根据author字段查询作者信息，过滤密码字段
            db_tools.queryByCondition('user', { author: data.author }, '-password').then(userData => {
                userData = userData.toObject();
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

module.exports = Article;
