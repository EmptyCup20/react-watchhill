import db_tools from '../../mongo/db_tools';
import statusMsg from '../../mongo/statusMsg';
var Article = function() {};

//��ȡ�����б�
Article.getArticleList = function(obj) {
    return new Promise((resolve, reject) => {
        db_tools.query('article',obj,'-content -__v').then(
            data => {
                resolve(data);
            },

            err => {
                reject(err);
            }
        );
    });
};

//��ȡ��������
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

//��������
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

//�޸�����
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
