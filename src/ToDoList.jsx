function ToDoList({ tasks, onToggleTask }) {
  return (
    <div className="row mt-2" style={{ margin: "auto" }} id="taskList">
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
            style={{ minWidth: "160px", color: "#fdf2e9" }}
          >
            <div className="d-flex align-items-center">
              <input
                id={task.id}
                type="checkbox"
                className="form-check-input me-2"
                onChange={() => onToggleTask(task.id)}
              />
              <p className="fw-bold text-muted mb-0 me-2">{task.name}</p>
            </div>
            <button
              className="btn btn-danger btn-sm"
              id="deleteButton"
              type="button"
              style={{ borderRadius: "6px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
