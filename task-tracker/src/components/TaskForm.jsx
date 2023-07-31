import { useState } from "react";

export default function TaskForm({addTask}) {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    
    const newTask = {
        id : Date.now(),
        name: task,
        dueDate: dueDate,
        completed: false
    }
    
    addTask(newTask);
    setTask("");
    setDueDate("");
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
