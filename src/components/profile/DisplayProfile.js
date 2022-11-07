import PropTypes from 'prop-types';

import edit from '../../assets/edit.png';

const DisplayProfile = ({
  setEdit,
  username,
  fullname,
  email,
  bio,
  birthdate,
  city,
  phone,
  role,
}) => (
  <>
    <div className="flex items-start justify-between w-full ml-12 mr-4">

      {/* Learner Profile Data */}
      <div>
        <div className="text-xl font-bold">
          {fullname}
          {' '}
          (
          {username}
          )
        </div>
        <div className="">
          Email -
          {email}
        </div>
        <div className="">
          Bio -
          {bio}
        </div>
        <div className="">
          Role -
          {role}
        </div>
        <div className="">
          Birthdate -
          {birthdate}
        </div>
        <div className="">
          City -
          {city}
        </div>
        <div className="">
          Phone -
          {phone}
        </div>
      </div>

      <button type="button" onClick={() => setEdit(true)}>
        <img src={edit} alt="Edit Your Profile" />
      </button>
    </div>
  </>
);

DisplayProfile.propTypes = {
  username: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default DisplayProfile;
