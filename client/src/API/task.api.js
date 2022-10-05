import axios from "axios";
const port = 3000;

export const getTaskRequest = async (id) => {
    return await axios.get("https://juanbacon-todotasks.herokuapp.com/api/tasks/" + id);
}
export const getTasksRequest = async () => {
    return await axios.get("https://juanbacon-todotasks.herokuapp.com/api/tasks");
};
export const createTaskRequest = async (task) => {
    return await axios.post("https://juanbacon-todotasks.herokuapp.com/api/tasks", task);
};
export const deleteTaskRequest = async (id) => {
    return await axios.delete("https://juanbacon-todotasks.herokuapp.com/api/tasks/" + id );
}
export const updateTaskRequest = async (id, newFields) => {
    return await axios.put("https://juanbacon-todotasks.herokuapp.com/api/tasks/" + id,  newFields);
}
