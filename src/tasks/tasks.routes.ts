import express from 'express';

import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask
} from './tasks.controller.js';

export const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);
tasksRouter.get('/:id', getTaskById);
tasksRouter.post('/', createTask);
tasksRouter.patch('/:id', updateTask);
tasksRouter.delete('/:id', deleteTask);
