import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Use Vite's BASE_URL which is automatically set from vite.config.js base option
// Remove trailing slash for router basename
const basePath = import.meta.env.BASE_URL || "/hamdy-portofolio/";
const basename = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ],
  { basename }
);
