import { Router } from "express";
import {connection} from '../db.js'

const router = Router();

router.get('/ping', async (req,res)=>{
    try{
        const [rows] = await connection.query('SELECT * FROM tasks')
        res.json(rows)
    }
    catch (err) {
        console.log("Error en la query:", err);
        res.json(err)
    }
})

export default router