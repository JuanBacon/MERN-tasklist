import React from 'react'
import { useEffect } from 'react'
import TaskCard from '../components/TaskCard';
import { useTasks } from '../context/TaskContext';

const TasksPages = () => {

    const {tasks, loadTasks} = useTasks();

    useEffect(() => {
        loadTasks();
    }, [])

    const renderMain = () => {
        if(tasks.length === 0) return <h3>No Tasks Yet</h3>
        return tasks.map(task => (<TaskCard task={task} key={task.taskid} />))
    }

    return (
        <>
            <h1 className='text-5xl text-white font-bold text-center '>Tasks</h1>
            <div className='grid grid-cols-3 gap-5 pt-10' >
            {renderMain()}
            </div>
        </>
    )
}

export default TasksPages