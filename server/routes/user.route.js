var controller = require('../controllers/user.controller')
var uploaderController = require('../controllers/uploader.controller')
var express = require('express')

const router = express.Router();

//登录认证
router.post('/login', controller.loginAuthen);

//注册
router.post('/register',controller.register);

//注销
router.get('/logout', controller.logout);

//个人信息修改
router.post('/profile/:type', controller.profile);

//上传头像和二维码
router.post('/userImg',uploaderController.userImg);

//获取个人文章列表
router.get('/getList', controller.getArticleList);

//获取关于页我们的成员列表
router.get('/getMemberList', controller.getMemberList);


module.exports = router;
