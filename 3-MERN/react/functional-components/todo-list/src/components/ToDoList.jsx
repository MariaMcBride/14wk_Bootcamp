// import React, { useState } from 'react'
// import styles from './ToDoList.module.css';

const ToDoList = (props) => {
  const listTasks = [...props.task];

  const checkTask = (e, i) => {
    listTasks[i].complete ?
      listTasks[i].complete = false :
      listTasks[i].complete = true;
    props.updateTaskList(listTasks);
    // let [...updatedTaskList] = listTasks;
    // updatedTaskList[i].complete = !updatedTaskList[i].complete;
    // props.setListTasks(updatedTaskList);
    // const updatedTasksList = listTasks.map((task, i) => {
    //   e === i && (task.complete = !task.complete);
    //   return task;
    // });
  };

  const deleteTask = (id) => {
    const filteredList = listTasks.filter((listTasks, i) => {
      return i !== id;
    });
    props.updateTaskList(filteredList);
  };

  return (
    <div className="pb-2">
      {
        listTasks.map((task, i) => {
          let classAdds = "";
          task.complete && (classAdds += "strike");
          return (
            <div className="row px-5 pb-3 d-flex justify-content-between">
              <div className={`col-auto d-flex align-items-center ${classAdds}`}>
                <p key={i} className={`col-auto d-flex align-items-center bg-dark text-white ${classAdds}`}>
                </p>
                <input onChange={(e) => checkTask(e, i)} className="form-check-input me-3" type="checkbox" checked={task.complete} />{task.taskItem}
              </div>
              <input onClick={(e) => deleteTask(i)} className="col-auto btn btn-danger ms-3" type="submit" value="Delete" />
            </div>
          )
        })
      }
    </div>
  )
}

export default ToDoList