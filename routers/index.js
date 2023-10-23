import express from 'express';
import inventory from './inventory.router.js';
import login from './login.router.js';

const router = express.Router();

router.use('/getall', inventory);
router.use('/auth', login);


export default router;