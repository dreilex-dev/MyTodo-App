import React, { useState } from "react";

function ToDoInput({ addTask }) {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (val.trim() !== "") {
      addTask(val);
      setVal("");
    }
  };

  return (
    <div className="row mt-4" id="userInput">
      <div className="d-inline-flex flex-column justify-content-center align-items-center align-content-center col-md-8 offset-md-2">
        <div className="d-flex justify-content-center align-items-center align-content-center input-group" style={{ width: "max-content" }}>
          <input
            id="textInput"
            type="text"
            className="form-control"
            placeholder="Add new task ..."
            value={val}
            onChange={handleChange}
          />
          <button
            id="submitButton"
            className="btn btn-primary"
            type="submit"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoInput;
