import { useNavigate } from "react-router-dom";
import { EColors } from "../util/enums/colors";
import { ERoute } from "../routing/RouteEnums";
import { PhoneOutlined, FacebookOutlined } from "@ant-design/icons";

export default function Footer() {
  const navigate = useNavigate();

  function navigateToVisit() {
    navigate(ERoute.VISIT);
  }
  function navigateToAboutUs() {
    navigate(ERoute.ABOUTUS);
  }
  function navigateToOurMembers() {
    navigate(ERoute.OURMEMBERS);
  }
  return (
    <footer className="h-9/12" style={{ backgroundColor: EColors.bggray }}>
      <div className="flex justify-center ">
        <div className="flex gap-96 mb-14">
          <div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex  mt-16">
                <img
                  className=""
                  src="/salemlogo.png"
                  alt="burning-bush-logo"
                />
                <div
                  className="self-center text-6xl"
                  style={{
                    fontFamily: "Merriweather",
                    color: EColors.gray,
                  }}
                >
                  SURZUA
                </div>
              </div>
              <div className="ml-5 text-2xl underline font-bold">
                <a href="mailto:salemunionrzua@gmail.com">
                  salemunionrzua@gmail.com
                </a>
              </div>

              <div className="ml-5 flex gap-2 text-xl">
                <div>
                  <PhoneOutlined />
                </div>
                (434) 577-9232
              </div>
              <div className="ml-5 ">
                <div className="font-bold">Address</div>

                <div>4265 Gasburg Road P.O. Box 363. Gasburg, VA 23857</div>
              </div>
            </div>
          </div>
          <div className="flex gap-20">
            <div className=" ">
              <div
                style={{ fontFamily: "Inter", fontWeight: "200" }}
                className="flex  mt-16 text-3xl mb-6 "
              >
                About us
              </div>
              <div className="grid grid-cols-1 gap-2 underline cursor-pointer">
                <div onClick={navigateToVisit}>Contact Us</div>
                <div onClick={navigateToAboutUs}>Our Goals</div>
                <div onClick={navigateToOurMembers}>Our Members</div>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Inter", fontWeight: "200" }}
                className="flex  mt-16 text-3xl mb-6 "
              >
                Media
              </div>
              <div className="flex justify-center text-3xl ">
                <a
                  href=" https://www.facebook.com/SalemUnionRZUA"
                  target="_blank"
                >
                  <FacebookOutlined />
                </a>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Inter", fontWeight: "200" }}
                className="flex  mt-16 text-3xl mb-6 "
              >
                Other
              </div>
              <div className="grid grid-cols-1 gap-2 underline cursor-pointer">
                Donate
              </div>
            </div>
            /
          </div>
        </div>
      </div>
    </footer>
  );
}
