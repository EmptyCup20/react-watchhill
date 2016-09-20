var db = require('../mongo');
var Schema = db.Schema;
var articleSchema = new Schema({
    title: {
        type:String,
        index: 1,
        require: true,
        unique: true
    },
    author: String,
    createTime: String,
    content: String,
    image: {
        type: String,
        default: '/images/default/article.jpg'
    },
    describe: String
});
var article = db.model('Article',articleSchema);
module.exports = article;