import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { isAdmin, returnCurrentUser } from '../../services/cookie';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets/assets';

const DisplayLearner = ({
  setEdit, learner,
}) => {
  const currentUser = returnCurrentUser();
  return (
    <>
      {/* Learner Image and Links */}
      <div className="flex flex-col items-center mb-4">
        <img className="object-cover w-48 h-48 rounded-full pb-2" src={learner.image || assets.avatar} alt="Profile of the Learner" />
        <div className="flex justify-around w-48 mt-2">
          {
            learner.github
              ? (
                <Link to={learner.github} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                  <img src={assets.githubBlack} alt="GitHub Profile" />
                </Link>
              ) : <img src={assets.githubBlack} alt="GitHub Profile" />
          }
          {
            learner.linkedin
              ? (
                <Link to={learner.linkedin} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                  <img src={assets.linkedinBlack} alt="LinkedIn Profile" />
                </Link>
              ) : <img src={assets.linkedinBlack} alt="LinkedIn Profile" />
          }
        </div>
      </div>
      {/* Learner Profile Data */}
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xl font-bold text-center pt-2">
            {learner.fullname}
            <span> </span>
            <span>(</span>
            <span className="text-gray-600 text-base">{learner.username}</span>
            <span>)</span>
            <p className="font-bold text-gray-800 text-base">{learner.goal}</p>
          </div>
          <div className="border-gray-400 border-b-2 py-2 font-bold">
            Email - &nbsp;
            {learner.email}
          </div>
          <div className="border-gray-400 border-b-2 py-2 font-bold">
            Bio - &nbsp;
            {learner.bio || "I'm a super learner"}
          </div>
          {
            isAdmin() &&
            <div className="border-gray-400 border-b-2 py-2 font-bold">
              Role - &nbsp;
              {learner.role}
            </div>
          }
          <div className="border-gray-400 border-b-2 py-2 font-bold">
            Birthdate - &nbsp;
            {learner.birthdate}
          </div>
          <div className="border-gray-400 border-b-2 py-2 font-bold">
            City - &nbsp;
            {learner.city}
          </div>
          <div className="border-gray-400 border-b-2 py-2 font-bold">
            Phone - &nbsp;
            {learner.phone}
          </div>
          {
            learner.id === currentUser.id
            && (
              <div className="flex justify-center mt-4">
                <button type="button" className="flex items-center gap-4 text-lg font-bold text-white bg-black hover:bg-blue-500 rounded-lg px-2 py-1" onClick={() => setEdit(true)}>
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
