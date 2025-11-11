import { RiArrowRightSLine, RiDeleteBinLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`text-left text-white p-2 rounded-md w-full ${
              task.isCompleted ? "bg-green-300" : "bg-slate-400"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 text-white rounded-md"
          >
            <RiArrowRightSLine />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-red-300 p-2 text-white rounded-md hover:bg-red-400"
          >
            <RiDeleteBinLine />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
