import PropTypes from 'prop-types';

import edit from '../../assets/edit.png';

const DisplayProfile = ({
  setEdit, learner,
}) => (
  <>
    <div className="flex items-start justify-between w-full ml-12 mr-4">

      {/* Learner Profile Data */}
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
  }).isRequired,
  setEdit: PropTypes.func.isRequired,
};

// DisplayProfile.defaultProps = {
//   bio: "I'm a super learner",
// };

export default DisplayProfile;
