var article = require('../proxy/article')
var express = require('express');
//var co = require('co');
var router = express.Router();


export function getArticleList(req, res, next) {
    var query = req.query;
    //co(function*() {
        article.getArticleList(query).then(function(data){
            console.log(data);
        },function(data){
            console.log(data);
        });
    //})
}

