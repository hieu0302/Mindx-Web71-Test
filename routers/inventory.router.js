import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.get('/inventory', async (req, res) => {
  try {
    const posts = await db.inventories.find().toArray();
    res.json({
      data: posts,
    });
  } catch (error) {
    console.error('Error retrieving inventory:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/inventory/instockless100', async (req, res) => {
    try {
      const posts = await db.inventories.find({ instock: { $lt: 100 } }).toArray();
      res.json({
        data: posts,
      });
    } catch (error) {
      console.error('Error retrieving inventory:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

export default router;