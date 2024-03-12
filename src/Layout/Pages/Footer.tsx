import { useNavigate } from "react-router-dom";
import { EColors } from "../../util/enums/EColors";
import { ERoute } from "../../routing/RouteEnums";
import { PhoneOutlined, FacebookOutlined } from "@ant-design/icons";

export default function Footer() {
  const navigate = useNavigate();

  function navigateToVisit() {
    navigate(ERoute.VISIT);
  }
  function navigateToAboutUs() {
    navigate(ERoute.ABOUTUS);
  }

  return (
    <footer className="h-9/12" style={{ backgroundColor: EColors.bggray }}>
      <main className="flex justify-center ">
        <div className="flex gap-96 mb-14">
          <section>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex  mt-16">
                <img
                  className=""
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
                  4265 Gasburg Road P.O. Box 363. Gasburg, VA 23857
                </strong>
              </div>
            </div>
          </section>
          <section className="flex gap-20">
            <div className=" ">
              <div
                style={{ fontFamily: "Inter", fontWeight: "200" }}
                className="flex  mt-16 text-3xl mb-6 "
              >
                About us
              </div>
              <div className="grid grid-cols-1 gap-2 underline cursor-pointer">
                <p onClick={navigateToVisit}>Contact Us</p>
                <p onClick={navigateToAboutUs}>Our Goals</p>
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
            <div>
              <p
                style={{ fontFamily: "Inter", fontWeight: "200" }}
                className="flex  mt-16 text-3xl mb-6 "
              >
                Other
              </p>
              <p className="grid grid-cols-1 gap-2 underline cursor-pointer">
                Donate
              </p>
            </div>
            /
          </section>
        </div>
      </main>
    </footer>
  );
}
