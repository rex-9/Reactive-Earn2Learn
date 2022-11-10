import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import avatar from '../../assets/avatar.jpg';
import githubIcon from '../../assets/github-black.svg';
import linkedinIcon from '../../assets/linkedin-black.svg';

const ProfilePic = ({ learner }) => (
  <>
    {/* Learner Profile Picture */}
    <div className="w-[20%]">
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
  </>
);

ProfilePic.propTypes = {
  learner: PropTypes.shape({
    image: PropTypes.string,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

// ProfilePic.defaultProps = {
//   image: avatar,
// };

export default ProfilePic;
