var db = require('../mongo');
var Schema = db.Schema;
var ObjectId = db.Schema.Types.ObjectId;
var userSchema = new Schema({
    authorId:ObjectId,
    //用户名
    author: {
        type:String,
        index: 1,
        require: true,
        unique: true
    },
    //密码
    password: String,
    //邮箱
    email: String,
    //电话
    tel: String,
    //头像
    avatarUrl: {
        type: String,
        default: '/images/default/avatar.jpg'
    },
    //二维码
    codeUrl:{
        type: String,
        default: '/images/default/code.jpg'
    },
    //简介
    brief: {
        type: String,
        default: ' '
    },
    //部门
    team: String,
},{
    versionKey:false
});

var user = db.model('User',userSchema);
module.exports = user;