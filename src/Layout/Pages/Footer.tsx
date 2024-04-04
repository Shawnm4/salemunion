import { useNavigate } from "react-router-dom";
import { EColors } from "../../util/enums/EColors";
import { ERoute } from "../../routing/RouteEnums";
import {
  PhoneOutlined,
  FacebookOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const navigate = useNavigate();

  function navigateToVisit() {
    navigate(ERoute.VISIT);
  }
  function navigateToAboutUs() {
    navigate(ERoute.ABOUTUS);
  }
  function mouseEnter(e: any) {
    e.currentTarget.style.color = EColors.hover;
  }
  function mouseLeave(e: any) {
    e.currentTarget.style.color = "";
  }

  return (
    <>
      <footer className=" md:hidden pt-5" style={{ backgroundColor: "white" }}>
        <div className="ml-10">
          <div className="flex mb-8">
            <img className="w-20" src="/salemlogo.png" alt="salemunionlogo" />
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
          <a className="flex gap-2" href="mailto:salemunionrzua@gmail.com ">
            <MailOutlined />
            <strong className=" cursor-pointer underline">
              salemunionrzua@gmail.com
            </strong>
          </a>
          <a className="flex gap-2 mt-4" href="tel:434-577-9232">
            <PhoneOutlined />
            <strong>(434) 577-9232 </strong>
          </a>
          <div className="">
            <div className="mt-4">
              <strong>Address</strong>
              <div>
                <a
                  href="https://www.google.com/maps/place/Salem+Union+RZUA+Church/@36.5673515,-77.8984712,17z/data=!3m1!4b1!4m6!3m5!1s0x89ae0717302eee5b:0xc392a35b7c8e986a!8m2!3d36.5673472!4d-77.8958963!16s%2Fg%2F1tjwjmcd?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  4265 Gasburg Road Gasburg, VA 23857
                </a>
              </div>
            </div>
          </div>
          <div style={{ fontFamily: "Inter" }}>
            <div style={{ fontWeight: "200" }} className="text-3xl mt-10 mb-3">
              About Us
            </div>
            <div
              onClick={navigateToVisit}
              className=" cursor-pointer underline mb-3"
            >
              Contact Us
            </div>
            <div
              onClick={navigateToAboutUs}
              className=" cursor-pointer underline"
            >
              Our Goals
            </div>
          </div>
          <div style={{ fontFamily: "Inter" }}>
            <div style={{ fontWeight: "200" }} className="text-3xl mt-10 mb-3">
              Media
            </div>
            <div className="text-3xl ">
              <a
                href=" https://www.facebook.com/SalemUnionRZUA"
                target="_blank"
              >
                <FacebookOutlined />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/*  */}
      <footer
        className=" justify-center hidden  md:flex   "
        style={{ backgroundColor: EColors.bggray }}
      >
        <main className="flex justify-center ">
          <div className="flex gap-96 mb-12 ">
            <section>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex  mt-4">
                  <img
                    className="w-1/4"
                    src="/salemlogo.png"
                    alt="burning-bush-logo"
                  />
                  <h1
                    className="self-center text-6xl"
                    style={{
                      fontFamily: "Merriweather",
                      color: EColors.gray,
                    }}
                  >
                    <strong>SURZUA</strong>
                  </h1>
                </div>
                <p className="ml-5 text-2xl underline font-bold">
                  <a href="mailto:salemunionrzua@gmail.com">
                    <strong>salemunionrzua@gmail.com</strong>
                  </a>
                </p>

                <p className="ml-5 flex gap-2 text-xl">
                  <div>
                    <PhoneOutlined />
                  </div>
                  (434) 577-9232
                </p>
                <div className="ml-5 ">
                  <div className="font-bold">Address</div>

                  <strong>
                    4265 Gasburg Road P.O. Box 383. Gasburg, VA 23857
                  </strong>
                </div>
              </div>
            </section>
            <section>
              <div className="flex gap-20">
                <div className=" ">
                  <div
                    style={{ fontFamily: "Inter", fontWeight: "200" }}
                    className="flex  mt-16 text-3xl mb-6 "
                  >
                    About us
                  </div>
                  <div className="grid grid-cols-1 gap-2 underline cursor-pointer">
                    <p
                      onMouseEnter={mouseEnter}
                      onMouseLeave={mouseLeave}
                      onClick={navigateToVisit}
                    >
                      Contact Us
                    </p>
                    <p
                      onMouseEnter={mouseEnter}
                      onMouseLeave={mouseLeave}
                      onClick={navigateToAboutUs}
                    >
                      Our Goals
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    style={{ fontFamily: "Inter", fontWeight: "200" }}
                    className="flex  mt-16 text-3xl mb-6 "
                  >
                    Media
                  </p>
                  <div className="flex justify-center text-3xl ">
                    <a
                      href=" https://www.facebook.com/SalemUnionRZUA"
                      target="_blank"
                    >
                      <FacebookOutlined />
                    </a>
                  </div>
                </div>
                {/* <div>
                  <p
                    style={{ fontFamily: "Inter", fontWeight: "200" }}
                    className="flex  mt-16 text-3xl mb-6 "
                  >
                    Other
                  </p>
                  <p className="grid grid-cols-1 gap-2 underline cursor-pointer">
                    Donate
                  </p>
                </div> */}
              </div>
            </section>
          </div>
        </main>
      </footer>
    </>
  );
}
