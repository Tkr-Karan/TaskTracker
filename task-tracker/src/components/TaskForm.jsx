import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      name: task,
      dueDate: dueDate,
      completed: false,
    };

    addTask(newTask);
    setTask("");
    setDueDate("");
  };

  return (
    <>
      <form className="m-2 " onSubmit={handleSumbit}>
        <input
          className="m-2 rounded-sm pl-2"
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className=" m-2 rounded-sm pl-2"
          type="text"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button
          className="border-solid border-gray-300 bg-slate-500/20 rounded-md w-[80px] "
          type="submit"
        >
          Add Task
        </button>
      </form>
    </>
  );
}
