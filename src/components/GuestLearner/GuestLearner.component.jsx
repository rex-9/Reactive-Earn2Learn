import assets from "../../assets/assets";
import { Link } from "react-router-dom";
const GuestLearner = ({ learner }) => {
  return (
    <Link to={`/profile/${learner.id}`}>
      <div className="border-2 border-white w-80 h-40 ml-12 mr-12 mt-5 mb-5 rounded-lg p-3 overflow-hidden leading-relaxed">
        <div className="flex">
          <img
            className="object-cover w-12 h-12 rounded-full inline-block"
            src={learner.image ? assets.avatar : assets.avatar}
            alt=""
          />
          <div className="pl-3 flex flex-col">
            <span>{learner.fullname}</span>
            <span>{learner.goal}</span>
          </div>
        </div>
        <div className="mt-5">
          <p>{learner.bio ? learner.bio : "Bio of the learner"}</p>
        </div>
      </div>
    </Link>
  );
};

export default GuestLearner;
