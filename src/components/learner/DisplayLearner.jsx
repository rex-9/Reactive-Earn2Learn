import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar from '../../assets/avatar.jpg';
import githubIcon from '../../assets/github-black.svg';
import linkedinIcon from '../../assets/linkedin-black.svg';
import { isAdmin, returnCurrentUser } from '../../services/cookie';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const DisplayLearner = ({
  setEdit, learner,
}) => {
  const currentUser = returnCurrentUser();
  return (
    <>
      <div className="flex items-start justify-between w-full">
        <div>
          <img className="object-cover w-48 h-48" src={learner.image || avatar} alt="Profile of the Learner" />
          <div className="flex justify-around w-48 mt-2">
            {
              learner.github
                ? (
                  <Link to={learner.github} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                    <img src={githubIcon} alt="GitHub Profile" />
                  </Link>
                ) : <img src={githubIcon} alt="GitHub Profile" />
            }
            {
              learner.linkedin
                ? (
                  <Link to={learner.linkedin} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn Profile" />
                  </Link>
                ) : <img src={linkedinIcon} alt="LinkedIn Profile" />
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
