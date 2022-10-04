import React from 'react'
import { useTasks } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom';

const TaskCard = ({task}) => {

    const {deleteTask} = useTasks();
    const navigate = useNavigate();

    return (
        <div key={task.taskid}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.done == 1 ? '✔' : '❌'}</span>
            <p>{new Date(task.createdAt).toString()}</p>
            <button onClick={() => deleteTask(task.taskid)}>
                Delete
            </button>
            <button onClick={() => navigate(`/edit/${task.taskid}`)}>
                Edit
            </button>
        </div>
    )
}

export default TaskCard