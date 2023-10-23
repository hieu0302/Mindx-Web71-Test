import express from 'express';
import { connectToDb } from './db.js';
import appRouter from './routers/index.js';


const app = express();

app.use('/api', appRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
  connectToDb();
});
