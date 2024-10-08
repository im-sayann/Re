import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos"; 

function App() {
  return (
    <Provider store={store}>
      <main className="w-full h-screen flex flex-col justify-center items-center bg-zinc-900 text-white">
        <h1>Redux</h1>
        <AddTodo /> 
        <Todos />
      </main>
    </Provider>
  );
}

export default App;
