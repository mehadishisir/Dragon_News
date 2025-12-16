import React from "react";
import Home from "../Components/Home";
import Marquee from "react-fast-marquee";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

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
      <div className="w-11/12 mx-auto mt-6 mb-6">
        <Navbar></Navbar>
      </div>
      <main className=" w-11/12 mx-auto  grid grid-cols-12">
        <aside className="grid col-span-3">
          <LeftAside></LeftAside>
        </aside>

        <section className="grid col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="grid col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
