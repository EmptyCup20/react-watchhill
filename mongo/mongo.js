/**
 * 数据库连接
 * @Author zhangxin14
 * @Date   2016/7/19
 *
 */
var mongoose = require('mongoose')
//连接数据库
//var db = mongoose.connect('mongodb://10.33.31.234/watchhill',function(err){
var db = mongoose.connect('mongodb://10.20.135.23/watchhill',function(err){
    if(err){
        console.log(err);
    }

    console.log("Connect to mongoDB success!");
});

module.exports = db;
