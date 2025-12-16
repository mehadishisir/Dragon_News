import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import HomeNews from "../pages/HomeNews";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <HomeNews></HomeNews>,
      },
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "/auth",
    element: <div>Auth Page</div>,
  },
  {
    path: "/news",
    element: <div>News Page</div>,
  },
  {
    path: "/*",
    element: <div>404 Not Found</div>,
  },
]);
export default router;
