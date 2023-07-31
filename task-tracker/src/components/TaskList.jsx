export default function TaskList({ tasks, deleteTask }) {
  return (
    <>
      <div className="flex flex-col items-center">
        {tasks.map((data) => (
          <div
            key={data.id}
            className="flex justify-around  border-solid border-gray-800  rounded-md bg-slate-500 w-[400px] mt-3 "
          >
            <input type="checkbox"/>
            <h2 className="w-[80%]">
              {data.name} - {data.dueDate}
            </h2>
            <button
              className="cursor-pointer hover:text-red-600"
              onClick={() => deleteTask(data.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
