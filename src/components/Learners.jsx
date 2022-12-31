import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLearners } from "../redux/reducers/learnerXer";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import assets from "../assets/assets";
import Loading from "./loading/loading.component";

const Learners = () => {
  const learners = useSelector((state) => state.learners);
  const dispatch = useDispatch();
  const loadingCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    dispatch(fetchLearners());
  }, [dispatch]);

  return (
    <section className="flex flex-wrap justify-center">
      {learners.length <= 0 ? loadingCount.map((loading) => <Loading />) : null}
      {learners.map((learner) => (
        <Link to={`/profile/${learner.id}`}>
          <div
            key={learner.id}
            className="transition ease-linear py-2 m-2 h-fit bg-white hover:bg-slate-200  border-2 border-gray-300 rounded-lg w-80"
          >
            <div className="flex px-6">
              <img
                className="object-cover w-24 h-24 rounded-full"
                src={learner.image ? learner.image : assets.avatar}
                alt=""
              />
              <div className="font-qs pl-2 pt-2">
                <p className="text-btn font-bold text-xl">{learner.username}</p>
                <p>{learner.goal}</p>
              </div>
            </div>
            <p className="text-center py-2">{learner.catchphrase}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Learners;
