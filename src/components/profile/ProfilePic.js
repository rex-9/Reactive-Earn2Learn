import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import github from '../../assets/github-black.svg';
import linkedin from '../../assets/linkedin-black.svg';

const ProfilePic = ({ learner }) => (
  <>
    {/* Learner Profile Picture */}
    <div className="w-[20%]">
      <img className="object-cover w-48 h-48" src={learner.image} alt="Profile of the Learner" />
      <div className="flex justify-around w-48 mt-2">
        <Link to={learner.github} className="p-1 rounded-lg hover:bg-white" target="_blank">
          <img src={github} alt="GitHub Profile" />
        </Link>
        <Link to={learner.linkedin} className="p-1 rounded-lg hover:bg-white" target="_blank">
          <img src={linkedin} alt="LinkedIn Profile" />
        </Link>
      </div>
    </div>
  </>
);

ProfilePic.propTypes = {
  learner: PropTypes.shape({
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfilePic;
