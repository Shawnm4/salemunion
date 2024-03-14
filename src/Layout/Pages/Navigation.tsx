import { useNavigate } from "react-router-dom";
import { EColors } from "../../util/enums/EColors";
import PrimaryButton from "../AntComponents/PrimaryButton";
import { ERoute } from "../../routing/RouteEnums";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space, MenuProps } from "antd";

export default function Navigation() {
  const navigate = useNavigate();

  function mouseEnter(e: any) {
    e.currentTarget.style.color = EColors.hover;
  }
  function mouseLeave(e: any) {
    e.currentTarget.style.color = "";
  }

  function navigateToHome() {
    navigate(ERoute.ROOT);
  }

  function navigateToAboutUs() {
    navigate(ERoute.ABOUTUS);
  }
  function navigateToVisit() {
    navigate(ERoute.VISIT);
  }

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div onClick={navigateToHome}>Home</div>,
    },
    {
      key: "2",
      label: <div onClick={navigateToAboutUs}>About Us</div>,
    },
    {
      key: "3",
      label: <div onClick={navigateToVisit}>Visit Us</div>,
    },
    {
      key: "4",
      label: <div>Donate</div>,
    },
  ];

  return (
    <>
      <nav
        style={{ zIndex: "1000" }}
        className="lg:hidden text-black fixed  w-full  bg-white shadow-md "
      >
        <section className="flex justify-between mt-1 gap-14">
          <div className="flex items-center  text-3xl ">
            <Dropdown menu={{ items }} className="mb-2 ">
              <a>
                <Space>
                  <span className="ml-1 md:ml-5">
                    <MenuOutlined />
                  </span>
                </Space>
              </a>
            </Dropdown>
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
            <PrimaryButton>Donate</PrimaryButton>
          </li>
        </ul>
      </nav>
    </>
  );
}
