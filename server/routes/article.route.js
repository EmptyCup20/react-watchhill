import {getArticleList,getArticle,addArticle,modfiyArticle} from '../controllers/article.controller';
import {uploaderImg} from '../controllers/uploader.controller'

import express from 'express';
const router = express.Router();

//获取文章列表
router.get('/getArticleList', getArticleList);

//获取文章内容
router.post('/getArticle', getArticle);

//新增文章
router.post('/addArticle', addArticle);

//修改文章
router.post('/modfiyArticle', modfiyArticle);

//上传文章封面和图片
router.post('/uploadimg',uploaderImg);

module.exports = router;
