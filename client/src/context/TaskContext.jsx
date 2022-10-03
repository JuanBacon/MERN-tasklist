import { createContext, useContext } from "react";
import { useState } from "react";
import { getTasksRequest, deleteTaskRequest, createTaskRequest } from "../API/task.api";

export const TaskContext = createContext()

export const useTasks = () => {
    const context = useContext(TaskContext)
    if (!context) { throw new Error("useTasks must be in a TaskContextProvider") }
    return context
}


export const TaskContextProvider = ({ children }) => {

    const tasks = useProvideTasks();
    return (
        <TaskContext.Provider value={tasks}>
            {children}
        </TaskContext.Provider>
    )
}

export const useProvideTasks = () => {
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        try {
            const response = await getTasksRequest();
            setTasks(response.data);
            console.log('response code:', response.status);
        } catch (error) {
            console.error(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id)
            console.log(response);
            setTasks(tasks.filter(task => task.taskid !== id))
        } catch (error) {
            console.error(error);
        }
    }

    const createTask = async (task) => {
        try {
            if(task.title != ''){
                const response = await createTaskRequest(task);
                setTasks([... tasks, response.data])
                console.log(response);
            } else {
                console.error("El campo titulo no puede estar vacío");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return {
        tasks, loadTasks, deleteTask, createTask
    }
}