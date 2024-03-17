import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";
import { FacebookOutlined } from "@ant-design/icons";

export default function VisitUs() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/*Phone  */}
      <main className=" lg:hidden  ml-8 mt-16">
        <div
          style={{ fontFamily: "Inter", fontWeight: "200" }}
          className="text-3xl"
        >
          Visit Us
        </div>
        <p className="text-1xl mt-8">
          Feel free to contact us if you have any concerns!
        </p>
        <div className="text-xl font-bold mt-8">Email</div>
        <div>
          <p
            style={{ fontFamily: "Inter", fontWeight: "200" }}
            className=" underline "
          >
            <a href="mailto:salemunionrzua@gmail.com">
              <strong>salemunionrzua@gmail.com</strong>
            </a>
          </p>
        </div>
        <div className="text-xl font-bold mt-8">Phone</div>
        <div>
          <p
            style={{ fontFamily: "Inter", fontWeight: "200" }}
            className=" underline "
          >
            <a href="tel:434-577-9232">
              <strong>(434) 577-9232</strong>
            </a>
          </p>
        </div>
        <div className="text-xl font-bold mt-8">Address</div>
        <div>
          <p
            style={{ fontFamily: "Inter", fontWeight: "200" }}
            className=" underline "
          >
            <a
              href="https://www.google.com/maps/place/Salem+Union+RZUA+Church/@36.5673515,-77.8984712,17z/data=!3m1!4b1!4m6!3m5!1s0x89ae0717302eee5b:0xc392a35b7c8e986a!8m2!3d36.5673472!4d-77.8958963!16s%2Fg%2F1tjwjmcd?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <strong>4265 Gasburg Road Gasburg, VA 23857</strong>
            </a>
          </p>
        </div>
        <div className="text-3xl mt-5 ">
          <a href=" https://www.facebook.com/SalemUnionRZUA" target="_blank">
            <FacebookOutlined />
          </a>
        </div>
      </main>
      <div className="flex justify-center mt-8 lg:hidden">
        <img className="rounded shadow-xl w-11/12" src="map.png" alt="gpsmap" />
      </div>
      <div className="flex justify-center mt-8 mb-8 lg:hidden">
        <img
          className="w-11/12 rounded shadow-xl"
          src="SALEM.png"
          alt="gpsmap"
        />
      </div>
      <div className="lg:hidden">
        <Footer />
      </div>

      {/* Desktop */}
      <div className=" mt-24 hidden lg:block ">
        <main className="flex justify-center gap-60 mb-16">
          <section className="ml-10">
            <p
              className="text-4xl mb-8"
              style={{ fontFamily: "Inter", fontWeight: "200" }}
            >
              Visit Salem Union
            </p>
            <p className="text-1xl mb-8">
              Feel free to contact us if you have any concerns!
            </p>
            <div className="font-bold text-2xl mb-2">Email</div>
            <p style={{ fontWeight: "200" }} className="underline text-xl mb-8">
              <a href="mailto:salemunionrzua@gmail.com">
                salemunionrzua@gmail.com
              </a>
            </p>
            <div className="font-bold text-2xl mb-2">Phone</div>
            <p style={{ fontWeight: "200" }} className="text-xl mb-8">
              (434) 577-9232
            </p>
            <div className="font-bold text-2xl mb-2">Address</div>
            <p style={{ fontWeight: "200" }} className="underline text-xl mb-8">
              <a
                href="https://www.google.com/maps/place/Salem+Union+RZUA+Church/@36.5673515,-77.8984712,17z/data=!3m1!4b1!4m6!3m5!1s0x89ae0717302eee5b:0xc392a35b7c8e986a!8m2!3d36.5673472!4d-77.8958963!16s%2Fg%2F1tjwjmcd?entry=ttu"
                target="_blank"
                rel="noreferrer"
              >
                4265 Gasburg Road P.O. Box 383. Gasburg, VA 23857
              </a>
            </p>
          </section>

          <div className="flex justify-center">
            <div>
              <div className="mb-10 ">
                <img
                  className="rounded shadow-xl"
                  style={{ width: "30rem" }}
                  src="map.png"
                  alt="map"
                />
              </div>
              <div>
                <img
                  className="shadow-xl rounded"
                  style={{ width: "30rem" }}
                  src="SALEM.png"
                  alt="salem"
                />
              </div>
            </div>
          </div>
        </main>
        <div style={{ backgroundColor: "white" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
