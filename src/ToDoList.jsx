function ToDoList ({ tasks }) {
  let taskNewArr = tasks.map((task, index) => {
    return (
      <p key={index}>{task}</p>
    )
  });

    return(
      <div className="toDoList">
        {taskNewArr}
      </div>
    )
};

export default ToDoList