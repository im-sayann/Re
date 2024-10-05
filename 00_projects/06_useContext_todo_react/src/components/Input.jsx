import React, { useState, useEffect } from "react";
import { UseTodo } from "../store/UseTodo";

function Input() {
  const [input, setInput] = useState("");
  const { addTodo, editClick } = UseTodo();

  // Sync the input field with the edited todo when editClick changes
  useEffect(() => {
    setInput(editClick);
  }, [editClick]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      addTodo(input); // Will handle both add and update
    }
    setInput(""); 
  };

  return (
    <form className="flex gap-0 h-fit w-[40rem]">
      <input
        className="py-1 px-7 w-full text-black text-xl rounded-l-[20px] bg-[#fff]"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="py-4 px-7 font-bold rounded-r-[20px] bg-red-500 hover:bg-red-600 active:bg-red-700 transition-all duration-150 ease-in-out"
      >
        {editClick ? "Update" : "Add"}  
      </button>
    </form>
  );
}

export default Input;
