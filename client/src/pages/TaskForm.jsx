import React from 'react'
import { Form, Formik } from "formik";
import { useTasks } from '../context/TaskContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function TaskForm() {

    const params = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState({
        title: "",
        description: "",
        done: 0
    });
    const { createTask, loadTask, updateTask } = useTasks();

    useEffect(() => {
        console.log("builded component");
        const retrieveData = async () => {
            if (params.id) {
                try {
                    const response = await loadTask(params.id);
                    setTask({
                        title: response.title,
                        description: response.description,
                        done: response.done
                    })
                } catch (error) {
                    console.log(error);
                    setTask({
                        title: "",
                        description: "",
                        done: 0
                    });
                }
            }
        };
        retrieveData();
    }, []);

    return (
        <>
            <h1>{params.id ? 'Edit task' : 'Add Task'}</h1>
            {console.log(task)}
            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values) => {
                    if(params.id){
                        console.log('Updating data...');
                        await updateTask(params.id, values);
                        navigate('/');
                    } else{
                        await createTask(values);
                        navigate('/');
                    }
                    setTask({
                        title: "", 
                        description: "",
                        done: 0
                    })
                } }>
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Title*</label>
                        <br />
                        <input
                            type="text"
                            name='title'
                            placeholder='Any title'
                            onChange={handleChange}
                            value={values.title} />
                        <br />
                        <label>Description</label>
                        <br />
                        <textarea
                            rows='3'
                            name='description'
                            placeholder='Any description'
                            onChange={handleChange}
                            value={values.description} />
                        <br />
                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting ? 'saving...' : 'Save'}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default TaskForm