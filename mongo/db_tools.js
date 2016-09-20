/**
 * 增删改查操作
 * @Author zhangxin14
 * @Date   2016/7/19
 *
 */


var db = require('./mongo');
var user = require('./model/user');
var article = require('./model/article');
var comment = require('./model/comment');
var statusMsg = require('./statusMsg');

var Db_tools = function() {};

//初始化model
function init(model) {
    var modelList = {
        'user': user,
        'article': article,
        'comment': comment
    };
    for (let item in modelList) {
        if (item === model) {
            model = modelList[item];
            return model;
        }
    }
};

/**
 * [add description]
 * @author zhangxin14
 * @date   2016-07-19
 * @param  {string}   model [新增的类型]
 * @param  {object}   addObj     [新的数据
 *                                User的字段(author,tel,email,team,photo);
 *                                Article的字段(title,author,createTime,content,image,describe)]
 */

Db_tools.add = function(model, addObj) {
    model = init(model);
    return new Promise((resolve, reject) => {
        model.create(addObj, function(err, doc) {
            if (err) {
                reject(err);
            } else {
                resolve(statusMsg.successMsg);
            }
        });
    })
};

/**
 * [edit description]
 * @author zhangxin14
 * @date   2016-07-19
 * @param  {string}   model [新增的类型]
 * @param  {object}   editObj    [需要修改的数据]
 * @param  {Function} callback   回调函数
 */
Db_tools.edit = function(model, editObj) {
    var id = editObj.id;
    delete editObj.id;
    model = init(model);
    return new Promise((resolve, reject) => {
        model.findOneAndUpdate({ _id: id }, {
            $set: editObj
        }, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(statusMsg.successMsg);
            }
        })
    })
};
/**
 * [remove description]
 * @author zhangxin14
 * @date   2016-07-19
 * @param  {string}   model [新增的类型]
 * @param  {string}   removeId   [删除的项目的id]
 * @param  {Function} callback   回调函数
 * @return {[type]}              [description]
 */
Db_tools.remove = function(model, removeId) {
    model = init(model);
    return new Promise((resolve, reject) => {
        model.remove({ _id: removeId }, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(statusMsg.successMsg);
            }
        });
    })
};
/**
 * [query description]
 * @author zhangxin14
 * @date   2016-07-19
 * @param  {string}   model [新增的类型]
 * @param  {object}   queryObj   [查询的pageSize和pageNo]
 * @param  {Function} callback   回调函数
 * @return {[type]}              [description]
 */
Db_tools.query = function(model, queryObj, fields, options, callback) {
    var pageSize = Number(queryObj.pageSize);
    var pageNo = Number(queryObj.pageNo);
    model = init(model);
    var query = model.find({}, fields, options, callback);
    //开头跳过查询的调试
    query.skip((pageNo - 1) * pageSize);
    //最多显示条数
    query.limit(pageSize);
    //计算分页数据
    return new Promise((resole, reject) => {
        query.exec(function(err, doc) {
            if (err) {
                reject(err);
            } else {
                //计算数据总数
                model.find(function(err, result) {
                    var jsonArray = { code: 0, rows: doc, message: null, total: result.length, success: true };
                    resole(jsonArray);
                });
            }
        });
    })
};
/**
 * 根据单一条件查询
 * @author zhangxin14
 * @date   2016-07-25
 * @param  {string}   model 集合名称
 * @param  {查询主键}   queryObj   string
 * @return {[type]}              [description]
 */
Db_tools.queryByCondition = function(model, queryObj, fields, options, callback) {
    model = init(model);
    var query = model.find(queryObj, fields, options, callback);
    return new Promise((resolve, reject) => {
        query.exec(queryObj, (err, doc) => {
            if (err) {
                reject(err);
            } else {
                resolve(doc);
            }
        })
    })
};
module.exports = Db_tools;
