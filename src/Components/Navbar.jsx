import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div></div>
      <div className="flex gap-2 text-base-300">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img src={user}></img>
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
