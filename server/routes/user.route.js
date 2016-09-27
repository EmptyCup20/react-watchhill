
import { loginAuthen,logout,register,profile } from '../controllers/user.controller';

import express from 'express';
const router = express.Router();

//登录认证
router.post('/login', loginAuthen);

//注册
router.post('/register',register);

//注销
router.get('/logout', logout);

//个人信息修改
router.post('/profile/:type',profile);






module.exports = router;