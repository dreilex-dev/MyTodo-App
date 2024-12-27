import React, { useEffect, useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import '../src/design/assets/bootstrap/css/bootstrap.min.css'; 
import '../src/design/assets/css/styles.css';

function App() {  
  // Inițializează taskurile din localStorage sau setează un array gol
  const storedItems = JSON.parse(localStorage.getItem('tasks')) || [];
  const objectTasks = storedItems.map((currentValue, index) => ({
    id: Date.now() + index,
    name: currentValue.name || currentValue, // Compatibilitate cu date mai vechi
    done: currentValue.done || false
  }));
  const [tasks, setTasks] = useState(objectTasks);

  // Adaugă un task nou
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      done: false
    };
    setTasks([...tasks, newTask]);
  };

  // Salvează taskurile în localStorage ori de câte ori tasks se schimbă
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskToggle = (id) => {
    console.log("Task ID received:", id);
    console.log("Tasks before the update:", tasks);
  
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        console.log("Task found for modification:", task);
        return { ...task, done: !task.done };
      }
      return task;
    });
  
    console.log("Tasks after modification:", updatedTasks);
    setTasks(updatedTasks);
  };
  
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5 py-4 gap-3" style={{ fontFamily: "Alata", color: "#F9F8F8" }}>
      <div className="row">
        <div className="text-center col">
          <h1 
          className="gradient-h1" 
          style={{ color: "var(--bs-primary)" }}>My ToDo app</h1>
        </div>
      </div>
      <ToDoInput addTask={addTask} />
      <ToDoList tasks={tasks} onToggleTask={handleTaskToggle}/>
    </div>
  );
}

export default App;
