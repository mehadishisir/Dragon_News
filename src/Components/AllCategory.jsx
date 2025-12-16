import React, { use } from "react";
import { NavLink } from "react-router";
const categories = fetch("/categories.json").then((res) => res.json());

const AllCategory = () => {
  const allCategories = use(categories);
  console.log(allCategories);
  return (
    <div className="grid grid-cols-1 gap-2 text-base-300">
      {allCategories.map((category) => (
        <NavLink
          key={category.id}
          className=" btn bg-base-100 border-0 hover:bg-base-100 font-semibold text-base-300 "
          to={`/categories/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default AllCategory;
