import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

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
  console.log(id, data);
  return <div>{categories.length}news found</div>;
};

export default CategoryNews;
