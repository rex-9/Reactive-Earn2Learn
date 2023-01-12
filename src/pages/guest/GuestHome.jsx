import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./GuestHome.styles.css";
import { useDispatch, useSelector } from "react-redux";
// import Lottie from "react-lottie";
// import hero from "../../assets/hero.json";
import { fetchLearners } from "../../redux/reducers/learnerXer";
import GuestLearner from "../../components/GuestLearner/GuestLearner.component";
// import Loading from "../../components/loading/loading.component";
import student from "../../assets/second1.json";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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
    <div className=" overflow-y-auto ">
      <div className="flex flex-col font-qs items-center">
        <div className="grid  grid-cols-2 w-5/6 m-16">
          <div className="col-span-1 ">
            <span
              style={{
                color: "#4E46CE",
                fontSize: "2rem",
              }}
              className="font-extrabold"
            >
              Earn To Learn
            </span>
            <span className="leading-relaxed text-lg">
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

          <div>
            <img src={assets.undraw} alt="undraw" />
          </div>
        </div>

        <div className="border border-gray-300 p-6 w-[85%] bg-white  mb-6 rounded-lg">
          <p className="font-bold text-lg mb-4">Recent Students</p>
          <div className="flex scrollremove justify-center items-center gap-6">
            {/* {learners.length <= 0
                ? loadingCount.map((loading) => <Loading />)
                : null} */}
            <div>
              <img
                src={assets.backward}
                className={`w-8 h-8 ${startIndex == 0 ? "hidden" : "visible"}`}
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

          <div className="flex justify-end mx-6">
            <Link to="/dashboard">
              <button className="bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 px-6 rounded-lg">
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
