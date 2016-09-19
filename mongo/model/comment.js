var db = require('../mongo');
var Schema = db.Schema;

var commentSchema = new Schema({
    author : String,   //评论人
    createTime : Date,   //评论时间
    text : String,   //评论内容
    index : Number,   //评分
    //头像路径
    avatarUrl: {
        type: String,
        default: '/'
    }
});
var comment = db.model('Comment',commentSchema);
module.exports = comment;