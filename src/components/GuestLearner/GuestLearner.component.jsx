import assets from "../../assets/assets";
import { Link } from "react-router-dom";
const GuestLearner = ({ learner }) => {
  return (
    <Link to={`/profile/${learner.id}`}>
      <div className="border-2 border-gray-400 w-64 h-64 m-10 rounded-lg p-4 overflow-hidden leading-relaxed transition ease-in duration-200 hover:scale-110 hover:bg-indigo-900 hover:text-white">
        <div className="flex gap-8 items-start">
          <img
            className="object-cover w-16 h-16 rounded-full inline-block"
            src={learner.image ? assets.avatar : assets.avatar}
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-medium">
              {learner.fullname}
              <span className="text-sm">({learner.username})</span>
            </span>
            <span className="text-sm">{learner.goal}</span>
          </div>
        </div>
        <div className="mt-3 ">
          <p>{learner.bio ? learner.bio : " Bio of the learner..."}</p>
        </div>
      </div>
    </Link>
  );
};

export default GuestLearner;
