import study from "../../assets/first.json";
import student from "../../assets/second1.json";
import Lottie from "react-lottie";

const AboutUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: study,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: student,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lists = [
    {
      text: " Data-impact - Making social impact using the data and technology",
    },
    {
      text: "  Robuster - Providing services and products with the research and development",
    },
  ];
  return (
    <div className="z-0 h-[80vh] overflow-y-auto " style={{ fontSize: "18px" }}>
      <div className="grid lg:grid-cols-2 grid-cols-1 p-16">
        <div className="flex flex-col leading-10">
          <p>
            <span
              style={{ color: "#4E46CE", fontSize: "20px" }}
              className="font-bold"
            >
              Earn To Learn program
            </span>{" "}
            is a program supported by &nbsp;
            <u>
              <a href="https://robust.best">
                <span
                  style={{ color: "#4E46CE", fontSize: "20px" }}
                  className="font-bold"
                >
                  Robust and Best
                </span>
              </a>
            </u>
            &nbsp;Organization,started at October/1/2022. A total of 3 students
            have been supported for four month terms. More students are going to
            be supported in upcoming months.
            <br />
            <br />
            <br />
            <h2
              style={{ color: "#4E46CE", fontSize: "22px" }}
              className="font-bold"
            >
              Requirement and Expectations
            </h2>
            <p>
              You MUST,
              <br />- Be a lifelong learner <br />- Need assistance in financial
              and/or learning materials <br />- Be able to read/listen lectures
              and instructions in English <br />- Not be in association with any
              of human rights oppression groups <br />- Be in Myanmar while
              applying for this program <br />- Commit to learn and develop
              24~60 hours a week Our expectation, <br />- Make impact for
              both/either Robust & Best and/or the community <br />- To support
              the organization needs during the term, but it is voluntary.
            </p>
            <h2
              style={{ color: "#4E46CE", fontSize: "22px", marginTop: "35px" }}
              className="font-bold"
            >
              How To Apply?
            </h2>
            <p>
              If you are interested, send an email to alex@robust.best with the
              following information,
              <br /> - Introduction to yourself <br />- Topic/field of interest
              <br /> - Previous learning experience (prefer self-paced learning)
              <br /> - What assistance you need and why
              <br />
              We are sorry that we can only provide
              <br />
              STEM (Science, Technology, Engineering, and Mathematics) learners
              during the initiation process.
              <br />
              We are expected to provide more topics in the future. <br />
              Follow our Facebook page or subscribe to our newsletters on the
              website{" "}
              <u>
                <a href="https://robust.best">robust&best</a>
              </u>{" "}
              for future updates. A total of 2~4 learners will be chosen for
              this program with 4 months terms. There is no guarantee that the
              learner will be employed or not by Robust & Best after the term.
              There is a potential for the continuation after 4 months but it
              will certainly depend on the organization funding and the learner
              motivation. Robust & Best is not associating with any organization
              for this program (yet). By applying in this program, you are
              agreeing to Robust & Best’s {""}
              <u>
                {" "}
                <a href="https://robust.best/legal/policy">privacy policy</a>
              </u>{" "}
              .
            </p>
            <br />
            <br />
            <span
              style={{ color: "#4E46CE", fontSize: "28px" }}
              className="font-bold"
            >
              What is Robust and Best?
            </span>
            <br />
            Robust and Best bring technological advancement in NLP (Natural
            Language Processing) and CV (Computer Vision).
            <br /> Robust and Best is working on two main programs.
            <ol type="square">
              {lists.map((list) => (
                <li key="1">{list.text}</li>
              ))}
            </ol>
            Robust and Best was founded in 2019 to strengthen technological
            development in Myanmar. R&B was later working on two main programs
            to achieve the primary objective, making impact, wtih substainable
            business model.
          </p>
        </div>

        <div className="flex flex-col pl-48">
          {/* <Lottie
            options={defaultOptions1}
            height={250}
            width={250}
            style={{ paddingTop: "50px" }}
          /> */}
          <iframe
            src="https://embed.lottiefiles.com/animation/67934"
            width={250}
            height={250}
            style={{ marginLeft: "50px" }}
          ></iframe>
          <iframe
            src="https://embed.lottiefiles.com/animation/67928"
            width={250}
            height={250}
            style={{ marginLeft: "50px" }}
          ></iframe>
          <iframe
            src="https://embed.lottiefiles.com/animation/79960"
            width={250}
            height={250}
            style={{ marginLeft: "50px" }}
          ></iframe>
        </div>
      </div>
      <div
        className="container "
        style={{ marginLeft: "auto", marginTop: "50px" }}
      ></div>
      <div>
        <video autoplay controls>
          <source src="https://storage.googleapis.com/rnb-assets/intro.mp4" />
        </video>
      </div>
    </div>
  );
};
export default AboutUs;
