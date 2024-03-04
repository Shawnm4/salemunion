import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routing/routes";
import { ConfigProvider } from "antd";

export default function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
