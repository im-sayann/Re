import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todoStore.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };
  

  return (
    <div className="mt-10 flex flex-col gap-2 border border-zinc-800 rounded-lg p-5 w-[40vw] min-h-[40vh]">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between bg-zinc-500 p-2 rounded-lg"
        >
          <h1 className="text-xl font-bold">{todo.text}</h1>
          <span
            onClick={() => handleDelete(todo.id)}
            className="text-sm text-zinc-500 ml-2 bg-zinc-800 px-2 py-1 rounded-lg hover:bg-zinc-900 active:scale-95 cursor-pointer"
          >
            delete
          </span>
        </div>
      ))}
    </div>
  );
}

export default Todos;
