import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { isAdmin, returnCurrentUser } from "../../services/cookie";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import assets from "../../assets/assets";

const DisplayLearner = ({ setEdit, learner }) => {
  const currentUser = returnCurrentUser();
  return (
    <>
      {/* Learner Image and Links */}
      <div className="border border-gray-300 rounded-lg py-2 px-6 bg-white">
        <div className="flex flex-col items-center  ">
          <div className="border-gray-600 border rounded-xl px-2 self-end">
            <p className="text-xs">{learner?.role}</p>
          </div>

          <img
            className="border border-gray-300 object-cover w-32 h-32 rounded-full  mt-2"
            src={assets.avatar || assets.avatar}
            alt="Profile of the Learner"
          />
          <div className="flex justify-around w-48">
            {learner.github && (
              <Link
                to={learner.github}
                className="p-1 rounded-lg hover:bg-gray-200"
                target="_blank"
              >
                <img src={assets.github} alt="GitHub Profile" />
              </Link>
            )}
            {learner.linkedin && (
              <Link
                to={learner.linkedin}
                className="p-1 rounded-lg hover:bg-gray-200"
                target="_blank"
              >
                <img src={assets.linkedin} alt="LinkedIn Profile" />
              </Link>
            )}
          </div>
        </div>
        {/* Learner Profile Data */}
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xl font-bold text-center py-3 border-b border-gray-400">
              {learner.fullname}
              <span> </span>
              <span></span>
              <span className="text-gray-600 text-sm">
                ({learner.username})
              </span>
              <span></span>
              <p className="font-semibold  text-base">{learner.goal}</p>
            </div>
            <div className="flex items-center gap-2 w-56 px-4 mb-2 border-b border-gray-400 py-4 font-semibold">
              <img src={assets.eye} alt="Profile Views Logo" />
              <p>{learner.views} views</p>
            </div>
            <div className="flex items-center gap-2 w-56 px-4 mb-2 border-gray-400 border-b py-4 font-semibold">
              <img src={assets.mail} alt="Mail Logo" />
              {learner.email}
            </div>
            <div className="flex items-center gap-2 w-56 px-4 mb-2 border-gray-400 border-b py-4 font-semibold">
              <img src={assets.date} alt="Date Logo" />
              {learner.birthdate}
            </div>
            <div className="flex items-center gap-2 w-56 px-4 mb-2 border-gray-400 border-b py-4 font-semibold">
              <img src={assets.pin} alt="City Logo" />
              {learner.city}
            </div>
            <div className="flex items-center gap-2 w-56 px-4 mb-2 border-gray-400 border-b py-4 font-semibold">
              <img src={assets.phone} alt="Phone Icon" />
              {learner.phone}
            </div>

            {learner.id === currentUser.id ? (
              <div className="flex justify-center m-4">
                <button
                  type="button"
                  className="flex items-center gap-2 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-800 rounded-lg px-4 py-2"
                  onClick={() => setEdit(true)}
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="text-sm font-semibold"
                  />
                  Edit Profile
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4 w-56 px-4 mb-2  py-4 font-semibold"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayLearner;
