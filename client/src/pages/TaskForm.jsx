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
            
            {console.log(task)}
            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values) => {
                    if(params.id){
                        console.log('Updating data...');
                        await updateTask(params.id, values);
                    } else{
                        await createTask(values);
                    }
                    navigate('/');
                    setTask({
                        title: "", 
                        description: "",
                        done: 0
                    })
                } }>
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} className="bg-slate-200 max-w-md rounded-md p-4 mx-auto mt-10">
                        <h1 className='text-xl font-bold uppsercase'>{params.id ? 'Edit task' : 'Add Task'}</h1>
                        <label className='block text-lg'>Title</label>
                        <input
                            type="text"
                            name='title'
                            placeholder='Any title'
                            className='px-2 py-1 rounded-sm w-full'
                            onChange={handleChange}
                            value={values.title} />
                        <br />
                        <label className='block'>Description</label>
                        <textarea
                            rows='4'
                            name='description'
                            placeholder='Any description'
                            onChange={handleChange}
                            className='px-2 py-1 rounded-sm w-full resize-none'
                            value={values.description} />
                        <button className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md shadow-lg hover:shadow-blue-500/50' type='submit' disabled={isSubmitting}>
                            {isSubmitting ? 'saving...' : 'Save'}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default TaskForm