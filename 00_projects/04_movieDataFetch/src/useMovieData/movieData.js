import { useState, useEffect } from "react";

function useMovieData(request) {
  const [data, setData] = useState(null); // Initialize with null
  
  useEffect(() => {
    if (!request) return; // Only fetch data if a valid request is provided
    
    const apiKey = "f7951cb0";
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${request}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error('Error fetching movie data:', error));
  }, [request]);

  return data;
}

export default useMovieData;
