import { Divider } from "antd";
import PrimaryButton from "../AntComponents/PrimaryButton";
import styles from "./Home.module.css";
import { EColors } from "../../util/enums/EColors";

import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { ERoute } from "../../routing/RouteEnums";
import { useEffect } from "react";
export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  function navigateToVisit() {
    navigate(ERoute.VISIT);
  }
  function navigateToAbout() {
    navigate(ERoute.ABOUTUS);
  }
  return (
    <>
      <div className=" md:hidden flex justify-center">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-6 ">
            <img src="/homebackground.jpg" alt="burning-bush-logo" />
            <article
              style={{
                fontFamily: "Inter",
                fontWeight: "300",
              }}
              className="text-center text-xl"
            >
              <p>"Welcome to our church family,</p>
              <p> where faith meets love, community, and support."</p>
            </article>
            <article
              style={{ fontFamily: "Inter", fontWeight: "300" }}
              className="text-center"
            >
              <p>
                Salem Union in Gasburg, Va offers a place of worship and
                community since 1920. Join us Sundays at 11pm for services
              </p>
            </article>
            <div className="text-center mb-10">
              <PrimaryButton className="w-1/2 " onClick={navigateToAbout}>
                About Us
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: EColors.bggray }}
        className=" flex md:hidden justify-center "
      >
        <div className="">
          <div className="flex justify-center">
            <img className="w-3/4 mt-10" src="/crowd2.jpg " alt=" crowd " />
          </div>
          <div style={{ fontFamily: "Inter" }} className="flex justify-center">
            <div className="mt-5 text-center">
              <strong className="text-xl">Regular Service -</strong>
              <span style={{ fontWeight: "300" }} className="text-xl">
                Join us for
              </span>
              <div style={{ fontWeight: "300" }} className="text-xl">
                {" "}
                service at 11am every Sunday!
              </div>
              <div className="mt-5">
                {" "}
                Each service is a spiritual journey, designed to connect you
                with the divine and the community.{" "}
              </div>

              <div className="mt-5">
                Begin your worship experience with us through uplifting music
                and songs. Our Choir leads us in a blend of contemporary and
                traditional hymns that prepare our hearts for receiving God's
                Word.
              </div>
              <div className="mt-5">
                Rev. Joreatha Barret delivers thought-provoking and
                soul-stirring messages based on Scripture These teachings aim to
                deepen your understanding of the Bible and apply its lessons to
                modern life.
              </div>
              <div className="text-xl font-bold mt-5">
                <em>Service is held on prayer line on 4th Sundays</em>
              </div>
              <div className=" mt-5">
                <PrimaryButton onClick={navigateToVisit} className="w-40 h-11">
                  Visit Us
                </PrimaryButton>
              </div>
              <Divider />
              <div className="mt-5 text-xl">
                <strong className="">Sunday School -</strong>
                <span style={{ fontWeight: "300" }}>
                  {" "}
                  is held every Sunday at 10am!
                </span>
              </div>
              <div className="mt-5">
                Designed for all ages, our Sunday School provides a warm,
                engaging environment where attendees can journey through faith
                together
              </div>

              <div className="mt-5">
                Our goal is to help each participant grow in their faith and
                understanding of God’s Word. Through biblical teachings, prayer,
                and reflection, students are encouraged to develop a deeper
                relationship with God and apply their faith to daily life.
              </div>
              <div className="mt-5">
                Sunday School at Salem Union is more than just learning; it’s
                about building connections. We foster a nurturing environment
                where students<br></br> support and learn from one another,
                forming lasting friendships grounded in faith.
              </div>
              <div className="text-xl font-bold mt-5">
                <em>Sunday school is not held on 4th Sundays</em>
              </div>
              <Divider />
              <div className="mt-5 text-xl">
                <strong className="">
                  Salem Union Prayer Lines and Fourth Sunday Service
                </strong>
              </div>
              <div className="mt-5">
                In today’s fast-paced world, finding time for faith and
                community can be a challenge. That’s why Salem Union, located in
                the heart of Gasburg,Virginia, is excited to offer our Cell
                Phone Church Service—a mobile spiritual experience designed for
                busy lives. Accessible from anywhere, our service allows you to
                engage in worship, prayer, and fellowship right from your phone,
                ensuring you stay connected to your faith on your schedule.{" "}
              </div>
              <div className="mt-5">
                <strong>
                  Prayer line is held on 4th Sundays at 11am and Friday nights
                  at 7pm
                </strong>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  height: "22rem",
                  textAlign: "center",
                  color: "white",
                }}
                className={styles.backgroundprayerline}
              >
                <em>
                  "Faith is not believing that God can, it's knowing that He
                  will."
                </em>
                <div>- Rev. Joreatha Barrett</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* Desktop */}
      <div className=" hidden 2xl:inline-block ">
        <div style={{ height: "50rem" }}>
          <article className={styles.background}>
            <h1
              style={{ fontWeight: "200", fontFamily: "Inter", color: "white" }}
              className="text-6xl"
            >
              Faith, Fellowship, and Service: Welcome to Salem Union
            </h1>
            <article
              className=" text-xl"
              style={{ fontWeight: "100", color: "white" }}
            >
              <p>
                Salem Union in Gasburg, Va offers a place of worship and
                community since 1920. Join us Sundays at 11pm for services
                <p className="flex justify-center">
                  that blend faith, fellowship, and service.
                </p>
              </p>
            </article>
            <div className="mt-20  ">
              <PrimaryButton onClick={navigateToVisit} className="w-40 h-11">
                Visit Us
              </PrimaryButton>
            </div>
          </article>
          <main className="" style={{ backgroundColor: EColors.bggray }}>
            <section className="flex justify-start ml-52  ">
              <div className="mt-20">
                <div className="flex gap-28">
                  <img
                    className="w-96"
                    src="/firstpic.jpg"
                    alt="people-hugging"
                  />
                  <article className="grid grid-cols-1">
                    <div className="flex gap-4">
                      <p className=" text-4xl font-bold">
                        <strong>Salem Unions Regular Service -</strong>
                      </p>
                      <p style={{ fontWeight: "100" }} className=" text-4xl ">
                        Join us for service at 11am every Sunday
                      </p>
                    </div>
                    <p>
                      Each service is a spiritual journey, designed to connect
                      you with the divine and the community.{" "}
                    </p>
                    <p>
                      Begin your worship experience with us through uplifting
                      music and songs. Our Choir leads us<br></br> in a blend of
                      contemporary and traditional hymns that prepare our hearts
                      for receiving God's Word.
                    </p>
                    <p>
                      Rev. Joreatha Barret delivers thought-provoking and
                      soul-stirring messages based on Scripture<br></br> These
                      teachings aim to deepen your understanding of the Bible
                      and apply its lessons to modern life.
                    </p>
                    <div className="text-xl font-bold">
                      <em>Service is held on prayer line on 4th Sundays</em>
                    </div>
                    <div className="">
                      <div className="font-bold">Visit us here</div>
                      <div style={{ textDecoration: "underline" }} className="">
                        <a
                          href="https://www.google.com/maps/place/Salem+Union+RZUA+Church/@36.5673515,-77.8984712,17z/data=!3m1!4b1!4m6!3m5!1s0x89ae0717302eee5b:0xc392a35b7c8e986a!8m2!3d36.5673472!4d-77.8958963!16s%2Fg%2F1tjwjmcd?entry=ttu"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <strong>
                            4265 Gasburg Road P.O. Box 363. Gasburg, VA 23857
                          </strong>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
            <Divider />
            <section className="flex justify-start ml-52  ">
              <article className="mt-20">
                <div className="flex gap-28">
                  <img
                    className="w-96"
                    src="/sundayschool.jpg"
                    alt="people-hugging"
                  />
                  <div className="grid grid-cols-1">
                    <div className="flex gap-4">
                      <p className=" text-4xl font-bold">
                        <strong>Sunday School -</strong>
                      </p>
                      <p style={{ fontWeight: "100" }} className=" text-4xl ">
                        Salem Unions Sunday School is held every Sunday at 10am
                      </p>
                    </div>
                    <p>
                      Designed for all ages, our Sunday School provides a warm,
                      engaging environment where attendees can journey through
                      faith together
                    </p>
                    <p>
                      Our goal is to help each participant grow in their faith
                      and understanding of God’s Word. Through biblical
                      teachings, prayer, and reflection,<br></br> students are
                      encouraged to develop a deeper relationship with God and
                      apply their faith to daily life.
                    </p>
                    <p>
                      {" "}
                      Sunday School at Salem Union is more than just learning;
                      it’s about building connections. We foster a nurturing
                      environment where students<br></br> support and learn from
                      one another, forming lasting friendships grounded in
                      faith.
                    </p>
                    <div className="text-xl font-bold">
                      <em>Sunday school is not held on 4th Sundays</em>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            <Divider />
            <section className="flex justify-start ml-52  ">
              <div className="mt-20 mb-10">
                <div className="flex gap-28">
                  <img
                    className="w-96 h-96"
                    src="/prayerline.jpg"
                    alt="people-hugging"
                  />
                  <div className="grid grid-cols-1">
                    <div className="">
                      <p className=" text-4xl font-bold">
                        <strong>
                          Salem Union Prayer Lines and Fourth Sunday Service
                        </strong>
                      </p>
                      <p className="mt-4">
                        In today’s fast-paced world, finding time for faith and
                        community can be a challenge. That’s why Salem Union,
                        <br></br>
                        located in the heart of Gasburg,Virginia, is excited to
                        offer our Cell Phone Church Service—a mobile spiritual
                        <br></br>
                        experience designed for busy lives. Accessible from
                        anywhere, our service allows you to engage in worship,
                        prayer,<br></br> and fellowship right from your phone,
                        ensuring you stay connected to your faith on your
                        schedule.
                      </p>
                      <p
                        style={{ fontWeight: "100" }}
                        className=" text-4xl mb-4 "
                      >
                        Prayer line is held on 4th Sundays at 11am and Friday
                        nights at 7pm
                      </p>
                    </div>
                    <div>To join the prayer line call 434-277-9565 </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <div
            style={{ height: "27rem", position: "relative", zIndex: 1 }}
            className="flex items-center  "
          >
            <div className={styles.backgroundfirst}></div>
            <div className={styles.backgroundsecond}></div>
            <div className={styles.backgroundthird}></div>
            {/* <img src="/communion.jpg" alt="communion" /> */}
            <div className="flex justify-center items-center w-full absolute z-10">
              <div className="text-4xl">
                <p style={{ fontWeight: "100", color: "white" }}>
                  <em>
                    "Faith is not believing that God can, it's knowing that He
                    will."
                  </em>
                </p>
                <div style={{ color: "white" }} className="flex justify-center">
                  <div>- Rev. Joreatha Barrett</div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
