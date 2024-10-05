import React, { useState } from "react";
import { UseAuth } from "../../utils/Auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [user, setUser] = useState("");
  const auth = UseAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/", { replace: true });
  };

  return (
    <div className="flex items-center justify-center  mt-2">
      <label>
        Username:{" "}
        <input
          className="p-2 rounded-full text-black "
          type="text"
          placeholder="username"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded-full px-4 hover:bg-blue-600 active:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
