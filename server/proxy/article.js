import db_tools from '../../mongo/db_tools';
var Article = function() {};

//获取文章列表
Article.getArticleList = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.query('article',obj,'-content -_id -__v').then(
            function(data) {
                resolve(data);
            },

            function(err) {
                reject(err);
            }
        );
    });
};

//获取文章内容
Article.getArticle = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.queryByCondition('article',obj,'content').then(
            function(data) {
                resolve(data);
            },

            function(err) {
                reject(err);
            }
        );
    });
};
module.exports = Article;
