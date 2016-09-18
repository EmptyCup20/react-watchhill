
import { loginAuthen,logout } from '../controllers/user.controller';

import express from 'express';
const router = express.Router();

//登录认证
router.post('/login', loginAuthen);

//注销
router.get('/logout', logout);


module.exports = router;