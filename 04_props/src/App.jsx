import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {

  let img1 = 'https://wallpapercave.com/wp/wp14136774.jpg'
  return (
    <>
      <h1 className="text-black bg-yellow-500 p-4 rounded-2xl mb-4">React Props</h1>
      
       <Card username="Sayan" btnText="Click Me"/> {/* Passing props  */}
      <Card username="Microsoft" Image={img1}/> {/* We can pass anything  */}
      
      
    </>
  );
}

export default App;
