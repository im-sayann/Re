import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  
  const navigate = useNavigate()

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <button onClick={() => navigate("order-confirmed")} className="bg-red-500 text-white p-4 rounded hover:bg-red-600 active:bg-red-700 ">
        Order Now!
      </button>
    </div>
  );
}

export default Home;
