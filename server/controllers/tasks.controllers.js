// llamar la conexion de la base de datos
import { connection } from "../db.js";

const convertDate = (date) => {
  //Convierte una fecha en el timezone actual y la formatea en TimeStamp para la base de datos
  return (new Date ((new Date((new Date(date)).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
}
// hace un get a todas las tareas en la ruta (localhost:4000/tasks)
const getTasks = async (req, res) => {
  try {
    const [result] = await connection.query(
      `SELECT * FROM tasks ORDER BY createdAt ASC`
    );
    //Transformar sentencia for en un map. (si es posible)
    for(let i = 0; i < result.length; i++){  
      result[i].createdAt = convertDate(result[i].createdAt);
    }
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
    result[0].createdAt = convertDate(result[0].createdAt);
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

// crea una nueva tarea en la ruta (localhost:4000/tasks)
const createTask = async (req, res) => {
  try {
    const { title, description, done = 0 } = req.body;
    const createdAt = convertDate(new Date());
    const [result] = await connection.query(
      `INSERT INTO tasks(title, description, done, createdAt) VALUES ("${title}","${description}", ${done}, "${createdAt}")`
    );
    res.json({
      taskid: result.insertId,
      title,
      description,
      done,
      createdAt
    });  
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

// actualiza una tarea en la ruta (localhost:4000/tasks/{id})
const updateTask = async (req, res) => {
  try {
    const { title, description, done = 0 } = req.body;
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
