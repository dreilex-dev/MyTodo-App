function ToDoList({ tasks }) {
  return (
    <div className="row mt-5" style={{ margin: "auto" }} id="taskList">
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item" key={index} style={{ minWidth: "160px" }}>
            <div className="align-items-center row">
              <div className="col-10">
                <p className="fw-bold text-muted no-margin">{task}</p>
              </div>
              <div className="text-end col-2">
                <input type="checkbox" className="form-check-input" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
