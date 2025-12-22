import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/auth/login"></Navigate>;
  }

  //   console.log(children);
};

export default PrivateRoute;
