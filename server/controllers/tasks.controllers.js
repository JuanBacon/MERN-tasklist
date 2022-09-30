//Llamar la conexion de la base de datos
import { connection } from "../db.js";


//Hace un get a todas las tareas en la ruta (localhost:4000/tasks)
const getTasks = async (req, res) => {
  const [result] = await connection.query(
    `SELECT * FROM tasks ORDER BY createdAt ASC`
  );
  res.json(result);
};


//Hace un get a una tarea en la ruta (localhost:4000/tasks/{id})
const getTask = async (req, res) => {
  const [result] = await connection.query(`SELECT * FROM tasks WHERE taskid = ${req.params.id}`);
  if (result.length === 0){
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(result[0]);
};

//Crea una nueva tarea en la ruta (localhost:4000/tasks)
const createTask = async (req, res) => {
  const { tittle, description, done = 0 } = req.body;
  const [result] = await connection.query(
    `INSERT INTO tasks(tittle, description, done) VALUES ("${tittle}","${description}", ${done})`
  );
  res.json({
    insertedId: result.insertId,
    tittle,
    description,
    done,
  });
};

//Actualiza una tarea en la ruta (localhost:4000/tasks/{id})
const updateTask = async (req, res) => {
  const { tittle, description, done } = req.body;
  const [result] = await connection.query(`UPDATE tasks SET tittle = "${tittle}", description = "${description}", done = ${done} WHERE taskid = ${req.params.id}`)
  if(result.affectedRows === 0){
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(result);
};

//Elimina una tarea en la ruta (localhost:4000/tasks/{id})
const deleteTask = async (req, res) => {
  const [result] = await connection.query(`DELETE FROM tasks WHERE taskid = ${req.params.id}`);
  
  if(result.affectedRows === 0){
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(result);
};

export { getTask, getTasks, createTask, updateTask, deleteTask };
