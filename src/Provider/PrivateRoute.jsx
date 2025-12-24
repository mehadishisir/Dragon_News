import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location);
  //   console.log(user);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  }

  //   console.log(children);
};

export default PrivateRoute;
