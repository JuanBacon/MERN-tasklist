import './App.css'
import { Route, Routes } from "react-router-dom";
import TaskPages from './pages/TasksPages';
import TaskForm from './pages/TaskForm';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import { TaskContextProvider } from './context/TaskContext';
const App = () => {
  return (
    <div className='bg-zinc-900 h-screen'>
      <NavBar />
      <div className="container mx-auto py-4">
      <TaskContextProvider>
        <Routes>
          <Route path="/" element={<TaskPages />} />
          <Route path="/new" element={<TaskForm key='new-task'/>} />
          <Route path='/edit/:id' element={<TaskForm key= 'edit-task' />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
      </div>
    </div>
  )
}

export default App
