import React from 'react'
import { useTasks } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom';

const TaskCard = ({task}) => {

    const {deleteTask, toggleTaskDone} = useTasks();
    const navigate = useNavigate();

    return (
        <div className='bg-slate-200 rounded-md p-4 drop-shadow-lg' key={task.taskid}>
            <header className='flex justify-between'>
                <h3 className='text-xl font-bold'>{task.title}</h3>
                <button className='text-xl px-2 py-1' onClick={async () => await toggleTaskDone(task.taskid)}>{task.done == 1 ? '✅' : '⬛'}</button>
            </header>
            <p className='text-xs text-gray-500'>{task.createdAt}</p>
            <p className='text-lg my-3 leading-tight'>{task.description}</p>
            <div className='flex gap-x-2'>
                <button className='bg-red-500 shadow-lg hover:shadow-red-500/50 px-2 py-1 text-white rounded-sm drop-shadow-lg' onClick={async () => await deleteTask(task.taskid)}>
                    Delete
                </button>
                <button className='bg-gray-500 shadow-lg hover:shadow-gray-700/50 px-2 py-1  text-white rounded-sm drop-shadow-lg' onClick={() => navigate(`/edit/${task.taskid}`)}>
                    Edit
                </button>
            </div>
        </div>
    )
}

export default TaskCard