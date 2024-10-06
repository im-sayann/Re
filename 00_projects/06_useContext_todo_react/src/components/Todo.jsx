import React, { useEffect, useState } from "react";
import { UseTodo } from "../store/UseTodo";

function Todo() {
  const [colorMatch, setColorMatch] = useState(null)
  const { todos, deleteTodo, editTodo, editId, color } = UseTodo();

  useEffect(() => {
     setColorMatch(color)
     console.log(color)
  }, [color])
  

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (todo, id) => {
    editTodo(todo, id);
  };

  return (
    <main
      style={{ scrollbarWidth: "none" }}
      className="border w-[40rem] h-[70vh] rounded-[20px] p-5 border-[#353535] 
        flex flex-col gap-5 overflow-auto"
    >
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <div
              style={{backgroundColor: colorMatch}}
              key={index}
              className={`bg-purple-800 todo  py-2 px-7 rounded-[20px] flex justify-between items-center ${
                editId === index ? "border border-[#ffecec]" : ""
              }`} // Conditionally apply border if editing
            >
              <p className={`${editId === index? "border-b border" : ""}font-semibold text-2xl`}>{todo}</p>
              <div className="flex gap-3">
                <span
                  onClick={() => handleDelete(index)}
                  className="rounded-full h-[20px] w-[20px] bg-red-500 text-black shadow-lg cursor-pointer hover:scale-105 ease-out duration-150 transition-all active:scale-95 p-5 flex justify-center items-center"
                >
                  X
                </span>
                <span
                  onClick={() => handleEdit(todo, index)}
                  className="rounded-full h-[20px] w-[20px] bg-red-500 text-black shadow-lg cursor-pointer hover:scale-105 ease-out duration-150 transition-all active:scale-95 p-5 flex justify-center items-center"
                >
                  O
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="text-center text-2xl font-bold">No todos found</h1>
      )}
    </main>
  );
}

export default Todo;
