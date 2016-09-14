
import { loginAuthen } from '../controllers/user.controller';

import express from 'express';
const router = express.Router();

//登录认证
router.post('/login', loginAuthen);




module.exports = router;