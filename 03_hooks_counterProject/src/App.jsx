import { useState } from "react";
import "./App.css";

function App() {
  // couter is the value that need to change
  let [counter, setCounter] = useState(5) // default value 5

  const addValue = () => {
    // Setcounter updates the value
    setCounter(counter + 1)
    
  }
  const removeValue = () => {
    console.log('value removed');
    setCounter(counter - 1)

    if (counter == 0) { // stop in 0
      setCounter(counter = 0)
    }
  }

  return (
    <>
      <h1>Couter is: {counter}</h1>
      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value : {counter}</button>
    </>
  );
}

export default App;
