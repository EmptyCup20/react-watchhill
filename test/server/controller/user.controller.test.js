require("babel-register");
var expect = require('chai').expect;
var request = require('supertest');
var express = require('express');
var app = require('../../../server.js');
var agent = request.agent(app);

describe('(CONTROLLER)用户接口测试', function () {
    var userId, lastingSession,
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


    it('登录接口(POST)：/user/login', function (done) {
        agent
            .post('/user/login')
            .send({
                "author": "z",
                "password": "z"
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                console.log((JSON.parse(res.text)));
                userId = (JSON.parse(res.text)).data._id;
                done();
            });
    });




    it('获取个人文章列表(GET)：/user/getList', function (done) {
        agent
            .get('/user/getList')
            .query({
                "userId": "57e8c28e77d7a717a08eac5c"
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                console.log(JSON.parse(res.text));
                done();
            });
    });

    it('用户密码修改(POST)：/user/profile/pass', function (done) {
        agent
            .post('/user/profile/pass')
            .send({
                "userId": userId,
                "oldPwd": "mocha",
                "password": "mocha111"
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                console.log(JSON.parse(res.text));
                done();
            });
    });

    it('用户信息修改(POST)：/user/profile/info', function (done) {
        agent
            .post('/user/profile/info')
            .send({
                "userId": userId,
                "email": "mocha@gmail.com"
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                console.log(JSON.parse(res.text));
                done();
            });
    });



    it('注销接口(GET)：/user/logout', function (done) {
        agent
            .get('/user/logout')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                console.log((JSON.parse(res.text)));
                done();
            });
    });
});
