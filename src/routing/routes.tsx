import { RouteObject } from "react-router-dom";
import AboutUs from "../Layout/Pages/AboutUs";

import Home from "../Layout/Pages/Home";
import Layout from "../Layout/Pages/Layout";
import VisitUs from "../Layout/Pages/VisitUs";
import { ERoute } from "./RouteEnums";

export const routes: RouteObject[] = [
  {
    path: ERoute.ROOT,
    element: <Layout />,
    children: [
      {
        path: ERoute.ROOT,
        element: <Home />,
      },
      {
        path: ERoute.ABOUTUS,
        element: <AboutUs />,
      },

      {
        path: ERoute.VISIT,
        element: <VisitUs />,
      },
    ],
  },
];
