import { useState } from "react";

function AddTask({ onAddNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <h2 className="text-slate-950 font-bold">Adicionar tarefa</h2>
      <input
        type="text"
        name="task__title"
        id="taskTitle"
        placeholder="Digite o nome da tarefa"
        className="bg-slate-50 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="task__description"
        id="taskDescription"
        placeholder="Digite a descrição da tarefa"
        className="bg-slate-50 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha os campos")
          };
          onAddNewTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-sky-600 text-white font-bold px-4 py-2 rounded-md cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
