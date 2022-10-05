// importar express, la configuracion del puerto y los enrutadores express
import express from "express";
import { PORT } from "./config.js";
import {dirname, join} from 'path';
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from "cors";
// crea una aplicacion express 
const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url))
console.log(_dirname);
app.use(cors());
// usa la funcion json de express para manejar los json en las respuestas del servidor 
app.use(express.json());
// usa los enrutadores en la aplicacion 
app.use(indexRoutes);
app.use(taskRoutes);
// despliega la aplicacion en el puerto seleccionado
app.use(express.static(join(_dirname, '../client/dist')))
app.listen(PORT);

console.log(`Server is listening on port: ${PORT}`);