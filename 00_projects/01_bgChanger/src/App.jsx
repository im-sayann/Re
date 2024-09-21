import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");

  const buttonClick = (e) => {
    setColor(e.target.textContent)
  }
  

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="w-full h-screen bg-zinc-900 relative"
      >
        <div className="w-fit pt-[30px] bottom-10 mx-auto flex gap-3">
          <div 
            onClick={buttonClick}
            className="min-h-[30px] min-w-[70px] bg-red-600 rounded-full flex items-center justify-center text-white text-2xl px-[30px] py-[10px] border-2 border-black">
            Red
          </div>
          <div 
            onClick={buttonClick}
            className="min-h-[30px] min-w-[70px] bg-green-600 rounded-full flex items-center justify-center text-white text-2xl px-[30px] py-[10px] border-2 border-black">
            Green
          </div>
          
          <div 
          onClick={buttonClick}
          className="min-h-[30px] min-w-[70px] bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl px-[30px] py-[10px] border-2 border-black">
            Blue
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
