import './App.css'
import { Route, Routes } from "react-router-dom";
import TaskPages from './pages/TasksPages';
import TaskForm from './pages/TaskForm';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import { TaskContextProvider } from './context/TaskContext';
const App = () => {
  return (
    <TaskContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskPages />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  )
}

export default App
