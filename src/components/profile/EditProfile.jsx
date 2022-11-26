import { useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateLearner } from '../../redux/reducers/learnerXer';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const EditProfile = ({
  setEdit,
  learner,
}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(learner.username);
  const [fullname, setFullname] = useState(learner.fullname);
  const [email, setEmail] = useState(learner.email);
  const [image, setImage] = useState(learner.image);
  const [bio, setBio] = useState(learner.bio);
  const [birthdate, setBirthdate] = useState(learner.birthdate);
  const [city, setCity] = useState(learner.city);
  const [phone, setPhone] = useState(learner.phone);
  const [role, setRole] = useState(learner.role);
  const [github, setGithub] = useState(learner.github);
  const [linkedin, setLinkedin] = useState(learner.linkedin);

  const saveChanges = () => {
    setEdit(false);
    const learnerObj = {
      id: learner.id,
      username,
      fullname,
      email,
      image,
      bio,
      birthdate,
      city,
      phone,
      role,
      github,
      linkedin,
    };
    dispatch(updateLearner(learnerObj));
    window.location.reload();
  };

  return (
    <>
      <div className="flex items-start justify-between w-[600px]">
        <div className="flex flex-col items-center">
          <div className="py-2 mb-2 text-center text-gray-500 rounded-lg w-96 bg-yellow-50">
            To edit your profile data,
            <br />
            you do not need to fill every field.
            <br />
            You can only fill the fields you want to change.
          </div>
          <label htmlFor="username">
            <div className="form-field">
              <span>Username:</span>
              <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. Rex" onChange={(e) => setUsername(e.target.value)} id="username" />
            </div>
          </label>
          <label htmlFor="fullname">
            <div className="form-field">
              <span>Full Name:</span>
              <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. Htet Naing" onChange={(e) => setFullname(e.target.value)} id="fullname" />
            </div>
          </label>
          <label htmlFor="email">
            <div className="form-field">
              <span>Email:</span>
              <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. htetnaing0814@gmail.com" onChange={(e) => setEmail(e.target.value)} id="fullname" />
            </div>
          </label>
          <label htmlFor="image">
            <div className="form-field">
              <span>Image:</span>
              <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. https://www.unsplash.com/hello.jpg" onChange={(e) => setImage(e.target.value)} id="image" />
            </div>
          </label>
          <label htmlFor="bio">
            <div className="form-field">
              <span>Bio:</span>
              <textarea type="text" className="m-0 bg-box w-96 input" placeholder="E.g. Hi! I am a Spiritual Full-Stack Developer." onChange={(e) => setBio(e.target.value)} id="image" />
            </div>
          </label>
          <label htmlFor="birthdate">
            <div className="form-field">
              <span>Birthdate:</span>
              <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. 18-03-2000" onChange={(e) => setBirthdate(e.target.value)} id="birthdate" />
            </div>
          </label>
          <label htmlFor="city">
            <div className="form-field">
              <span>City:</span>
              <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. Yangon" onChange={(e) => setCity(e.target.value)} id="city" />
            </div>
          </label>
          <label htmlFor="phone">
            <div className="form-field">
              <span>Phone:</span>
              <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. +959443112251" onChange={(e) => setPhone(e.target.value)} id="phone" />
            </div>
          </label>
          <label htmlFor="role">
            <div className="form-field">
              <span>Role:</span>
              <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. Admin" onChange={(e) => setRole(e.target.value)} id="phone" />
            </div>
          </label>
          <label htmlFor="github">
            <div className="form-field">
              <span>GitHub:</span>
              <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. https://www.github.com/rex-9" onChange={(e) => setGithub(e.target.value)} id="github" />
            </div>
          </label>
          <label htmlFor="linkedin">
            <div className="form-field">
              <span>LinkedIn:</span>
              <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. https://www.linkedin.com/in/rex9" onChange={(e) => setLinkedin(e.target.value)} id="linkedin" />
            </div>
          </label>
          <div className="text-right w-[500px]">
            <button type="button" className="btn" onClick={saveChanges}>
              Save Changes
            </button>
          </div>
        </div>

        <button type="button" onClick={() => setEdit(false)}>
          <FontAwesomeIcon icon={faClose} className="h-6" />
        </button>
      </div>
    </>
  );
};

EditProfile.propTypes = {
  setEdit: PropTypes.func.isRequired,
  learner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string,
    bio: PropTypes.string,
    city: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditProfile;
