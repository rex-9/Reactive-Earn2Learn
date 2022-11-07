import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import githubIcon from '../../assets/github-black.svg';
import linkedinIcon from '../../assets/linkedin-black.svg';

const ProfilePic = ({ image, github, linkedin }) => (
  <>
    {/* Learner Profile Picture */}
    <div className="w-[20%]">
      <img className="object-cover w-48 h-48" src={image} alt="Profile of the Learner" />
      <div className="flex justify-around w-48 mt-2">
        <Link to={github} className="p-1 rounded-lg hover:bg-white" target="_blank">
          <img src={githubIcon} alt="GitHub Profile" />
        </Link>
        <Link to={linkedin} className="p-1 rounded-lg hover:bg-white" target="_blank">
          <img src={linkedinIcon} alt="LinkedIn Profile" />
        </Link>
      </div>
    </div>
  </>
);

ProfilePic.propTypes = {
  image: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default ProfilePic;
