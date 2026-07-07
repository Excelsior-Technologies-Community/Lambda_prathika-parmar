import express from 'express';
import UserController from '../controller/UserController.js';

const router = express.Router();

console.log("Login is function:", typeof UserController.login === 'function');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

export default router;