import React from 'react'
import { useTasks } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom';

const TaskCard = ({task}) => {

    const {deleteTask, toggleTaskDone} = useTasks();
    const navigate = useNavigate();

    return (
        <div key={task.taskid}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.done == 1 ? '✔' : '❌'}</span>
            <p>{new Date(task.createdAt).toString()}</p>
            <button onClick={async () => await deleteTask(task.taskid)}>
                Delete
            </button>
            <button onClick={() => navigate(`/edit/${task.taskid}`)}>
                Edit
            </button>
            <button onClick={async () => await toggleTaskDone(task.taskid)}>
                Toggle task
            </button>
        </div>
    )
}

export default TaskCard