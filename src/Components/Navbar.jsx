import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userimg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user);
  const handleSignOut = () => {
    console.log("clicked");
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("signOut successfully");
      })
      .catch((error) => {
        // An error happened.
        alert("error");
      });
  };

  return (
    <div className="flex justify-between items-center ">
      <div>{user && user.email}</div>
      <div className="flex gap-2 text-base-300">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img src={userimg}></img>
        {user ? (
          <Link onClick={handleSignOut} className="btn btn-primary">
            LogOut
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
