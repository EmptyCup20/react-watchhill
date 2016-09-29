var db = require('../mongo');
var Schema = db.Schema;
var ObjectId = db.Schema.Types.ObjectId;
var articleSchema = new Schema({
    title: {
        type: String,
        index: 1,
        require: true,
        unique: true
    },
    tag: String,
    // articleId:{
    //    type:String,
    //    default:ObjectId
    // },
    author: String,
    createTime: { type: Date, default: new Date() },
    content: String,
    image: {
        type: String,
        default: '/images/default/article.jpg'
    },
    describe: String

}, {
    versionKey: false
});
var article = db.model('Article', articleSchema);
module.exports = article;
