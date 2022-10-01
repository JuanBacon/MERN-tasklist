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

router.get("/api/tasks/:id", getTask);
router.get("/api/tasks", getTasks);
router.post("/api/tasks", createTask);
router.put("/api/tasks/:id", updateTask);
router.delete("/api/tasks/:id", deleteTask);

export default router