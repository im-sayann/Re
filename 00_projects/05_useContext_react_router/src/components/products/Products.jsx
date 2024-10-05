import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
function Products() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <section className="mt-10">
        <input
          className="p-2 rounded text-black "
          type="text"
          placeholder="search products..."
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 active:bg-blue-700 ">
          Search
        </button>
      </section>

      <section className="flex gap-4">
        <NavLink
          className="px-4 py-2 hover:bg-purple-600 rounded-full bg-purple-500"
          to={"new"}
        >
          New Products
        </NavLink>
        <NavLink
          className="px-4 py-2 hover:bg-yellow-600 rounded-full bg-yellow-500"
          to={"featured"}
        >
          Featured Products
        </NavLink>
      </section>
      <Outlet />
    </div>
  );
}

export default Products;
