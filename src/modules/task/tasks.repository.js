import db from '../../db/index.js';
import { ErrorWithStatus } from '../../utils/errorTypes.js';

const getAll = async () => {
  const response = await db.query('SELECT * FROM tasks');
  return response.rows;
};

const addOne = async (payload) => {
  const response = await db.query(
    `
    INSERT INTO tasks (task, isChecked)
    VALUES ($1, $2) RETURNING *
  `,
    [payload.task, payload.isChecked],
  );
  return response.rows[0];
};

const deleteOneById = async (id) => {
  const response = await db.query(
    `
    DELETE FROM tasks
    WHERE id = $1 RETURNING *
  `,
    [id],
  );

  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'La tarea no fue encontrada');
  }
  return response.rows[0];
};

const updateOneById = async (id, payload) => {
  const response = await db.query(
    `
    UPDATE tasks
    SET task = $1, Ischecked = $2
    WHERE id = $3 RETURNING *
  `,
    [payload.task, payload.isChecked, id],
  );

  if (response.rowCount === 0) {
    throw new ErrorWithStatus(404, 'La tarea no fue encontrada');
  }

  return response.rows[0];
};

const tasksRepository = { getAll, addOne, deleteOneById, updateOneById };

export default tasksRepository;
