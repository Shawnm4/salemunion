import { Button, Divider } from "antd";
import PrimaryButton from "./AntComponents/PrimaryButton";
import styles from "./Home.module.css";
import { EColors } from "../util/enums/colors";
import { PhoneOutlined, FacebookOutlined } from "@ant-design/icons";
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
            <div className="mt-20">
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
                  <p>
                    Each service is a spiritual journey, designed to connect you
                    with the divine and the community.{" "}
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
                    teachings aim to deepen your understanding of the Bible and
                    apply its lessons to modern life.
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
            <div className="mt-20">
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
                  <p>
                    Designed for all ages, our Sunday School provides a warm,
                    engaging environment where attendees can journey through
                    faith together
                  </p>
                  <p>
                    Our goal is to help each participant grow in their faith and
                    understanding of God’s Word. Through biblical teachings,
                    prayer, and reflection,<br></br> students are encouraged to
                    develop a deeper relationship with God and apply their faith
                    to daily life.
                  </p>
                  <p>
                    {" "}
                    Sunday School at Salem Union is more than just learning;
                    it’s about building connections. We foster a nurturing
                    environment where students<br></br> support and learn from
                    one another, forming lasting friendships grounded in faith.
                  </p>
                  <div className="text-xl font-bold">
                    <em>Sunday school is not held on 4th Sundays</em>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Divider />
          <section className="flex justify-start ml-52  ">
            <div className="mt-20">
              <div className="flex gap-28">
                <img
                  className="w-96 h-96"
                  src="/prayerline.jpg"
                  alt="people-hugging"
                />
                <div className="grid grid-cols-1">
                  <div className="">
                    <p className=" text-4xl font-bold">
                      Prayer Lines and Fourth Sunday Service
                    </p>
                    <p className="mt-4">
                      In today’s fast-paced world, finding time for faith and
                      community can be a challenge. That’s why [Church Name],
                      <br></br>
                      located in the heart of [City/Community Name], is excited
                      to offer our Cell Phone Church Service—a mobile spiritual
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
        </div>
        <div className="flex">
          <img src="/communion.jpg" alt="communion" />
          <div style={{}} className="flex justify-center items-center w-full ">
            <div className="text-3xl">
              <p style={{ fontWeight: "100" }}>
                <em>
                  "Faith is not believing that God can, it's knowing that He
                  will."
                </em>
              </p>
              <div className="flex justify-center">
                <div>- Rev. Joreatha Barrett</div>
              </div>
            </div>
          </div>
        </div>
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
                    <div>Contact Us</div>
                    <div>Our Goals</div>
                    <div>Our Members</div>
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
                    <FacebookOutlined />
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
      </div>
    </div>
  );
}
