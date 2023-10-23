import express from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { db } from '../db.js';

const router = express.Router();


router.post('/login', asyncHandler(async (req, res) => {
  const { username, password } = req.body || {};
  console.log(username);

  const existingUser = await db.users.findOne({ username });
  console.log(existingUser)
  if (!existingUser) {
    
    res.status(400);
    throw new Error('Username not valid!');
  }

  const isPasswordValid = existingUser.password === password;
  if (!isPasswordValid) {
    res.status(400);
    throw new Error('Password not valid!');
  }

  const payload = {
    id: existingUser._id,
    username: existingUser.username,
  };

  const SECRET_KEY = 'mindx';

  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: '100s',
  });

  res.json({
    message: 'Login successfully',
    accessToken: token,
  });
}));

export default router;