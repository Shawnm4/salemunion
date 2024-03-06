import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main className="flex">
        <Content className="w-full ">
          <Outlet />
        </Content>
      </main>
    </>
  );
}
