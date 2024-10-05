import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UseAuth } from "../utils/Auth";

function Navigation() {

  const auth = UseAuth()

  return (
    <div className="bg-orange-600 space-x-4 w-full p-4 flex justify-center items-center">
      <NavLink
        className={({ isActive }) => `${isActive ? "font-bold" : ""} text-black` }
        to={"/"}> Home </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${isActive ? "font-bold" : ""} text-black`
        }
        to={"/about"}
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${isActive ? "font-bold" : ""} text-black`
        }
        to={"/products"}
      >
        Products
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${isActive ? "font-bold" : ""} text-black`
        }
        to={"/cart-added"}
      >
        My Cart
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${isActive ? "font-bold" : ""} text-black`
        }
        to={"/profile"}
      >
        Profile
      </NavLink>

        {/* Show login page if no user login */}
      {
        !auth.user && (
          <NavLink to="/login" className={({isActive}) => `${isActive ? "font-bold" : ""} text-black`}>
            Login
         </NavLink>
        )
      }
    </div>
  );
}

export default Navigation;
