import PropTypes from 'prop-types';

import close from '../../assets/close.png';

const EditProfile = ({ learner, setEdit }) => {
  const saveChanges = () => {
    // TODO: Save changes to the database
    console.log('Saving Changes');
    setEdit(false);
  };

  return (
    <>
      <div className="flex items-start justify-between w-full">
        <div className="w-full pl-12">
          <label htmlFor="username">
            <div className="flex items-center justify-between w-96">
              <span>Username:</span>
              <input type="text" className="m-0 bg-white input" placeholder={learner.username} id="username" />
            </div>
          </label>
          <br />
          <label htmlFor="fullname">
            <div className="flex items-center justify-between w-96">
              <span>Full Name:</span>
              <input type="text" className="m-0 bg-white input" placeholder={learner.fullname} id="fullname" />
            </div>
          </label>
          <br />
          <label htmlFor="age">
            <div className="flex items-center justify-between w-96">
              <span>Age:</span>
              <input type="text" className="m-0 bg-white input" placeholder={learner.age} id="age" />
            </div>
          </label>
          <br />
          <label htmlFor="city">
            <div className="flex items-center justify-between w-96">
              <span>City:</span>
              <input type="text" className="m-0 bg-white input" placeholder={learner.city} id="city" />
            </div>
          </label>
          <br />
          <label htmlFor="phone">
            <div className="flex items-center justify-between w-96">
              <span>Phone:</span>
              <input type="text" className="m-0 bg-white input" placeholder={learner.phone} id="phone" />
            </div>
          </label>
          <br />
          <label htmlFor="image">
            <div className="flex items-center justify-between w-96">
              <span>Image:</span>
              <input type="text" className="m-0 bg-white input" placeholder={learner.image} id="image" />
            </div>
          </label>
          <br />
          <label htmlFor="github">
            <div className="flex items-center justify-between w-96">
              <span>GitHub:</span>
              <input type="text" className="m-0 bg-white input" placeholder={learner.github} id="github" />
            </div>
          </label>
          <br />
          <label htmlFor="linkedin">
            <div className="flex items-center justify-between w-96">
              <span>LinkedIn:</span>
              <input type="text" className="m-0 bg-white input" placeholder={learner.linkedin} id="linkedin" />
            </div>
          </label>
          <br />
          <div className="text-right w-96">
            <button type="button" className="btn" onClick={saveChanges}>
              Save Changes
            </button>
          </div>
        </div>

        <button type="button" onClick={() => setEdit(false)}>
          <img src={close} alt="Edit Your Profile" />
        </button>
      </div>
    </>
  );
};

EditProfile.propTypes = {
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

export default EditProfile;
