import React from 'react'
import {deleteTaskRequest} from '../API/task.api'
import { useTasks } from '../context/TaskContext'

const TaskCard = ({task}) => {

    const {deleteTask} = useTasks();


    return (
        <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.done == 1 ? '✔' : '❌'}</span>
            <p>{new Date(task.createdAt).toString()}</p>
            <button onClick={() => deleteTask(task.taskid)}>
                Delete
            </button>
            <button>
                Edit
            </button>
        </div>
    )
}

export default TaskCard