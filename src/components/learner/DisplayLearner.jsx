import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { isAdmin, returnCurrentUser } from '../../services/cookie';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import assets from '../../assets/assets';

const DisplayLearner = ({
  setEdit, learner,
}) => {
  const currentUser = returnCurrentUser();
  return (
    <>
      {/* Learner Image and Links */}
      <div className="flex flex-col items-center">
        <p className="flex justify-end w-full">{learner.role}</p>
        <img className="object-cover w-48 h-48 rounded-full pb-2" src={learner.image || assets.avatar} alt="Profile of the Learner" />
        <div className="flex justify-around w-48">
          {
            learner.github
            && (
              <Link to={learner.github} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                <img src={assets.github} alt="GitHub Profile" />
              </Link>
            )
          }
          {
            learner.linkedin
            && (
              <Link to={learner.linkedin} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                <img src={assets.linkedin} alt="LinkedIn Profile" />
              </Link>
            )
          }
        </div>
      </div>
      {/* Learner Profile Data */}
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xl font-bold text-center py-4">
            {learner.fullname}
            <span> </span>
            <span>(</span>
            <span className="text-gray-600 text-base">{learner.username}</span>
            <span>)</span>
            <p className="font-bold text-gray-800 text-base">{learner.goal}</p>
          </div>
          <div className="flex items-center gap-4 w-56 px-8 mb-2 border-gray-400 border-b-2 py-2 font-bold">
            <img src={assets.eye} alt="Profile Views Logo" />
            <p>{learner.views} views</p>
          </div>
          <div className="flex items-center gap-4 w-56 px-8 mb-2 border-gray-400 border-b-2 py-2 font-bold">
            <img src={assets.mail} alt="Mail Logo" />
            {learner.email}
          </div>
          <div className="flex items-center gap-4 w-56 px-8 mb-2 border-gray-400 border-b-2 py-2 font-bold">
            <img src={assets.date} alt="Date Logo" />
            {learner.birthdate}
          </div>
          <div className="flex items-center gap-4 w-56 px-8 mb-2 border-gray-400 border-b-2 py-2 font-bold">
          <img src={assets.pin} alt="City Logo" />
            {learner.city}
          </div>
          <div className="flex items-center gap-4 w-56 px-8 mb-2 border-gray-400 border-b-2 py-2 font-bold">
            <img src={assets.phone} alt="Phone Icon" />
            {learner.phone}
          </div>
          {
            learner.id === currentUser.id
            && (
              <div className="flex justify-center mt-4">
                <button type="button" className="flex items-center gap-4 text-lg font-bold text-white bg-black/80 hover:bg-gray-800/80 rounded-lg px-2 py-1" onClick={() => setEdit(true)}>
                  <FontAwesomeIcon icon={faEdit} />
                  Edit Profile
                </button>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default DisplayLearner;
