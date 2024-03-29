import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routing/routes";

export default function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
