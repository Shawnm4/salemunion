import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";

export default function VisitUs() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="mt-24 ">
      <div className="flex justify-center gap-60 mb-16">
        <div className="">
          <div
            className="text-4xl mb-8"
            style={{ fontFamily: "Inter", fontWeight: "200" }}
          >
            Visit Us
          </div>
          <div className="text-1xl mb-8">
            Feel free to contact us if you have any concerns!
          </div>
          <div className="font-bold text-2xl mb-2">Email</div>
          <div style={{ fontWeight: "200" }} className="underline text-xl mb-8">
            <a href="mailto:salemunionrzua@gmail.com">
              salemunionrzua@gmail.com
            </a>
          </div>
          <div className="font-bold text-2xl mb-2">Phone</div>
          <div style={{ fontWeight: "200" }} className="text-xl mb-8">
            (434) 577-9232
          </div>
          <div className="font-bold text-2xl mb-2">Address</div>
          <div style={{ fontWeight: "200" }} className="underline text-xl mb-8">
            <a
              href="https://www.google.com/maps/place/Salem+Union+RZUA+Church/@36.5673515,-77.8984712,17z/data=!3m1!4b1!4m6!3m5!1s0x89ae0717302eee5b:0xc392a35b7c8e986a!8m2!3d36.5673472!4d-77.8958963!16s%2Fg%2F1tjwjmcd?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              4265 Gasburg Road P.O. Box 363. Gasburg, VA 23857
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <div className="mb-10 ">
              <img style={{ width: "30rem" }} src="map.png" alt="map" />
            </div>
            <div>
              <img style={{ width: "30rem" }} src="SALEM.png" alt="salem" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
