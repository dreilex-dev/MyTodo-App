import App from "./App";
import { useState } from "react";

function ToDoInput ({addTask}) {
  const [val, setVal] = useState("");
  const addInput = () => {
    addTask(val);
    setVal("");
  }
  function handleChange(e) {
    setVal(e.target.value);
  }
    return(
      <div className = "userInput">
      <input id ="addInput" type="text" name="myInput" placeholder='Add a task...' value ={val} onChange={handleChange}/>
      <button id ="submitInput" type="submit" onClick={addInput}>Add</button>
    </div>
    )
  };

  export default ToDoInput