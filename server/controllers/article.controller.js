import express from 'express';
import fs from 'fs';
import path from 'path';
import article from '../proxy/article';

import showdown from 'showdown';
const converter = new showdown.Converter();



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
    var query = req.body;
    article.getArticle(query).then(function(data) {
        let articleContent = {
            ...data.userInfo,
            content:converter.makeHtml(data.content)
        };
        res.send(articleContent);

    }, function(data) {
        console.log(data);
    });
};

//新增文章
export function addArticle(req, res, next) {
    var query = req.body,
        article_dir;
    article.addArticle(query).then(function(data) {
        //创建以文章标题为名称的文件夹
        article_dir = path.resolve('public/images', req.session.loginUser.author, 'article',data.data._id.toHexString());
        if (data.code == 0) {
            fs.mkdir(article_dir, err => {
                res.send(data);
            });
        } else {
            res.send(data);
        }
    }, err => {
        console.log(err);
    });
};

//修改文章
export function modfiyArticle(req, res, next) {
    var query = req.body;
    article.modfiyArticle(query).then(function(data) {
        res.send(data);
    }, function(data) {
        console.log(data);
    });
};

//获取文章中上传图片的url
export function getImgUrl(req, res, next) {
    var query = req.query;
    query.author = req.session.loginUser.author;
    article.getImgUrl(query).then(function(data) {
        res.send(data);
    }, function(data) {
        console.log(data);
    });
};
