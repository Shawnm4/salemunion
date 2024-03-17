import { useLocation } from "react-router-dom";
import { EColors } from "../../util/enums/EColors";
import styles from "./AboutUs.module.css";
import Footer from "./Footer";
import { useEffect } from "react";

export default function AboutUs() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* Phone */}
      <main className="md:hidden">
        <div
          style={{ height: "13rem", fontFamily: "Inter" }}
          className={styles.backgroundfirst}
        >
          <p className="w-3/4 text-white text-xl">
            A welcoming beacon of faith and community, our church embraces all
            with open hearts and spiritual nourishment
          </p>
        </div>
        <p
          className="font-bold mt-10 text-2xl text-center p-4"
          style={{
            fontFamily: "Inter",
            fontWeight: "300",
            color: EColors.primary,
          }}
        >
          Come Celebrate Christ With Us
        </p>
        <article>
          <p style={{ fontFamily: "Inter" }} className="text-center mt-5 p-4">
            Welcome to Salem Union, where faith, love, and community meet.
            Guided by Hebrews 10:24-25, we open our doors to all, inviting you
            to join us in a journey of encouragement, growth, and shared love.
            Whether you're exploring faith or deepening your spiritual
            connection, you're home here.
          </p>
          <p style={{ fontFamily: "Inter" }} className="text-center mt-5 p-4">
            Our church thrives on Jesus Christ's teachings, fostering a space
            where transformative love and grace are experienced through worship,
            study, and fellowship. We're more than Sunday gatherings; we're a
            family, supporting and celebrating life together, committed to
            making a meaningful impact.
          </p>
          <p style={{ fontFamily: "Inter" }} className="text-center mt-5 p-4">
            With a variety of ministries and activities, we welcome everyone,
            offering diverse ways to connect, serve, and grow. Whether you're
            interested in social justice, Bible studies, or youth programs,
            there's a place for you in our community.
          </p>
          <p style={{ fontFamily: "Inter" }} className="text-center mt-5 p-4">
            Visit us this Sunday for a heartfelt welcome. Come as you are to
            find open arms and open hearts, ready to embrace and encourage each
            other in love and good deeds. Let's make a difference together.
          </p>
        </article>
        <div className="mt-5 ">
          <img
            className="rounded shadow-xl"
            src="/peopleoutside.jpg"
            alt="peoplestandingoutside"
          />
        </div>
        <div className="mt-5">
          <img
            className="rounded shadow-xl"
            src="/sundayschool.jpg"
            alt="peoplestandingoutside"
          />
        </div>
        <div className="mt-5">
          <img
            className="rounded shadow-xl"
            src="/communion.jpg"
            alt="peoplestandingoutside"
          />
        </div>
        <div
          className="font-bold mt-10 text-2xl text-center"
          style={{
            fontFamily: "Inter",
            fontWeight: "300",
            color: EColors.primary,
          }}
        >
          Our Goals!
        </div>
        <article>
          <section>
            <div
              className="text-center mt-5 p-4"
              style={{ fontFamily: "Inter" }}
            >
              Aim to deepen the congregation's faith and understanding of the
              Bible through regular study groups, retreats, and discipleship
              programs.
            </div>
            <div
              className="text-center mt-5 p-4"
              style={{ fontFamily: "Inter" }}
            >
              Establish and expand outreach programs to serve the local
              community's needs, such as food banks, homeless shelters, and
              support for vulnerable populations.
            </div>
            <div
              className="text-center mt-5 p-4"
              style={{ fontFamily: "Inter" }}
            >
              Ensure that the church is a place where everyone feels welcomed
              and valued, regardless of their background or life situation,
              fostering a sense of belonging and inclusivity.
            </div>
            <div
              className="text-center mt-5 p-4 "
              style={{ fontFamily: "Inter" }}
            >
              Develop engaging programs for children and youth that encourage
              their spiritual growth and build a strong, supportive community
              among young believers.
            </div>
            <div
              className="text-center mt-5 p-4"
              style={{ fontFamily: "Inter" }}
            >
              Encourage active participation and leadership within the church
              and the broader community, highlighting the importance of
              stewardship and the joy of serving others.
            </div>
            <div className=" mt-5">
              <img
                className="rounded shadow-xl"
                src="/about1.jpg"
                alt="familystanding"
              />
            </div>
            <div className=" mt-5">
              <img
                className="rounded shadow-xl"
                src="/about7.jpg"
                alt="familystanding"
              />
            </div>
            <div className=" mt-5">
              <img
                className="rounded shadow-xl"
                src="/about8.jpg"
                alt="familystanding"
              />
            </div>
          </section>
        </article>
        <Footer />
      </main>

      {/* Desktop */}
      <div className="hidden md:inline-block">
        <header className={styles.backgroundfirst}>
          <section className="h-96">
            <div
              style={{ fontFamily: "Inter", fontWeight: "200" }}
              className=" text-3xl h-full text-white flex justify-center items-center"
            >
              <article className="md:w-3/4">
                <p>
                  "And let us consider how we may spur one another on toward
                  <br></br>love and good deeds, not giving up meeting together,
                  as some are in the habit<br></br> of doing, but encouraging
                  one another—and all the more as you <br></br> see the Day
                  approaching."
                </p>
                <div className="flex justify-end">
                  <strong className="font-bold">- Hebrews 10:24-25</strong>
                </div>
              </article>
            </div>
          </section>
        </header>
        <main className="flex justify-center mt-40">
          <section>
            <div className="flex justify-center">
              <h1
                className="text-5xl mb-10"
                style={{
                  color: EColors.primary,
                  fontFamily: "Inter",
                  fontWeight: "200",
                }}
              >
                Come Celebrate Christ With Us
              </h1>
            </div>
            <p
              style={{ fontFamily: "Inter", fontWeight: "300" }}
              className="flex justify-center text-xl"
            >
              <article className="flex gap-4 w-1/2 justify-center">
                <p className="w-1/2">
                  Welcome to Salem Union, where faith, love, and community meet.
                  Guided by Hebrews 10:24-25, we open our doors to all, inviting
                  you to join us in a journey of encouragement, growth, and
                  shared love. Whether you're exploring faith or deepening your
                  spiritual connection, you're home here.
                </p>
                <p className="w-1/2">
                  Our church thrives on Jesus Christ's teachings, fostering a
                  space where transformative love and grace are experienced
                  through worship, study, and fellowship. We're more than Sunday
                  gatherings; we're a family, supporting and celebrating life
                  together, committed to making a meaningful impact.
                </p>
              </article>
            </p>
            <div
              style={{ fontFamily: "Inter", fontWeight: "300" }}
              className="flex justify-center mt-6 text-xl"
            >
              <article className="flex gap-4 w-1/2 justify-center">
                <p className="w-1/2">
                  With a variety of ministries and activities, we welcome
                  everyone, offering diverse ways to connect, serve, and grow.
                  Whether you're interested in social justice, Bible studies, or
                  youth programs, there's a place for you in our community.
                </p>
                <p className="w-1/2">
                  Visit us this Sunday for a heartfelt welcome. Come as you are
                  to find open arms and open hearts, ready to embrace and
                  encourage each other in love and good deeds. Let's make a
                  difference together.
                </p>
              </article>
            </div>
          </section>
        </main>
        <section className="mt-20" style={{ backgroundColor: EColors.bggray }}>
          <div className="flex justify-center ">
            <div className="mt-10">
              <div className="flex justify-between ">
                <div className="ml-20">
                  <h1
                    className="text-5xl mb-10"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "200",
                    }}
                  >
                    Salem Unions Goals
                  </h1>
                  <article className="grid grid-cols-1 gap-6">
                    <p className="w-1/2">
                      Aim to deepen the congregation's faith and understanding
                      of the Bible through regular study groups, retreats, and
                      discipleship programs.
                    </p>
                    <p className="w-1/2">
                      Establish and expand outreach programs to serve the local
                      community's needs, such as food banks, homeless shelters,
                      and support for vulnerable populations.
                    </p>
                    <p className="w-1/2">
                      Ensure that the church is a place where everyone feels
                      welcomed and valued, regardless of their background or
                      life situation, fostering a sense of belonging and
                      inclusivity.
                    </p>
                    <p className="w-1/2">
                      Develop engaging programs for children and youth that
                      encourage their spiritual growth and build a strong,
                      supportive community among young believers.
                    </p>
                    <p className="w-1/2 mb-10">
                      Encourage active participation and leadership within the
                      church and the broader community, highlighting the
                      importance of stewardship and the joy of serving others.
                    </p>
                  </article>
                </div>
                <div className="w-1/2">
                  <img
                    className="rounded shadow-xl"
                    src="/homebackground.jpg"
                    alt="church"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="  justify-center hidden lg:flex ">
          <div className="grid grid-cols-4 gap-2 grid-rows-2">
            <img
              className="rounded shadow-xl"
              style={{ height: "20rem", width: "20rem" }}
              src="about1.jpg"
              alt="wait"
            />
            <img
              className="rounded shadow-xl"
              style={{ height: "20rem", width: "20rem" }}
              src="about2.jpg"
              alt="wait"
            />
            <img
              className="rounded shadow-xl"
              style={{ height: "20rem", width: "20rem" }}
              src="about3.jpg"
              alt="wait"
            />
            <img
              className="rounded shadow-xl"
              style={{ height: "20rem", width: "20rem" }}
              src="about4.jpg"
              alt="wait"
            />
            <img
              className="rounded shadow-xl"
              style={{ height: "20rem", width: "20rem" }}
              src="about5.jpg"
              alt="wait"
            />
            <img
              className="rounded shadow-xl"
              style={{ height: "20rem", width: "20rem" }}
              src="about6.jpg"
              alt="wait"
            />
            <img
              className="rounded shadow-xl"
              style={{ height: "20rem", width: "20rem" }}
              src="about7.jpg"
              alt="wait"
            />
            <img
              className="rounded shadow-xl"
              style={{ height: "20rem", width: "20rem" }}
              src="about8.jpg"
              alt="wait"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
