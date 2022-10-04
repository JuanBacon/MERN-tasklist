import { createContext, useContext } from "react";
import { useState } from "react";
import { getTasksRequest, getTaskRequest, deleteTaskRequest, createTaskRequest, updateTaskRequest } from "../API/task.api";

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

    const loadTask = async (id) => {
        try {
            const response = await getTaskRequest(id);
            return response.data;
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
            if (task.title != '') {
                const response = await createTaskRequest(task);
                setTasks([...tasks, response.data])
                console.log(response);
            } else {
                console.error("El campo titulo no puede estar vacío");
            }
        } catch (error) {
            console.error(error);
        }
    }
    const updateTask = async (id, newFields) => {
        try {
            const response = await updateTaskRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return {
        tasks, loadTasks, loadTask, deleteTask, createTask, updateTask
    }
}