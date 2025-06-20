import { z } from 'zod/v4';
import { taskSchema } from './tasks.schema.js';

const taskIdSchema = z
  .string()
  .transform((val) => Number(val))
  .refine((val) => !isNaN(val), 'El id tiene que ser numero');

export const createTaskRouterSchema = {
  params: z.object({}),
  body: taskSchema.omit({ id: true }),
  queries: z.object({}),
};

export const deleteTaskRouterSchema = {
  params: z.object({ id: taskIdSchema }),
  body: z.object({}),
  queries: z.object({}),
};

export const UpdateTaskRouterSchema = {
  params: z.object({ id: taskIdSchema }),
  body: taskSchema.omit({ id: true }),
  queries: z.object({}),
};
