// importar express, la configuracion del puerto y los enrutadores express
import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

// crea una aplicacion express 
const app = express();
// usa la funcion json de express para manejar los json en las respuestas del servidor 
app.use(express.json());
// usa los enrutadores en la aplicacion 
app.use(indexRoutes);
app.use(taskRoutes);
// despliega la aplicacion en el puerto seleccionado
app.listen(PORT);

console.log(`Server is listening on port: ${PORT}`);