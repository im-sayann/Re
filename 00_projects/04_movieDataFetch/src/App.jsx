import { useState } from "react";
import useMovieData from "./useMovieData/movieData";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");  
  const data = useMovieData(searchTerm); // Only fetch data based on searchTerm, not input
  

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) { // Ensure input is not empty
      setSearchTerm(input); 
    } 
  };

  const handleChange = (e) => {
    setInput(e.target.value);  
  };

  return (
    <div className="bg-zinc-900 h-screen w-full text-white">
      <form onSubmit={handleSearch}> {/* Attach handleSearch to form submission */}
        <input
          className="text-black"
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Search movie..."
        />
        <button type="submit">Search</button> {/* Set the button type to 'submit' */}
      </form>
      {data && (
        <div>
          <h1>{data.Title}</h1>
          <p>{data.Plot}</p>
          <p>Released: {data.Released}</p>
        </div>
      )}
    </div>
  );
}

export default App;
