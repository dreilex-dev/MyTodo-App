import React, { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import '../src/design/assets/bootstrap/css/bootstrap.min.css'; 
import '../src/design/assets/css/styles.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5 py-4 gap-3" style={{ fontFamily: "Alata", color: "#F9F8F8" }}>
      <div className="row">
        <div className="text-center col">
          <h1 className="gradient-h1" style={{ color: "var(--bs-primary)" }}>My ToDo app</h1>
        </div>
      </div>
      <ToDoInput addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
