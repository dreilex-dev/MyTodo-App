function ToDoList({ tasks , onToggleTask}) {
  
  return (
    <div className="row mt-2" style={{ margin: "auto" }} id="taskList">
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item" key={index} style={{ minWidth: "160px", color: "#fdf2e9" }}>
            <div className="align-items-center row">
            <div className="text-end col-2">
                <input 
                id={task.id} 
                type="checkbox" 
                className="form-check-input" 
                onChange={() => onToggleTask(task.id)}                
                />
              </div>
              <div className="col-10" style={{minWidth: "200px"}}>
                <p className="fw-bold text-muted no-margin">{task.name}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
