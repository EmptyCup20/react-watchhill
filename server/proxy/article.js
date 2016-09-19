import db_tools from '../../mongo/db_tools';
var Article = function() {};

Article.getArticleList = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.query('article',obj).then(
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
