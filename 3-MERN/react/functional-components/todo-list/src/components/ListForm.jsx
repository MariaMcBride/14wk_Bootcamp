import React, { useState } from 'react'
// import styles from './ListForm.module.css';

const ListForm = (props) => {
  const [newTask, setNewTask] = useState("");

  // const changeHandler = (e) => {
  //   console.log("Test Change");
  //   setNewTask({ ...newTask, [e.target.name]: e.target.value })
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Test Submit");
    const task = {
      taskItem: newTask,
      complete: false
    }
    props.updateTaskList(task);
    setNewTask({
      taskItem: ""
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="d-flex justify-content-center gap-3 mb-3">
        <div className="col-auto">
          <input onChange={(e) => { setNewTask(e.target.value) }} type="text" className="form-control" name="taskItem" value={newTask.taskItem} />
        </div>
        <div className="col-auto">
          <button disabled={newTask.length === 0} type="submit" className="btn btn-info mb-3">New Task</button>
        </div>
      </form>
    </div>
  )
}

export default ListForm