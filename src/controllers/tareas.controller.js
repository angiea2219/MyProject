import { pool } from "../db.js";

/*
export const getAllTasks2 = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM tarea");
  console.log(result.rows)
  return res.json(result.rows);
};
*/
export const getAllTareas = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM tarea ");
  return res.json(result.rows);
};

export const getTarea = async (req, res) => {
  const result = await pool.query("SELECT * FROM tarea WHERE id_tarea = $1", [
    req.params.id_tarea ]);
  console.log(result.rows)

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese id",
    });
  }

  return res.json(result.rows[0]);
};


export const getTareasProyecto = async (req, res) => {
  const result = await pool.query("SELECT * FROM tarea WHERE id_proyecto = $1", [
    req.params.id_proyecto ]);
  console.log(result.rows)

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existen tareas para este proyecto",
    });
  }

  return res.json(result.rows[0]);
};






export const createTarea = async (req, res, next) => {
  const { id_proyecto, id_user, id_estado, descripcion, fecha_inicio, fecha_fin } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO tarea (id_proyecto, id_user, id_estado, descripcion, fecha_inicio, fecha_fin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_proyecto, id_user, id_estado, descripcion, fecha_inicio, fecha_fin]
    );

    res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "Ya existe una tarea con ese id",
      });
    }
    next(error);
  }
};

export const updateTarea = async (req, res) => {
  const id_tarea = req.params.id_tarea;
  const { id_proyecto, id_user, id_estado, descripcion, fecha_inicio, fecha_fin } = req.body;

  const result = await pool.query(
    "UPDATE tarea SET id_proyecto = $1, id_user =$2, id_estado = $3, descripcion = $4, fecha_inicio = $5, fecha_fin=$6 WHERE id_tarea = $7 RETURNING *",
    [id_proyecto, id_user, id_estado, descripcion, fecha_inicio, fecha_fin, id_tarea]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese id",
    });
  }

  return res.json(result.rows[0]);
};

export const deleteTarea = async (req, res) => {
  const result = await pool.query("DELETE FROM tarea WHERE id_tarea = $1", [
    req.params.id_tarea,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese id",
    });
  }

  return res.sendStatus(204);
};
