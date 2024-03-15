import { useNavigate } from "react-router-dom";
import { EColors } from "../../util/enums/EColors";
import PrimaryButton from "../AntComponents/PrimaryButton";
import { ERoute } from "../../routing/RouteEnums";
import { MenuOutlined } from "@ant-design/icons";
import { Space, Drawer } from "antd";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const onOpenDrawer = () => {
    setOpen(true);
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  function mouseEnter(e: any) {
    e.currentTarget.style.color = EColors.hover;
  }
  function mouseLeave(e: any) {
    e.currentTarget.style.color = "";
  }

  function navigateToHome() {
    navigate(ERoute.ROOT);
    onCloseDrawer();
  }

  function navigateToAboutUs() {
    navigate(ERoute.ABOUTUS);
    onCloseDrawer();
  }
  function navigateToVisit() {
    navigate(ERoute.VISIT);
    onCloseDrawer();
  }

  return (
    <>
      <nav
        style={{ zIndex: "1000" }}
        className="lg:hidden text-black fixed  w-full  bg-white shadow-md "
      >
        <>
          <Drawer
            style={{ width: "100%" }}
            title={
              <div>
                {" "}
                <div className="flex  ">
                  <img
                    className="w-20"
                    src="/salemlogo.png"
                    alt="salemunionlogo"
                  />
                  <div className="flex items-center">
                    <ul
                      style={{ fontFamily: "Merriweather" }}
                      className="flex gap-1 text-4xl "
                    >
                      <li style={{ color: EColors.primary }}>S</li>
                      <li style={{ color: EColors.primary }}>U</li>
                      <li style={{ color: EColors.gray }}>R</li>
                      <li style={{ color: EColors.gray }}>Z</li>
                      <li style={{ color: EColors.gray }}>U</li>
                      <li style={{ color: EColors.gray }}>A</li>
                    </ul>
                  </div>
                </div>
              </div>
            }
            onClose={onCloseDrawer}
            open={open}
          >
            <div className=" flex justify-center">
              <div className="text-4xl">
                <ul
                  style={{ fontFamily: "Inter" }}
                  className=" grid grid-cols-1 gap-5 "
                >
                  <li>
                    <div onClick={navigateToHome} className="cursor-pointer ">
                      Home
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={navigateToAboutUs}
                      className="cursor-pointer "
                    >
                      About Us
                    </div>
                  </li>

                  <li>
                    <div onClick={navigateToVisit} className="cursor-pointer ">
                      Visit Us
                    </div>
                  </li>
                  <li className="text-center ">
                    <PrimaryButton className="text-1xl h-16 w-40">
                      DONATE
                    </PrimaryButton>
                  </li>
                </ul>
              </div>
            </div>
          </Drawer>
        </>
        <section className="flex justify-between mt-1 gap-14">
          <div className="flex items-center  text-3xl ">
            <Space>
              <span className="ml-1 md:ml-5">
                <MenuOutlined onClick={onOpenDrawer} />
              </span>
            </Space>
          </div>
          <div className="hidden md:flex justify-center">
            <img
              className="w-1/2 "
              src="/salemlogo.png"
              alt="burning-bush-logo"
            />
          </div>
          <div className=" flex items-center ">
            <img
              className="w-1/4 md:hidden "
              src="/salemlogo.png"
              alt="burning-bush-logo"
            />
            <div>
              <strong
                style={{ fontFamily: "Merriweather", color: EColors.gray }}
              >
                SALEM UNION
              </strong>
              <div className="flex gap-1 " style={{ fontFamily: "Inter" }}>
                <span style={{ color: EColors.primary }}> R.Z.U.A</span>
                <div>CHURCH</div>
              </div>
            </div>
          </div>
        </section>
      </nav>
      {/* Desktop */}
      <nav
        style={{
          zIndex: "1000",
        }}
        className="hidden  lg:flex justify-between items-center fixed w-full h-44 bg-white shadow-md"
      >
        <div
          onClick={() => navigate(ERoute.ROOT)}
          className=" flex ml-40 mt-10 cursor-pointer mb-5   "
        >
          <div className="flex ">
            <img src="/salemlogo.png" alt="burning-bush-logo" />
          </div>
          <div className="flex items-center">
            <div>
              <h1
                className="text-4xl font-bold"
                style={{ fontFamily: "Merriweather", color: EColors.gray }}
              >
                SALEM UNION
              </h1>
              <div className=" md:justify-start flex justify-center">
                <h2
                  className="flex gap-2 text-2xl"
                  style={{ fontFamily: "Inter" }}
                >
                  <div style={{ color: EColors.primary }}>R.Z.U.A</div>
                  <div>CHURCH</div>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex gap-8 text-lg md:mr-40 items-center ">
          <li
            style={{ transition: "color 0.2s" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="cursor-pointer"
            onClick={navigateToHome}
          >
            Home
          </li>
          <li
            style={{ transition: "color 0.2s" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="cursor-pointer"
            onClick={navigateToAboutUs}
          >
            About Us
          </li>
          {/* <li
          style={{ transition: "color 0.2s" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="cursor-pointer"
          onClick={() => navigate(ERoute.OURMEMBERS)}
          >
          Our Members
        </li> */}
          {/* <li
          style={{ transition: "color 0.2s" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="cursor-pointer"
          onClick={() => navigate(ERoute.EVENTS)}
          >
          Events
        </li> */}
          {/* <li
          style={{ transition: "color 0.2s" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="cursor-pointer"
          onClick={() => navigate(ERoute.GALLERY)}
          >
          Gallery
        </li> */}
          <li
            style={{ transition: "color 0.2s" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="cursor-pointer"
            onClick={navigateToVisit}
          >
            Visit Us
          </li>
          <li>
            <PrimaryButton className="">Donate</PrimaryButton>
          </li>
        </ul>
      </nav>
    </>
  );
}
