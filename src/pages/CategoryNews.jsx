import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (id == 0) {
      setCategories(data);
      return;
    } else if (id == 1) {
      const breakingNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategories(breakingNews);
      return;
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategories(filterNews);
    }
  }, [data, id]);
  // console.log(id, data);
  return (
    <div>
      {" "}
      <h2 className="font-bold mb-5">
        Total <span className="text-secondary">{categories.length}</span> news
        Found
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {categories.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
