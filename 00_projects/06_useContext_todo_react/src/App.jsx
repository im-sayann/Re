import { useState, useEffect } from "react";
import Input from "./components/Input";
import Todo from "./components/Todo";
import "./App.css";
import { TodoProvider } from "./store/UseTodo";
import Color from "./components/Color";

function App() {
  return (
    <div className="bg-zinc-900 h-screen w-full justify-center gap-10 items-center flex flex-col p-5 text-white">
      <TodoProvider>
        <Input />
        <div className="flex">
          <Todo />
          <Color />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
