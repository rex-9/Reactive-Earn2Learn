import PropTypes from 'prop-types';

import edit from '../../assets/edit.png';

const DisplayProfile = ({ learner, setEdit }) => (
  <>
    <div className="flex items-start justify-between w-full">

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
  }).isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default DisplayProfile;
