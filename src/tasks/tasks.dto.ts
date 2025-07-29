import type { TaskCategory, TaskPriority, TaskStatus } from './tasks.model.js';

export interface CreateTaskDto {
  category: TaskCategory;
  createdAt: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
  title: string;
}

export interface UpdateTaskDto extends Partial<CreateTaskDto> {}
