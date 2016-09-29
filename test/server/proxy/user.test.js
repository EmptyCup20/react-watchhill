var user = require('../../../server/proxy/user');
var expect = require('chai').expect;

describe('(PROXY)用户接口测试', function() {
   var userId,
       author = "mocha_"+(new Date()).getTime();

   it('注册测试接口（成功）', function(done) {
     expect(user.addUser({
         "author": author,
         "password": "mocha",
         "email": "mocha@foxmail.com",
         "tel": "13095715221",
         "team": "Web前端组",
         "brief": " "
     }).then(function(data) {
         expect(data.code).to.be.equal(0);
         // console.log(data);
         done();
     }));
   });
   
   it('注册测试接口（用户名已存在）', function(done) {
     expect(user.addUser({
         "author": author,
         "password": "mocha",
         "email": "mocha@foxmail.com",
         "tel": "13095715221",
         "team": "Web前端组",
         "brief": " "
     }).then(function(data) {
         expect(data.code).to.be.equal(11);
         // console.log(data);
         done();
     }));
   });
   
   it('登录测试接口（成功）', function(done) {
      expect(user.login({
          "author": author,
          "password": "mocha"
      }).then(function(data) {
           userId = data.data._id.toHexString();
          expect(data.code).to.be.equal(0);
          // console.log(data);
          done();
      }));
   });
   
   it('登录测试接口（用户名不存存在）', function(done) {
     expect(user.login({
         "author": "mocha111",
         "password": "mocha"
     }).then(function(data) {
         expect(data.code).to.be.equal(21);
         // console.log(data);
         done();
     }));
   });
   
   it('登录测试接口（密码错误）', function(done) {
     expect(user.login({
         "author": author,
         "password": "mocha111",
     }).then(function(data) {
         expect(data.code).to.be.equal(22);
         // console.log(data);
         done();
     }));
   });
   
   it('修改用户密码测试接口（成功）', function(done) {
      expect(user.modifyPwd({
          "userId": userId,
          "oldPwd": "mocha",
          "password": "mocha1111"
      }).then(function(data) {
          expect(data.code).to.be.equal(0);
          // console.log(data);
          done();
      }));
   });

   it('修改用户密码测试接口（旧密码错误）', function(done) {
      expect(user.modifyPwd({
          "userId": userId,
          "oldPwd": "mocha",
          "password": "mocha111"
      }).then(function(data) {
          expect(data.code).to.be.equal(31);
          // console.log(data);
          done();
      }));
   });

   it('修改用户资料测试接口（成功）', function(done) {
      expect(user.modfiyUserData({
          "userId": userId,
          "email": "mocha@gmail.com"
      }).then(function(data) {
          expect(data.code).to.be.equal(0);
          // console.log(data);
          done();
      }));
   });

   it('获取该用户的所有文章列表及该用户的信息（成功）', function(done) {
       expect(user.getArticleList({
           "userId": "57e8c28e77d7a717a08eac5c"
       }).then(function(data) {
           expect(data.code).to.be.equal(0);
           // console.log(data);
           done();
       }));
   });
});
