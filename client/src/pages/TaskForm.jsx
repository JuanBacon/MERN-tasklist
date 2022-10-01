import React from 'react'
import { Form, Formik } from "formik";
const TaskForm = () => {
    return (
        <>
            <h1>Add a task</h1>
            <Formik
                initialValues={{
                    title: "",
                    description: ""
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {({ handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} >
                        <label>Title</label>
                        <br />
                        <input
                            type="text"
                            name='title'
                            placeholder='Any title'
                            onChange={handleChange}
                        />
                        <br />
                        <label>Description</label>
                        <br />
                        <textarea
                            rows='3'
                            name='description'
                            placeholder='Any description'
                            onChange={handleChange}
                        />
                        <br />
                        <button type='submit'>Save</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default TaskForm