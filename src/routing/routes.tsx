import { RouteObject } from "react-router-dom";
import AboutUs from "../Layout/Pages/AboutUs";
import Events from "../Layout/Pages/Events";
import Gallery from "../Layout/Pages/Gallery";
import Home from "../Layout/Pages/Home";
import Layout from "../Layout/Pages/Layout";

import OurMembers from "../Layout/Pages/OurMembers";
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
        path: ERoute.OURMEMBERS,
        element: <OurMembers />,
      },
      {
        path: ERoute.EVENTS,
        element: <Events />,
      },
      {
        path: ERoute.VISIT,
        element: <VisitUs />,
      },
      {
        path: ERoute.GALLERY,
        element: <Gallery />,
      },
    ],
  },
];
