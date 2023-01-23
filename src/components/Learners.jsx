import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLearners } from "../redux/reducers/learnerXer";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import assets from "../assets/assets";
// import Loading from "./loading/loading.component";

const Learners = () => {
  const learners = useSelector((state) => state.learners);
  const dispatch = useDispatch();
  // const loadingCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    dispatch(fetchLearners());
  }, [dispatch]);

  return (
    <section className="flex flex-wrap justify-center max-h-[350px] overflow-y-auto overscroll-contain">
      {/* {learners.length <= 0 ? loadingCount.map((loading) => <Loading />) : null} */}
      {learners.map((learner) => (
        <Link to={`/profile/${learner.id}`}>
          <div
            className="  w-72 h-72 m-4 rounded-lg p-4 overflow-hidden leading-relaxed transition ease-in duration-200 hover:scale-105 hover:bg-gray-100 border border-black
    border-opacity-5 hover:border-opacity-10"
          >
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <img
                  className=" rounded-full object-cover w-20 h-20"
                  src={learner.image ? assets.avatar : assets.avatar}
                  alt=""
                />
              </div>

              <div className="col-span-2 ml-2">
                <p className="font-semibold flex items-center flex-wrap">
                  {learner.fullname}
                  <p className="text-sm text-gray-500">({learner.username})</p>
                </p>
                <span className="text-xs font-medium border rounded-xl text-center px-2 py-1 mt-2">
                  {learner.goal}
                </span>
              </div>
            </div>
            <div className="mt-4 bg-bg border h-[150px]  rounded-lg p-2 overflow-hidden">
              <p className="text-sm text-medium">
                {learner.bio ? learner.bio : " Bio of the learner..."}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Learners;
