require("babel-register");
var expect = require('chai').expect;
var request = require('supertest');
var express = require('express');
var app = require('../../../server.js');
var agent = request.agent(app);
var path = require('path');


describe('(CONTROLLER)用户接口测试', function() {
    var userId, articleId,
        author = "mocha_" + (new Date()).getTime();

    it('注册接口(POST)：/user/register', function(done) {
        agent
            .post('/user/register')
            .send({
                "author": author,
                "password": "mocha",
                "email": "mocha@foxmail.com",
                "tel": "13095715221",
                "team": "Web前端组",
                "brief": " "
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                console.log(JSON.parse(res.text));
                done();
            });
    });


    it('登录接口(POST)：/user/login', function(done) {
        agent
            .post('/user/login')
            .send({
                "author": "z",
                "password": "z"
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                // console.log((JSON.parse(res.text)));
                userId = (JSON.parse(res.text)).data._id;
                done();
            });
    });



    it('新增文章（POST）/article/addArticle', function(done) {
        agent
            .post('/article/addArticle')
            .set('Accept', 'application/json')
            .send({
                "title": "正则表达式(一)",
                "author": "xiangxiao3",
                "createTime": "2016-08-11 14:54:20",
                "content": " ",
                "describe": "正则表达式是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑。"
            })
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(JSON.parse(res.text));
                articleId = (JSON.parse(res.text)).data._id;
                done();
            });
    });

    it('上传文章封面和图片（POST）/article/uploadimg', function(done) {
        agent
            .post('/article/uploadimg')
            .set('Content-Type', 'image/png')
            .field('articleId', articleId)
            //文章封面
            .attach('imgUrl', path.resolve(__dirname, '../images', 'Hydrangeas.jpg'))
            //文章内容图片
            .attach('articleFile', path.resolve(__dirname, '../images', 'Hydrangeas.jpg'))
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(JSON.parse(res.text));
                done();
            });
    });
    it('获取文章中上传图片的url（GET）/article/getImgUrl', function(done) {
        agent
            .get("/article/getImgUrl")
            .query({
                "articleId": articleId
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(JSON.parse(res.text));
                done();
            });
    });

    it('获取文章内容及作者信息（POST）/article/getArticle', function(done) {
        agent
            .post('/article/getArticle')
            .set('Accept', 'application/json')
            .send({
                "articleId": articleId
            })
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(JSON.parse(res.text));
                done();
            });
    });

    it('修改文章（POST）/article/modfiyArticle', function(done) {
        agent
            .post('/article/modfiyArticle')
            .set('Accept', 'application/json')
            .send({
                "articleId": articleId,
                "content": "xxxxxxxxxxxxxx"
            })
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(JSON.parse(res.text));
                done();
            });
    });
    it('获取个人文章列表(GET)：/user/getList', function(done) {
        agent
            .get('/user/getList')
            .query({
                "userId": userId
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(JSON.parse(res.text));
                done();
            });
    });
    it('用户信息修改(POST)：/user/profile/info', function(done) {
        agent
            .post('/user/profile/info')
            .send({
                "userId": userId,
                "email": "mocha@gmail.com"
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(JSON.parse(res.text));
                done();
            });
    });
    it('用户密码修改(POST)：/user/profile/pass', function(done) {
        agent
            .post('/user/profile/pass')
            .send({
                "userId": userId,
                "oldPwd": "mocha",
                "password": "mocha111"
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                // console.log(JSON.parse(res.text));
                done();
            });
    });

    it('注销接口(GET)：/user/logout', function(done) {
        agent
            .get('/user/logout')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                console.log((JSON.parse(res.text)));
                done();
            });
    });
});
