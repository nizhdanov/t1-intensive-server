import type { Request, Response } from 'express';

import { nanoid } from 'nanoid';

import type { CreateTaskDto } from './tasks.dto.js';
import type { Task } from './tasks.model.js';

import { tasks } from './tasks.model.js';

export const getAllTasks = (_req: Request, res: Response) => {
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === req.params.id);
  task ? res.json(task) : res.status(404).json({ message: 'Task not found' });
};

export const createTask = (req: Request, res: Response) => {
  const dto: CreateTaskDto = req.body;

  const newTask: Task = {
    id: nanoid(8),
    ...dto
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  const dto: Partial<Task> = req.body;
  Object.assign(task, dto);

  res.json(task);
};

export const deleteTask = (req: Request, res: Response) => {
  const index = tasks.findIndex((t) => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  tasks.splice(index, 1);
  res.status(204).send();
};
