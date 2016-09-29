var article = require('../../../server/proxy/article');
var expect = require('chai').expect;
describe('(PROXY)文章接口测试', function() {
    it('获取文章列表（成功）', function(done) {
        expect(article.getArticleList({
            "pageNo": 1,
            "pageSize": 10
        }).then(function(data) {
            expect(data.code).to.be.equal(0);
            // console.log(data);
            done();
        }));
    });

    it('获取文章内容及作者信息（成功）', function(done) {
        expect(article.getArticle({
            "articleId": "57ac1dc6963da0301789865d"
        }).then(function(data) {
            expect(data.code).to.be.equal(0);
            // console.log(data);
            done();
        }));
    });

    it('获取文章内容（成功）', function(done) {
        expect(article.getArticle({
            "articleId": "57ac1dc6963da0301789865d",
            "isGetInfo": true
        }).then(function(data) {
            expect(data.code).to.be.equal(0);
            // console.log(data);
            done();
        }));
    });

    it('新增文章（成功）', function(done) {
        expect(article.addArticle({
            "title": "正则表达式(一)",
            "author": "xiangxiao3",
            "createTime": "2016-08-11 14:54:20",
            "content": " ",
            "describe": "正则表达式是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑。\n",
        }).then(function(data) {
            expect(data.code).to.be.equal(0);
            // console.log(data);
            done();
        }));
    });

    it('修改文章（成功）', function(done) {
        expect(article.modfiyArticle({
            "articleId":"57e4ab79b21e4f03fce864da",
            "content": "xxxxxxxxxxxxxx"
        }).then(function(data) {
            expect(data.code).to.be.equal(0);
            // console.log(data);
            done();
        }));
    });

     //it('获取文章中上传图片的url（成功）', function(done) {
     //    expect(article.getImgUrl({
     //        "articleId":"57e4ab79b21e4f03fce864da"
     //    }).then(function(data) {
     //        expect(data.code).to.be.equal(0);
            // console.log(data);
     //        done();
     //    }));
     //});
})
