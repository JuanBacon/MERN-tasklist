import { connection } from "../db.js";

const getTasks = (req, res) => {
    res.send('obteniendo tareas')
}
const getTask = (req, res) => {
    res.send('obteniendo tarea')
}
const createTask = async (req, res) => {
    const {tittle, description} = req.body;
    const [result] = await connection.query(`INSERT INTO tasks(tittle, description) VALUES ("${tittle}","${description}")`);
    res.json({
        insertedId: result.insertId,
        tittle,
        description,
    })
}
const updateTask = (req, res) => {
    res.send('actualizando tarea')
}
const deleteTask = (req, res) => {
    res.send('eliminando tarea')
}

export {getTask, getTasks, createTask, updateTask, deleteTask}