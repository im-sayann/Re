import React from "react";
import { UseAuth } from "../../utils/Auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = UseAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/")
  };
 

  return (
    <> 

      <div className="font-bold text-center p-4 text-white flex w-full items-center justify-center gap-2">
        <h1 className="text-3xl">Login as : {auth.user}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 active:bg-red-700"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Profile;
