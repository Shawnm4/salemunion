import { Button, Divider } from "antd";
import PrimaryButton from "./AntComponents/PrimaryButton";
import styles from "./Home.module.css";
import { EColors } from "../util/enums/colors";
export default function Home() {
  return (
    <div>
      <div style={{ height: "50rem" }}>
        <div className={styles.background}>
          <div
            style={{ fontWeight: "200", fontFamily: "Inter", color: "white" }}
            className="text-6xl"
          >
            Faith, Fellowship, and Service: Welcome to Salem Union
          </div>
          <article
            className=" text-xl"
            style={{ fontWeight: "100", color: "white" }}
          >
            <p>
              Salem Union in Gasburg, Va offers a place of worship and community
              since 1920. Join us Sundays at 11pm for services
              <p className="flex justify-center">
                that blend faith, fellowship, and service.
              </p>
            </p>
          </article>
          <div className="mt-20  ">
            <PrimaryButton className="w-40 h-11">Visit Us</PrimaryButton>
          </div>
        </div>
        <div className="" style={{ backgroundColor: EColors.bggray }}>
          <section className="flex justify-start ml-52  ">
            <div className="mt-36">
              <div className="flex gap-28">
                <img
                  className="w-96"
                  src="/firstpic.jpg"
                  alt="people-hugging"
                />
                <div className="grid grid-cols-1">
                  <div className="flex gap-4">
                    <p className=" text-4xl font-bold">Regular Service -</p>
                    <p style={{ fontWeight: "100" }} className=" text-4xl ">
                      Join us for service at 11am every Sunday
                    </p>
                  </div>
                  <div className="text-xl font-bold">
                    <em>Service is held on prayer line on 4th Sundays</em>
                  </div>
                  <div className="">
                    <div className="font-bold">Visit us here</div>
                    <div style={{ textDecoration: "underline" }} className="">
                      <a
                        href="https://www.google.com/maps/place/Salem+Union+RZUA+Church/@36.5673515,-77.8984712,17z/data=!3m1!4b1!4m6!3m5!1s0x89ae0717302eee5b:0xc392a35b7c8e986a!8m2!3d36.5673472!4d-77.8958963!16s%2Fg%2F1tjwjmcd?entry=ttu"
                        target="_blank"
                      >
                        4265 Gasburg Road P.O. Box 363. Gasburg, VA 23857
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Divider />
          <section className="flex justify-start ml-52  ">
            <div className="mt-36">
              <div className="flex gap-28">
                <img
                  className="w-96"
                  src="/sundayschool.jpg"
                  alt="people-hugging"
                />
                <div className="grid grid-cols-1">
                  <div className="flex gap-4">
                    <p className=" text-4xl font-bold">Sunday School -</p>
                    <p style={{ fontWeight: "100" }} className=" text-4xl ">
                      Sunday School is held every Sunday at 10am
                    </p>
                  </div>
                  <div className="text-xl font-bold">
                    <em>Sunday school is not held on 4th Sundays</em>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Divider />
          <section className="flex justify-start ml-52  ">
            <div className="mt-36">
              <div className="flex gap-28">
                <img
                  className="w-96"
                  src="/prayerline.jpg"
                  alt="people-hugging"
                />
                <div className="grid grid-cols-1">
                  <div className="">
                    <p className=" text-4xl font-bold">
                      Prayer Lines and Fourth Sunday Service
                    </p>
                    <p
                      style={{ fontWeight: "100" }}
                      className=" text-4xl mb-4 "
                    >
                      Prayer line is held on 4th Sundays at 11am and Friday
                      nights at 7pm
                    </p>
                    <div>To join the prayer line call 434-277-9565 </div>
                  </div>
                  <div className="text-xl font-bold">
                    <em>Sunday school is not held on 4th Sundays</em>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
