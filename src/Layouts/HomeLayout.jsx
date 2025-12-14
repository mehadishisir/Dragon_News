import React from "react";
import Home from "../Components/Home";
import Marquee from "react-fast-marquee";

const HomeLayout = () => {
  return (
    <div>
      <Home></Home>
      <div className="flex mt-6 w-11/12 mx-auto gap-4 items-center bg-accent p-4 rounded">
        <button className="btn btn-secondary">Latest</button>
        <Marquee pauseOnHover={true} speed={60}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </Marquee>
      </div>
      <div className="left nav"></div>
      <main></main>
      <div className="right nav"></div>
    </div>
  );
};

export default HomeLayout;
