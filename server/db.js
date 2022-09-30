// usa el modulo npm mysql2 y el dotenv para las vairables de entorno
import * as mysql from "mysql2/promise";
import * as dotenv from 'dotenv'
// configura el entorno 
dotenv.config()
// crea una connexion con la base de datos usando la conection string de la db usando el metodo createConnection de mysql2
let connection;
try {
  connection = await mysql.createConnection(process.env.DATABASE_URL)
  console.log("Connected to PlanetScale!");
}

catch(err){
  console.log("Error de conexion:", err);
}

export {connection}