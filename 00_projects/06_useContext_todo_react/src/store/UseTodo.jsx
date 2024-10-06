import { createContext, useContext, useState } from "react";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editClick, setEditClick] = useState("");
  const [editId, setEditId] = useState(null);
  const [color, setColor] = useState(null)

  const handleColor = (color) => {
    setColor(color)
  }

  const addTodo = (inputValue) => {
    if (editId !== null) {
      // Update existing todo
      const updatedTodos = todos.map((todo, index) =>
        index === editId ? inputValue : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
      setEditClick(""); // Clear edit state
    } else {
      // Add new todo
      setTodos([...todos, inputValue]);
    }
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo, index) => index !== id)]);
  };

  const editTodo = (todo, id) => {
    setEditClick(todo);
    setEditId(id);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, editTodo, editClick, editId, color, handleColor }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const UseTodo = () => {
  return useContext(TodoContext);
};
