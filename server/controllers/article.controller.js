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
        //临时文件夹
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
    /*
     * @date 2016-9-22
     * @param src [移动文件的源文件夹]
     * @param dst [移动文件的目标文件夹]
     * 遍历源文件夹,将其文件复制到目标文件夹下
     */
    var moveFile = (src,dst) => {
        fs.readdirSync(src).forEach(file=>{
            fs.writeFileSync(path.resolve(src,file),fs.readFileSync(dst));
        });
    };
    
    article.modfiyArticle(query).then(function(data) {
        //临时文件夹
        temp_dir = fs.statSync(path.resolve('/public/images/temp',data._id));
        //用户下问文章图片文件夹
        user_dir = fs.statSync(path.resolve('/public/images/',req.session.loginUser.username,'article',data._id))
        // 临时文件夹中的文件,转移到该用户的文件夹下
        if(data.code == 0 && temp_dir) {
            if(user_dir){
                moveFile(temp_dir,user_dir);
            }else{
                fs.mkdir(user_dir,(err,stats)=>{
                    moveFile(temp_dir,user_dir);
                });
            }
        }
        res.send(data);
    }, function(data) {
        console.log(data);
    });
};