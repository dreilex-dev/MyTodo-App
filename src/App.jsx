import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'



function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    let currentTasks = [...tasks];
    currentTasks.push(task);
    setTasks(currentTasks);
  }
  return (
    <div>
      <h1>My Todo App</h1>
      <ToDoInput addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
};



export default App
