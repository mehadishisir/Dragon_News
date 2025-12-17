import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-accent min-h-screen">
      <div className="  mt-2 py-6 w-11/12 mx-auto ">
        <Navbar></Navbar>
      </div>
      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
