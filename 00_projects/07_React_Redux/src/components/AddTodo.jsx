import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
    const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput("")
  };

  return (
    <form onSubmit={handleAdd} className="flex gap-2 w-[40vw]">
      <input
        type="text"
        placeholder="Add Todo"
        className="w-full p-2 bg-zinc-800 text-white outline-none rounded-xl"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="px-10 py-2 bg-zinc-500 text-white rounded-xl hover:bg-zinc-600 active:bg-zinc-700">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
