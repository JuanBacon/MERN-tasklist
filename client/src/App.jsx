import './App.css'
import { Route, Routes } from "react-router-dom";
import TaskPages from './pages/Taskspages';
import TaskForm from './pages/TaskForm';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskPages />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default App
