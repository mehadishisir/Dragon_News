import React from "react";
import logo from "../assets/logo.png";
import dayjs from "dayjs";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="Dragon News Logo" className="mx-auto mt-12 mb-6" />
      <p className="text-base-300">Journalism Without Fear or Favour</p>

      <p className="mt-2 font-bold">{dayjs().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Home;
