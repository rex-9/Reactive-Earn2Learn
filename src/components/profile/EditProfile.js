import PropTypes from 'prop-types';

import edit from '../../assets/edit.png';

const EditProfile = ({ learner, setEdit }) => (
  <>
    <div className="flex items-start justify-between w-full">
      <div>
        {learner.username}
        Edit Profile here
      </div>

      <button type="button" onClick={() => setEdit(false)}>
        <img src={edit} alt="Edit Your Profile" />
      </button>
    </div>
  </>
);

EditProfile.propTypes = {
  learner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    fullname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default EditProfile;
