import React from "react";
import Home from "../Components/Home";
import RightAside from "../Layouts/RightAside";

const NewsDetails = () => {
  return (
    <div>
      <header>
        <Home></Home>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className=" col-span-9">
          <h3>Dragon News</h3>
        </section>
        <section className=" col-span-3">
          <aside>
            <RightAside></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
