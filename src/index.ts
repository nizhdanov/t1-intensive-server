import cors from 'cors';
import express from 'express';

import { tasksRouter } from './tasks/tasks.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://t1-intensive.vercel.app']
  })
);

app.use(express.json());
app.use('/tasks', tasksRouter);

app.get('/', (_req, res) => {
  res.send('Express server T1-intensive');
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
