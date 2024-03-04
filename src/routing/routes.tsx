import AboutUs from "../Layout/AboutUs";
import Home from "../Layout/Home";
import Layout from "../Layout/Layout";
import Navigation from "../Layout/Navigation";
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
        path: ERoute.MEMBERS,
        element: <div>Members</div>,
      },
      {
        path: ERoute.EVENTS,
        element: <div>Events</div>,
      },
      {
        path: ERoute.VISIT,
        element: <div>Visit</div>,
      },
    ],
  },
];
