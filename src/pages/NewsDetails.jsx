import React, { useEffect, useState } from "react";
import Home from "../Components/Home";
import RightAside from "../Layouts/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState([]);
  console.log(id);
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
    console.log(news);
  }, [id, data]);
  return (
    <div className="space-y-5">
      <header>
        <Home></Home>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className=" col-span-9">
          <h3 className="font-extrabold mb-5">Dragon News</h3>
          <NewsDetailsCard news={news}></NewsDetailsCard>
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
