import React, { Suspense } from "react";
import AllCategory from "../Components/AllCategory";

const LeftAside = () => {
  return (
    <div>
      <h1> All Category</h1>
      <div className="mt-3 ">
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AllCategory></AllCategory>
        </Suspense>
      </div>
    </div>
  );
};

export default LeftAside;
