import * as mysql from "mysql2/promise";
import * as dotenv from 'dotenv'
dotenv.config()

let connection;
try {
  connection = await mysql.createConnection(process.env.DATABASE_URL)
  console.log("Connected to PlanetScale!");
}

catch(err){
  console.log("Error de conexion:", err);
}

export {connection}