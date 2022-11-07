import PropTypes from 'prop-types';

import close from '../../assets/close.png';

const EditProfile = ({
  setEdit,
  setUsername,
  setFullname,
  setEmail,
  setImage,
  setBio,
  setBirthdate,
  setCity,
  setPhone,
  setRole,
  setGithub,
  setLinkedin,
}) => {
  const saveChanges = () => {
    // TODO: Save changes to the database
    console.log('Saving Changes');
    setEdit(false);
  };

  return (
    <>
      <div className="flex items-start justify-between w-full ml-12">
        <div className="w-full">
          <label htmlFor="username">
            <div className="flex items-center justify-between w-[500px]">
              <span>Username:</span>
              <input type="text" className="m-0 bg-white input w-96" placeholder="E.g. Rex" onChange={setUsername} id="username" />
            </div>
          </label>
          <br />
          <label htmlFor="fullname">
            <div className="flex items-center justify-between w-[500px]">
              <span>Full Name:</span>
              <input type="text" className="m-0 bg-white input w-96" placeholder="E.g. Rex" onChange={setFullname} id="fullname" />
            </div>
          </label>
          <br />
          <label htmlFor="email">
            <div className="flex items-center justify-between w-[500px]">
              <span>Email:</span>
              <input type="text" className="m-0 bg-white input w-96" placeholder="E.g. Rex" onChange={setEmail} id="fullname" />
            </div>
          </label>
          <br />
          <label htmlFor="image">
            <div className="flex items-center justify-between w-[500px]">
              <span>Image:</span>
              <input type="text" className="m-0 bg-white input w-96" placeholder="E.g. Rex" onChange={setImage} id="image" />
            </div>
          </label>
          <br />
          <label htmlFor="bio">
            <div className="flex items-center justify-between w-[500px]">
              <span>Bio:</span>
              <textarea type="text" className="m-0 bg-white w-96 input" placeholder="E.g. Rex" onChange={setBio} id="image" />
            </div>
          </label>
          <br />
          <label htmlFor="birthdate">
            <div className="flex items-center justify-between w-[500px]">
              <span>Birthdate:</span>
              <input type="text" className="m-0 bg-white input w-96" placeholder="E.g. Rex" onChange={setBirthdate} id="age" />
            </div>
          </label>
          <br />
          <label htmlFor="city">
            <div className="flex items-center justify-between w-[500px]">
              <span>City:</span>
              <input type="text" className="m-0 bg-white input w-96" placeholder="E.g. Rex" onChange={setCity} id="city" />
            </div>
          </label>
          <br />
          <label htmlFor="phone">
            <div className="flex items-center justify-between w-[500px]">
              <span>Phone:</span>
              <input type="text" className="m-0 bg-white input w-96" placeholder="E.g. Rex" onChange={setPhone} id="phone" />
            </div>
          </label>
          <br />
          <label htmlFor="role">
            <div className="flex items-center justify-between w-[500px]">
              <span>Role:</span>
              <input type="text" className="m-0 bg-white input w-96" placeholder="E.g. Rex" onChange={setRole} id="phone" />
            </div>
          </label>
          <br />
          <label htmlFor="github">
            <div className="flex items-center justify-between w-[500px]">
              <span>GitHub:</span>
              <input type="text" className="m-0 bg-white input w-96" placeholder="E.g. Rex" onChange={setGithub} id="github" />
            </div>
          </label>
          <br />
          <label htmlFor="linkedin">
            <div className="flex items-center justify-between w-[500px]">
              <span>LinkedIn:</span>
              <input type="text" className="m-0 bg-white input w-96" placeholder="E.g. Rex" onChange={setLinkedin} id="linkedin" />
            </div>
          </label>
          <br />
          <div className="text-right w-[500px]">
            <button type="button" className="btn" onClick={saveChanges}>
              Save w-96 Changes
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
  setEdit: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setFullname: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setImage: PropTypes.func.isRequired,
  setBio: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setBirthdate: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
  setRole: PropTypes.func.isRequired,
  setGithub: PropTypes.func.isRequired,
  setLinkedin: PropTypes.func.isRequired,
};

export default EditProfile;
