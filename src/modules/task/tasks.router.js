import express from 'express';
import tasksRepository from './tasks.repository.js';
import {
  createTaskRouterSchema,
  deleteTaskRouterSchema,
  UpdateTaskRouterSchema,
} from './tasks.routes.schema.js';
const tasksRouter = express.Router();

tasksRouter.get('/', async (req, res) => {
  const tasks = await tasksRepository.getAll();
  res.json(tasks);
});

tasksRouter.post('/', async (req, res) => {
  const body = createTaskRouterSchema.body.parse(req.body);
  const newTask = await tasksRepository.addOne(body);
  res.json(newTask);
});

tasksRouter.delete('/:id', async (req, res) => {
  const params = deleteTaskRouterSchema.params.parse(req.params);
  const taskDeleted = await tasksRepository.deleteOneById(params.id);
  res.json(taskDeleted);
});

tasksRouter.put('/:id', async (req, res) => {
  const body = UpdateTaskRouterSchema.body.parse(req.body);
  const params = UpdateTaskRouterSchema.params.parse(req.params);
  const taskUpdated = await tasksRepository.updateOneById(params.id, body);
  res.json(taskUpdated);
});

export default tasksRouter;
