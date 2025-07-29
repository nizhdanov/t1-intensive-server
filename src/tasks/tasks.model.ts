import { nanoid } from 'nanoid';

export type TaskCategory = 'Bug' | 'Documentation' | 'Feature' | 'Refactor' | 'Test';

export type TaskStatus = 'Done' | 'In Progress' | 'To Do';

export type TaskPriority = 'High' | 'Low' | 'Medium';

export interface Task {
  category: TaskCategory;
  createdAt: string;
  description?: string;
  id: string;
  priority: TaskPriority;
  status: TaskStatus;
  title: string;
}

export const tasks: Task[] = [
  {
    id: nanoid(8),
    title: 'Исправить баг с авторизацией',
    description: 'Пользователи не могут войти на iOS устройствах',
    category: 'Bug',
    priority: 'High',
    status: 'In Progress',
    createdAt: new Date('2023-01-01').toISOString()
  },
  {
    id: nanoid(8),
    title: 'Добавить документацию API',
    description: 'Написать Swagger документацию для эндпоинтов',
    category: 'Documentation',
    priority: 'Medium',
    status: 'To Do',
    createdAt: new Date('2023-02-01').toISOString()
  },
  {
    id: nanoid(8),
    title: 'Реализовать темную тему',
    category: 'Feature',
    priority: 'Medium',
    status: 'To Do',
    createdAt: new Date('2023-03-01').toISOString()
  },
  {
    id: nanoid(8),
    title: 'Оптимизировать запросы к базе',
    description: 'Переписать сложные SQL запросы',
    category: 'Refactor',
    priority: 'High',
    status: 'Done',
    createdAt: new Date('2024-03-01').toISOString()
  },
  {
    id: nanoid(8),
    title: 'Написать тесты для модуля оплаты',
    category: 'Test',
    priority: 'Low',
    status: 'In Progress',
    createdAt: new Date('2024-04-01').toISOString()
  },
  {
    id: nanoid(8),
    title: 'Исправить орфографические ошибки',
    description: 'Проверить весь текст в интерфейсе',
    category: 'Bug',
    priority: 'Low',
    status: 'To Do',
    createdAt: new Date('2024-05-01').toISOString()
  },
  {
    id: nanoid(8),
    title: 'Добавить FAQ раздел',
    category: 'Documentation',
    priority: 'Medium',
    status: 'Done',
    createdAt: new Date('2024-06-01').toISOString()
  },
  {
    id: nanoid(8),
    title: 'Рефакторинг компонента таблицы',
    description: 'Разбить на меньшие компоненты',
    category: 'Refactor',
    priority: 'High',
    status: 'In Progress',
    createdAt: new Date('2024-07-01').toISOString()
  },
  {
    id: nanoid(8),
    title: 'Интеграционные тесты с API',
    category: 'Test',
    priority: 'Medium',
    status: 'To Do',
    createdAt: new Date('2024-08-01').toISOString()
  },
  {
    id: nanoid(8),
    title: 'Новый дизайн dashboard',
    category: 'Feature',
    priority: 'High',
    status: 'In Progress',
    createdAt: new Date('2024-09-01').toISOString()
  }
];
