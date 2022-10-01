import React from 'react'
import { useEffect, useState } from 'react'
import { getTasksRequest } from "../API/task.api";

const Taskspages = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const response = await getTasksRequest();
            setTasks(response.data);
        }
        loadTasks();
    }, [])
    
    return (
        <>
        <h1>Tasks</h1>
        {tasks.map((task, index) => (
            <div key={index}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <span>{task.done == 1 ? '✔' : '❌'}</span>
            </div>
        ))}
        
        </>
    )
}

export default Taskspages