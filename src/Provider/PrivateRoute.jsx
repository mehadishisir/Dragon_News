import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  if (user) {
    return children;
  } else {
    return <Navigate to="/auth/login"></Navigate>;
  }

  //   console.log(children);
};

export default PrivateRoute;
