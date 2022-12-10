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
      <div className="flex items-start justify-between w-full">
        <div>
          <img className="object-cover w-48 h-48" src={learner.image || assets.avatar} alt="Profile of the Learner" />
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
        <div className="flex justify-between items-start ml-8 w-[80%]">
          <div>
            <div className="text-xl font-bold">
              {learner.fullname}
              <span> </span>
              <span>(</span>
              {learner.username}
              <span>)</span>
            </div>
            <div className="">
              Goal - &nbsp;
              {learner.goal}
            </div>
            <div className="">
              Email - &nbsp;
              {learner.email}
            </div>
            <div className="">
              Bio - &nbsp;
              {learner.bio || "I'm a super learner"}
            </div>
            {
              isAdmin() &&
              <div className="">
                Role - &nbsp;
                {learner.role}
              </div>
            }
            <div className="">
              Birthdate - &nbsp;
              {learner.birthdate}
            </div>
            <div className="">
              City - &nbsp;
              {learner.city}
            </div>
            <div className="">
              Phone - &nbsp;
              {learner.phone}
            </div>
          </div>

          {
            learner.id === currentUser.id
            && (
              <button type="button" onClick={() => setEdit(true)}>
                <FontAwesomeIcon icon={faEdit} className="h-6" />
              </button>
            )
          }
        </div>
      </div>
    </>
  );
};

export default DisplayLearner;
