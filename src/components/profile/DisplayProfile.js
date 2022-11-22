import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import edit from '../../assets/edit.png';
import avatar from '../../assets/avatar.jpg';
import githubIcon from '../../assets/github-black.svg';
import linkedinIcon from '../../assets/linkedin-black.svg';

const DisplayProfile = ({
  setEdit, learner,
}) => (
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
      <div className="flex justify-between items-start w-[80%]">
        <div>
          <div className="text-xl font-bold">
            {learner.fullname}
            {' '}
            (
            {learner.username}
            )
          </div>
          <div className="">
            Email - &nbsp;
            {learner.email}
          </div>
          <div className="">
            Bio - &nbsp;
            {learner.bio || "I'm a super learner"}
          </div>
          <div className="">
            Role - &nbsp;
            {learner.role}
          </div>
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

        <button type="button" onClick={() => setEdit(true)}>
          <img src={edit} alt="Edit Your Profile" />
        </button>
      </div>
    </div>
  </>
);

DisplayProfile.propTypes = {
  learner: PropTypes.shape({
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string,
    city: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }).isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default DisplayProfile;
