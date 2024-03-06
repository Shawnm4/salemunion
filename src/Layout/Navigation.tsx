import { useNavigate } from "react-router-dom";
import { EColors } from "../util/enums/colors";
import PrimaryButton from "./AntComponents/PrimaryButton";
import { ERoute } from "../routing/RouteEnums";

export default function Navigation() {
  const navigate = useNavigate();

  function mouseEnter(e: any) {
    e.currentTarget.style.color = EColors.hover;
  }
  function mouseLeave(e: any) {
    e.currentTarget.style.color = "";
  }

  return (
    <nav
      style={{ zIndex: "1000" }}
      className="sticky bg-white top-0 flex h-36 justify-between"
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
      <ul className="flex gap-8 text-lg mr-40 items-center ">
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
        <li
          style={{ transition: "color 0.2s" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="cursor-pointer"
          onClick={() => navigate(ERoute.OURMEMBERS)}
        >
          Our Members
        </li>
        <li
          style={{ transition: "color 0.2s" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="cursor-pointer"
          onClick={() => navigate(ERoute.EVENTS)}
        >
          Events
        </li>
        <li
          style={{ transition: "color 0.2s" }}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="cursor-pointer"
          onClick={() => navigate(ERoute.GALLERY)}
        >
          Gallery
        </li>
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
  );
}
