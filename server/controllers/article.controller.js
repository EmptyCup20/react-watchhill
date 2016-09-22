import express from 'express';
import fs from 'fs';
import path from 'path';
import article from '../proxy/article';
var router = express.Router();


//获取文章列表
export function getArticleList(req, res, next) {
    var query = req.query;
    article.getArticleList(query).then(function(data) {
        res.send(data);
    }, function(data) {
        console.log(data);
    });
};

//获取文章内容
export function getArticle(req, res, next) {
    var query = req.query;
    article.getArticle(query).then(function(data) {
        res.send(data);
    }, function(data) {
        console.log(data);
    });
};

//新增文章
export function addArticle(req, res, next) {
    var query = req.query,
        temp_dir;
    article.addArticle(query).then(function(data) {
        temp_dir = fs.statSync(path.resolve('/public/images/temp',data._id));
        //创建临时文件夹
        if(data.code == 0 && !temp_dir) {
            fs.mkdirSync(temp_dir);
        }
        res.send(data);
    }, function(data) {
        console.log(data);
    });
};

//修改文章
export function modfiyArticle(req, res, next) {
    var query = req.query,
        temp_dir,
        user_dir;
    var moveFile = (src,dst) => {
        fs.readdirSync(src).forEach(file=>{
            fs.createReadStream(path.resolve(src,file)).pipe(fs.WriteStream(dst));
        });
    };
    article.modfiyArticle(query).then(function(data) {
        temp_dir = fs.statSync(path.resolve('/public/images/temp',data._id));
        user_dir = fs.statSync(path.resolve('/public/images/',req.session.loginUser.username,'article',data._id))
        // 临时文件夹中的文件,转移到该用户的文件夹下
        if(data.code == 0 && temp_dir) {
            if(user_dir){
                moveFile(temp_dir,user_dir);
            }else{
                fs.mkdirSync(user_dir);
            }
        }
        res.send(data);
    }, function(data) {
        console.log(data);
    });
};