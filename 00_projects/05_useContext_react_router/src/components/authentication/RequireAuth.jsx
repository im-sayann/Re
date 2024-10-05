import React from "react";
import { UseAuth } from "../../utils/Auth";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const auth = UseAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default RequireAuth;
