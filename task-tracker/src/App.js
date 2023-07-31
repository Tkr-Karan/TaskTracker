
import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    // console.log(newTask)
    setTasks((prevTask) => [...prevTask, newTask]);
  }

  const deleteTask = (taskID) => {
    // console.log("delete task")
    setTasks(prevTask => prevTask.filter(task => task.id != taskID));
  }

  return (
    <div className="App">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
