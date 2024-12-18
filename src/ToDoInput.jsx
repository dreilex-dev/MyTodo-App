function ToDoInput () {
    return(
      <div className = "userInput">
      <input id ="addInput" type="text" name="myInput" placeholder='Add a task...'/>
      <button id ="submitInput" type="submit">Add</button>
    </div>
    )
  };

  export default ToDoInput