import db_tools from '../../mongo/db_tools';
import statusMsg from '../../mongo/statusMsg';
var Article = function() {};

//获取文章列表
Article.getArticleList = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.query('article',obj,'-content -_id -__v').then(
            data => {
                resolve(data);
            },

            err => {
                reject(err);
            }
        );
    });
};

//获取文章内容
Article.getArticle = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.queryByCondition('article',obj,'content').then(
            data => {
                resolve(data);
            },

            err =>{
                reject(err);
            }
        );
    });
};

//新增文章
Article.addArticle = function(obj){
    return new Promise((resolve,reject)=>{
        db_tools.add('article',obj).then(data=>{
            statusMsg.successMsg.data = data.toObject()
            resolve(statusMsg.successMsg);
        },err=>{
            reject(err);
        });
    });
};

//修改文章
Article.modfiyArticle = function(obj){
    return new Promise((resolve,reject)=>{
        db_tools.edit('article',obj).then(data=>{
            resolve(data);
        },err=>{
            reject(err);
        });
    });
};

module.exports = Article;
