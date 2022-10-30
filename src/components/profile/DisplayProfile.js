import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import github from '../../assets/github-black.svg';
import linkedin from '../../assets/linkedin-black.svg';
import edit from '../../assets/edit.png';

const DisplayProfile = ({ learner, setEdit }) => (
  <>
    <div className="flex justify-center m-4 font-qs">
      <div className="bg-box rounded-md shadow-inner shadow-black p-4 w-[90%] flex items-start">

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

        {/* Learner Profile Data */}
        <div className="w-[77%]">
          <div className="text-xl font-bold">
            {learner.fullname}
            {' '}
            (
            {learner.username}
            )
          </div>
          <div className="">
            Age -
            {learner.age}
          </div>
          <div className="">
            City -
            {learner.city}
          </div>
          <div className="">
            Phone -
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
    id: PropTypes.number.isRequired,
    fullname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default DisplayProfile;
