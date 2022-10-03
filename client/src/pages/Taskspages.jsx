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
            <h1>Tasks</h1>
            {renderMain()}
        </>
    )
}

export default TasksPages