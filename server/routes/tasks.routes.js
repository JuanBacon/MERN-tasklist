// importar el router de express y los controladores del backend
import { Router } from "express";
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controllers.js";

// crear el enrutador y asignar las rutas a los diferentes controladores 
const router = Router();

router.get("/tasks/:id", getTask);
router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router