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
            be supported in upcoming months. If you want to get support from
            Organization, you can apply{" "}
            <u>
              {" "}
              <a
                href="https://example.com"
                style={{ color: "#4E46CE" }}
                className="font-bold"
              >
                here.
              </a>
            </u>
            <br />
            <br />
            <br />
            <span
              style={{ color: "#4E46CE", fontSize: "28px" }}
              className="font-bold"
            >
              What is Robust and Best?
            </span>
            <br />
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

        <div className="flex flex-col">
          <Lottie options={defaultOptions} height={250} width={250} />
          <Lottie
            options={defaultOptions1}
            height={250}
            width={250}
            style={{ paddingTop: "50px" }}
          />
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
