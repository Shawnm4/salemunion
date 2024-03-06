import AboutUs from "../Layout/AboutUs";
import Events from "../Layout/Events";
import Gallery from "../Layout/Gallery";
import Home from "../Layout/Home";
import Layout from "../Layout/Layout";

import OurMembers from "../Layout/OurMembers";
import VisitUs from "../Layout/VisitUs";
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
