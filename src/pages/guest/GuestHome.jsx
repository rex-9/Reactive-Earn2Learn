import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./GuestHome.styles.css";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "react-lottie";
import hero from "../../assets/hero.json";
import { fetchLearners } from "../../redux/reducers/learnerXer";
import GuestLearner from "../../components/GuestLearner/GuestLearner.component";
import Loading from "../../components/loading/loading.component";
import student from "../../assets/second1.json";
const GuestHome = () => {
  const learners = useSelector((state) => state.learners);
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const loadingCount = [{}, {}, {}];

  useEffect(() => {
    dispatch(fetchLearners());
  }, [dispatch]);

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: student,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-[80vh] overflow-y-auto">
      <div className="flex flex-col font-qs">
        <div className="grid  grid-cols-2 md:grid-cols-3">
          <div className="col-span-2 p-28 pl-12 ">
            <span
              style={{
                color: "#4E46CE",
                fontSize: "1.8rem",
              }}
              className="font-bold"
            >
              Earn To Learn
            </span>
            <span className="leading-relaxed">
              &nbsp;is the program to support lifelong learners in Myanmar those
              in need of financial and/or learning materials (both hardware and
              subscription). <br /> <br />
              We will provide
              <br />
              - Financial support up to 250,000 MMK a month <br />
              - Learning materials worth up to 50 USD a month
              <br /> - A chance to make impact with our organization
            </span>
          </div>

          <div className="pt-14">
            {/* <Lottie
              options={defaultOptions1}
              height={250}
              width={250}
              style={{ paddingTop: "50px" }}
            /> */}
            {/* <Lottite src="https://lottiefiles.com/67934-studyly" /> */}
            <iframe
              src="https://embed.lottiefiles.com/animation/67934"
              width={250}
              height={250}
            ></iframe>
          </div>
        </div>

        <div className="bg-gray-200 p-4  m-8 rounded-lg">
          <span className="font-bold text-lg">Recent Students</span>
          <div>
            <div className="overflow-x-auto flex scrollremove justify-center">
              {learners.length <= 0
                ? loadingCount.map((loading) => <Loading />)
                : null}
              <div className="py-20">
                <img
                  src={assets.backward}
                  className={`w-8 h-8 ${
                    startIndex == 0 ? "hidden" : "visible"
                  }`}
                  onClick={() => {
                    const newStart = startIndex - 3;
                    const newEnd = endIndex - 3;
                    if (newStart < 0) {
                      setStartIndex(0);
                      setEndIndex(3);
                    } else {
                      setStartIndex(newStart);
                      setEndIndex(newEnd);
                    }
                  }}
                />
              </div>

              {learners.slice(startIndex, endIndex).map((learner) => (
                <GuestLearner learner={learner} />
              ))}
              <div className="py-20">
                <img
                  src={assets.forward}
                  className={`w-8 h-8  ${
                    startIndex + 3 < learners.length ? "visible" : "hidden"
                  }`}
                  onClick={() => {
                    const newStart = startIndex + 3;
                    const newEnd = endIndex + 3;
                    if (newStart < learners.length) {
                      setStartIndex(newStart);
                      setEndIndex(newEnd);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end ">
            <Link to="/all">
              <button
                className="text-white px-6 py-3 rounded-lg"
                style={{ backgroundColor: "#4E46CE" }}
              >
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestHome;
