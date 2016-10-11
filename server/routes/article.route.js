var controller = require('../controllers/article.controller')
var uploader = require('../controllers/uploader.controller')
var express = require('express')

const router = express.Router();

//获取文章列表
router.get('/getArticleList', controller.getArticleList);

//获取文章内容
router.post('/getArticle', controller.getArticle);

//获取主页文章列表
router.post('/homeArticle', controller.homeArticle);

//新增文章
router.post('/addArticle', controller.addArticle);

//修改文章
router.post('/modfiyArticle', controller.modfiyArticle);

//上传文章封面和图片
router.post('/uploadimg',uploader.uploaderImg);

//获取文章中上传图片的url
router.get('/getImgUrl', controller.getImgUrl);

module.exports = router;
