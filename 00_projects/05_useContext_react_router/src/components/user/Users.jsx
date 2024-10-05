import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeUser = searchParams.get("filter") === "active";

  return (
    <main className="flex flex-col justify-center items-center gap-10">
      <div className="flex gap-4 rounded-lg bg-orange-200 text-black py-2 px-4 mt-2">
        <h1 className="text-3xl font-bold ">User 1</h1>
        <h1 className="text-3xl font-bold ">User 2</h1>
        <h1 className="text-3xl font-bold ">User 3</h1>
      </div>
      <Outlet />
      <div className="space-x-4">
        {/* Active Filter */}
        <button
          onClick={() => setSearchParams({ filter: "active" })}
          className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 active:bg-blue-700"
        >
          Active Users
        </button>

        {/* Reset Filter */}
        <button
          onClick={() => setSearchParams({})}
          className="bg-orange-500 text-white p-4 rounded hover:bg-orange-600 active:bg-orange-700"
        >
          Reset Filter
        </button>
      </div>

      {/* Conditional Rendering */}
      {activeUser ? <h1>Showing active users</h1> : <h1>Showing all users</h1>}{" "}
    
    </main>
  );
}

export default Users;
