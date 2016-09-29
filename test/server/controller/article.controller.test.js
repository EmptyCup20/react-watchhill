require("babel-register");
var expect = require('chai').expect;
var request = require('supertest');
var express = require('express');
var app = require('../../../server.js');
var agent = request.agent(app);
var path = require('path');

describe('(CONTROLLER)文章接口测试', function () {
    // it('登录', function (done) {
    //     agent
    //         .post('/user/login')
    //         .send({
    //             "author": "z",
    //             "password": "z"
    //         })
    //         .set('Accept', 'application/json')
    //         .expect(200)
    //         .end(function (err, res) {
    //             if (err) return done(err);
    //             done();
    //         });
    // });


    // it('获取文章内容及作者信息（POST）/article/getArticle', function(done) {
    //     agent
    //         .post('/article/getArticle')
    //         .set('Accept', 'application/json')
    //         .send({
    //             "articleId": "57ac1dc6963da0301789865d"
    //         })
    //         .expect(200)
    //         .expect('Content-Type', 'application/json; charset=utf-8')
    //         .end(function(err, res) {
    //             if (err) return done(err);
    //             console.log(JSON.parse(res.text));
    //             done();
    //         });
    // });

    // it('获取文章内容（POST）/article/getArticle', function(done) {
    //     agent
    //         .post('/article/getArticle')
    //         .set('Accept', 'application/json')
    //         .send({
    //             "articleId": "57ac1dc6963da0301789865d",
    //             "isGetInfo": true
    //         })
    //         .expect(200)
    //         .expect('Content-Type', 'application/json; charset=utf-8')
    //         .end(function(err, res) {
    //             if (err) return done(err);
    //             console.log(JSON.parse(res.text));
    //             done();
    //         });
    // });

    // it('获取文章中上传图片的url（GET）/article/getImgUrl', function (done) {
    //     agent
    //         .get("/article/getImgUrl")
    //         .query({
    //             "articleId": "57e9df68d74c881950772d84"
    //         })
    //         .set('Accept', 'application/json')
    //         .expect(200)
    //         .end(function (err, res) {
    //             if (err) return done(err);
    //             console.log(JSON.parse(res.text));
    //             done();
    //         });
    // });

    // it('上传文章封面和图片（POST）/article/uploadimg', function (done) {
    //     agent
    //         .post('/article/uploadimg')
    //         .set('Content-Type', 'image/png')
    //         .field('articleId', '57e9df68d74c88195072d84')
    //         .attach('imgUrl', path.resolve(__dirname, '../images', 'Hydrangeas.jpg'))
    //         .expect(200)
    //         .expect('Content-Type', 'application/json; charset=utf-8')
    //         .end(function (err, res) {
    //             if (err) return done(err);
    //             console.log(JSON.parse(res.text));
    //             done();
    //         });
    // });
    // it('修改文章（POST）/article/modfiyArticle', function(done) {
    //     agent
    //         .post('/article/modfiyArticle')
    //         .set('Accept', 'application/json')
    //         .send({
    //             "articleId": "57e4ab79b21e4f03fce864da",
    //             "content": "xxxxxxxxxxxxxx"
    //         })
    //         .expect(200)
    //         .expect('Content-Type', 'application/json; charset=utf-8')
    //         .end(function(err, res) {
    //             if (err) return done(err);
    //             console.log(JSON.parse(res.text));
    //             done();
    //         });
    // });

    // it('新增文章（POST）/article/addArticle', function (done) {
    //     agent
    //         .post('/article/addArticle')
    //         .set('Accept', 'application/json')
    //         .send({
    //             "title": "正则表达式(一)",
    //             "author": "xiangxiao3",
    //             "createTime": "2016-08-11 14:54:20",
    //             "content": " ",
    //             "describe": "正则表达式是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑。"
    //         })
    //         .expect(200)
    //         .expect('Content-Type', 'application/json; charset=utf-8')
    //         .end(function (err, res) {
    //             if (err) return done(err);
    //             console.log(JSON.parse(res.text));
    //             done();
    //         });
    // });

    it('获取文章列表（GET）/article/getArticleList', function(done) {
        agent
            .get('/article/getArticleList')
            .set('Accept', 'application/json')
            .query({
                "pageNo": 1,
                "pageSize": 10
            })
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function(err, res) {
                if (err) return done(err);
               // console.log(JSON.parse(res.text));
                done();
            });
    });


});
