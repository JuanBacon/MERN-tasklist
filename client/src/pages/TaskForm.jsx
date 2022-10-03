import React from 'react'
import { Form, Formik } from "formik";
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {

    const {createTask} = useTasks();
    return (
        <>
            <h1>Add a task</h1>
            <Formik
                initialValues={{
                    title: "",
                    description: "",
                }}
                onSubmit={async (values, actions) => {
                    createTask(values);
                    actions.resetForm();
                }}>
                {({ handleChange, handleSubmit,values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} >
                        <label>Title*</label>
                        <br />
                        <input
                            type="text"
                            name='title'
                            placeholder='Any title'
                            onChange={handleChange}
                            value={values.title}
                        />
                        <br />
                        <label>Description</label>
                        <br />
                        <textarea
                            rows='3'
                            name='description'
                            placeholder='Any description'
                            onChange={handleChange}
                            value={values.description}
                        />
                        <br />
                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting ? 'saving...' : 'Save'}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default TaskForm