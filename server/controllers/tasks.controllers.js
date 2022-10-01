// llamar la conexion de la base de datos
import { connection } from "../db.js";


// hace un get a todas las tareas en la ruta (localhost:4000/tasks)
const getTasks = async (req, res) => {
  try {
    const [result] = await connection.query(
      `SELECT * FROM tasks ORDER BY createdAt ASC`
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({error: error});
  }
};


// hace un get a una tarea en la ruta (localhost:4000/tasks/{id})
const getTask = async (req, res) => {
  try {
    const [result] = await connection.query(`SELECT * FROM tasks WHERE taskid = ${req.params.id}`);
    if (result.length === 0){
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

// crea una nueva tarea en la ruta (localhost:4000/tasks)
const createTask = async (req, res) => {
  try {
    const { title, description, done = 0 } = req.body;
    const [result] = await connection.query(
      `INSERT INTO tasks(title, description, done) VALUES ("${title}","${description}", ${done})`
    );
    res.json({
      insertedId: result.insertId,
      title,
      description,
      done,
    });  
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

// actualiza una tarea en la ruta (localhost:4000/tasks/{id})
const updateTask = async (req, res) => {
  try {
    const { title, description, done } = req.body;
    const [result] = await connection.query(`UPDATE tasks SET title = "${title}", description = "${description}", done = ${done} WHERE taskid = ${req.params.id}`)
    if(result.affectedRows === 0){
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(result);  
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

// Elimina una tarea en la ruta (localhost:4000/tasks/{id})
const deleteTask = async (req, res) => {
  try {
    const [result] = await connection.query(`DELETE FROM tasks WHERE taskid = ${req.params.id}`);
    
    if(result.affectedRows === 0){
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(result);  
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

export { getTask, getTasks, createTask, updateTask, deleteTask };
