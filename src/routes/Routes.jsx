import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
