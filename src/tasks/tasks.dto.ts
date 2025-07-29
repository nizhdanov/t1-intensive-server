import type { Task } from './tasks.model.js';

export interface CreateTaskDto extends Omit<Task, 'id'> {}

export interface UpdateTaskDto extends Partial<CreateTaskDto> {}
