import './App.css';
import React, { useState } from 'react'
import ListForm from './components/ListForm'
import ToDoList from './components/ToDoList'

const App = () => {
  const [listTasks, setListTasks] = useState([]);

  const newTaskList = (listTasks) => {
    setListTasks(listTasks);
  }

  const updateTaskList = (newTask) => {
    setListTasks([...listTasks, newTask]);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="card m-5 bg-dark text-white">
          <h1 className="text-center m-4">To Do List</h1>
          <ListForm updateTaskList={updateTaskList} />
          <ToDoList
            task={listTasks}
            updateTaskList={newTaskList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
