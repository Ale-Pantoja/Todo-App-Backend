import { z } from 'zod/v4';

const TASK_REGEX = /^[a-zA-Z0-9].{0,79}$/;

export const taskSchema = z.object({
  id: z.uuid(),
  task: z.string().regex(TASK_REGEX, 'Tienes que enviar una tarea'),
  isChecked: z.boolean(),
});
