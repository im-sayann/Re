import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // smart way

    const data = useLoaderData()

  // One way of fetching not optimized for router
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((response) => {
  //         setData(response);
  //         console.log(response);
  //       });
  //   }, []);

  return (
    <div className="mx-auto flex items-center justify-center gap-10 w-fit my-10  rounded-lg p-5 hover:bg-zinc-300 hover:shadow-[0_12px_24px_1px_rgba(0,0,0,0.5)] ease-in-out duration-300">
      <img
        className="hover:shadow-[0_12px_24px_1px_rgba(0,0,0,0.5)]  rounded-full w-[10rem] hover:border-red-500 border-2 b"
        src={data.avatar_url}
        alt=""
      />
      <div className="flex flex-col w-[30%] gap-5">
        <div className="font-semibold text-xl hover:shadow-[0_12px_24px_1px_rgba(0,0,0,0.5)] ease-in-out duration-300 p-5 rounded-xl">
          {data.bio}
        </div>
        <div className="font-semibold text-xl hover:shadow-[0_12px_24px_1px_rgba(0,0,0,0.5)] ease-in-out duration-300 p-5 rounded-xl">
          Github Followers {data.followers}
        </div>
      </div>
    </div>
  );
}

export default Github;

// Similar fetch call using loader in router
export const githubInfoLoader = async () => { // passing func to router
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
  // returning the function, (and use it in router)
};
