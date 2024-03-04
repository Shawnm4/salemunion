import { useNavigate } from "react-router-dom";
import { EColors } from "../util/enums/colors";
import PrimaryButton from "./AntComponents/PrimaryButton";
import { ERoute } from "../routing/RouteEnums";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <nav
      style={{ zIndex: "1000" }}
      className="sticky bg-white top-0 flex h-36 justify-between"
    >
      <div className=" flex ml-40 mt-10">
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
      <ul className="flex gap-8 text-lg mr-40 items-center">
        <li onClick={() => navigate(ERoute.ROOT)}>Home</li>
        <li onClick={() => navigate(ERoute.ABOUTUS)}>About Us</li>
        <li>Our Members</li>
        <li>Events</li>
        <li>Gallery</li>
        <li>Visit Us</li>
        <li>
          <PrimaryButton>Donate</PrimaryButton>
        </li>
      </ul>
    </nav>
  );
}
