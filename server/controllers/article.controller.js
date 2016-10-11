var express = require('express');
var fs = require('fs');
var path = require('path');
var article = require('../proxy/article');
var showdown = require('showdown');

const converter = new showdown.Converter();

var controller = {};

//获取文章列表
controller.getArticleList = function(req, res, next) {
    var query = req.query;
    article.getArticleList(query).then(function(data) {
        res.send(data);
    }, function(data) {
        console.log(data);
    });
};

//获取文章内容
controller.getArticle = function(req, res, next) {
    var query = req.body;
    article.getArticle(query).then(function(data) {
        //let articleContent = {
        //    ...data.userInfo,
        //    content:converter.makeHtml(data.content)
        //};

        let articleContent = {};

        Object.assign(articleContent,data.data.userInfo,{
            content:converter.makeHtml(data.data.content)
        });

        res.send(articleContent);

    }, function(data) {
        console.log(data);
    });
};


//获取主页文章列表
controller.homeArticle = function(req, res, next) {

    article.getArticleList({
        pageSize:9,                     //每次只需要获取9篇文章
        pageNo:req.body.pageNo
    }).then(
        function(data) {
            if(data.rows) {
                res.send({data:data.rows});
            } else {
                res.send({data:{}})
            }
        },function(err) {
            console.log(err);
        }
    )
};




//新增文章
controller.addArticle = function(req, res, next) {
    var query = req.body,
        article_dir;
    query.author = req.session.loginUser.author;
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
controller.modfiyArticle = function(req, res, next) {
    var query = req.body;
    article.modfiyArticle(query).then(function(data) {
        res.send(data);
    }, function(data) {
        console.log(data);
    });
};

//获取文章中上传图片的url
controller.getImgUrl = function(req, res, next) {
    var query = req.query;
    query.author = req.session.loginUser.author;
    article.getImgUrl(query).then(function(data) {
        res.send(data);
    }, function(data) {
        console.log(data);
    });
};

module.exports = controller;
