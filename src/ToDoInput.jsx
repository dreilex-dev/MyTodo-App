import React, { useState } from "react";

function ToDoInput({ addTask }) {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne refresh-ul paginii
    if (val.trim() !== "") {
      addTask(val); // Adaugă task-ul
      setVal("");   // Resetează valoarea inputului
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row mt-4" id="userInput">
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
            type="submit" // Comportament implicit de submit
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default ToDoInput;
