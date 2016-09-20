var article = require('../proxy/article')
var express = require('express');
//var co = require('co');
var router = express.Router();


export function getArticleList(req, res, next) {
    var query = req.query;
    article.getArticleList(query).then(function(data) {
        res.send(data)
    }, function(data) {
        console.log(data);
    });
}
