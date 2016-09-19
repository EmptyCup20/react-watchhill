import {getArticleList} from '../controllers/article.controller';

import express from 'express';
const router = express.Router();

router.get('/getArticleList', getArticleList);

module.exports = router;
