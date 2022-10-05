import axios from "axios";
const port = 5000;

export const getTaskRequest = async (id) => {
    return await axios.get("http://localhost:"+port+"/api/tasks/" + id);
}
export const getTasksRequest = async () => {
    return await axios.get("http://localhost:"+port+"/api/tasks");
};
export const createTaskRequest = async (task) => {
    return await axios.post("http://localhost:"+port+"/api/tasks", task);
};
export const deleteTaskRequest = async (id) => {
    return await axios.delete("http://localhost:"+port+"/api/tasks/" + id );
}
export const updateTaskRequest = async (id, newFields) => {
    return await axios.put("http://localhost:"+port+"/api/tasks/" + id,  newFields);
}
