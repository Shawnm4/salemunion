import { useNavigate } from "react-router-dom";
import { EColors } from "../../util/enums/EColors";
import PrimaryButton from "../AntComponents/PrimaryButton";
import { ERoute } from "../../routing/RouteEnums";
import { MenuOutlined } from "@ant-design/icons";

export default function Navigation() {
  const navigate = useNavigate();

  function mouseEnter(e: any) {
    e.currentTarget.style.color = EColors.hover;
  }
  function mouseLeave(e: any) {
    e.currentTarget.style.color = "";
  }

  return (
    <>
      <nav className="md:hidden text-black  ">
        <section className="flex justify-evenly mt-1">
          <div className="flex items-center  text-3xl">
            <MenuOutlined />
          </div>
          <div className="flex items-center justify-end">
            <img
              className="w-1/4 "
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
                <span style={{ color: "#e03131" }}> R.Z.U.A</span>
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
        className="hidden  md:flex justify-between items-center fixed w-full bg-white shadow-md"
      >
        <div
          onClick={() => navigate(ERoute.ROOT)}
          className=" flex ml-40 mt-10 cursor-pointer"
        >
          <div className="flex">
            <img className="" src="/salemlogo.png" alt="burning-bush-logo" />
          </div>
          <div className="flex items-center">
            <div>
              <h1
                className="text-4xl font-bold"
                style={{ fontFamily: "Merriweather", color: EColors.gray }}
              >
                SALEM UNION
              </h1>
              <div className="flex justify-center">
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
            onClick={() => navigate(ERoute.ROOT)}
          >
            Home
          </li>
          <li
            style={{ transition: "color 0.2s" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="cursor-pointer"
            onClick={() => navigate(ERoute.ABOUTUS)}
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
            onClick={() => navigate(ERoute.VISIT)}
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
