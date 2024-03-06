import { EColors } from "../util/enums/colors";
import styles from "./AboutUs.module.css";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div>
      <div className={styles.backgroundfirst}>
        <div className="h-96">
          <div
            style={{ fontFamily: "Inter", fontWeight: "200" }}
            className=" text-3xl h-full text-white flex justify-center items-center"
          >
            <div>
              <div>
                "And let us consider how we may spur one another on toward
                <br></br>love and good deeds, not giving up meeting together, as
                some are in the habit<br></br> of doing, but encouraging one
                another—and all the more as you <br></br> see the Day
                approaching."
              </div>
              <div className="flex justify-end">
                <div className="font-bold">- Hebrews 10:24-25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-40">
        <div>
          <div className="flex justify-center">
            <div
              className="text-5xl mb-10"
              style={{
                color: EColors.primary,
                fontFamily: "Inter",
                fontWeight: "200",
              }}
            >
              Come Celebrate Christ With Us
            </div>
          </div>
          <div
            style={{ fontFamily: "Inter", fontWeight: "300" }}
            className="flex justify-center text-xl"
          >
            <div className="flex gap-4 w-1/2 justify-center">
              <div className="w-1/2">
                Welcome to Salem Union, where faith, love, and community meet.
                Guided by Hebrews 10:24-25, we open our doors to all, inviting
                you to join us in a journey of encouragement, growth, and shared
                love. Whether you're exploring faith or deepening your spiritual
                connection, you're home here.
              </div>
              <div className="w-1/2">
                Our church thrives on Jesus Christ's teachings, fostering a
                space where transformative love and grace are experienced
                through worship, study, and fellowship. We're more than Sunday
                gatherings; we're a family, supporting and celebrating life
                together, committed to making a meaningful impact.
              </div>
            </div>
          </div>
          <div
            style={{ fontFamily: "Inter", fontWeight: "300" }}
            className="flex justify-center mt-6 text-xl"
          >
            <div className="flex gap-4 w-1/2 justify-center">
              <div className="w-1/2">
                With a variety of ministries and activities, we welcome
                everyone, offering diverse ways to connect, serve, and grow.
                Whether you're interested in social justice, Bible studies, or
                youth programs, there's a place for you in our community.
              </div>
              <div className="w-1/2">
                Visit us this Sunday for a heartfelt welcome. Come as you are to
                find open arms and open hearts, ready to embrace and encourage
                each other in love and good deeds. Let's make a difference
                together.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20" style={{ backgroundColor: EColors.bggray }}>
        <div className="flex justify-center">
          <div className="mt-10">
            <div className="flex justify-between ">
              <div className="ml-20">
                <div
                  className="text-5xl mb-10"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "200",
                  }}
                >
                  Our Goals
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="w-1/2">
                    Aim to deepen the congregation's faith and understanding of
                    the Bible through regular study groups, retreats, and
                    discipleship programs.
                  </div>
                  <div className="w-1/2">
                    Establish and expand outreach programs to serve the local
                    community's needs, such as food banks, homeless shelters,
                    and support for vulnerable populations.
                  </div>
                  <div className="w-1/2">
                    Ensure that the church is a place where everyone feels
                    welcomed and valued, regardless of their background or life
                    situation, fostering a sense of belonging and inclusivity.
                  </div>
                  <div className="w-1/2">
                    Develop engaging programs for children and youth that
                    encourage their spiritual growth and build a strong,
                    supportive community among young believers.
                  </div>
                  <div className="w-1/2">
                    Encourage active participation and leadership within the
                    church and the broader community, highlighting the
                    importance of stewardship and the joy of serving others.
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <img src="/homebackground.jpg" alt="church" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-2 grid-rows-2">
          <img src="about1.jpg" alt="wait" />
          <img src="about2.jpg" alt="wait" />
          <img src="about3.jpg" alt="wait" />
          <img src="about4.jpg" alt="wait" />
          <img src="about5.jpg" alt="wait" />
          <img src="about6.jpg" alt="wait" />
          <img src="about7.jpg" alt="wait" />
          <img src="about8.jpg" alt="wait" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
