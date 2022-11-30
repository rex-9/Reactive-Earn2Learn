import { useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateLearner } from '../../redux/reducers/learnerXer';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const EditLearner = ({
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
      <div className="bg-black/40 w-full flex justify-center fixed top-0 left-0">
        <div className="bg-white p-4 my-2 rounded-lg h-screen overflow-y-auto">
          <div className="flex items-start justify-around pt-8 w-[600px]">
            <div className="flex flex-col items-center">
              <label htmlFor="username">
                <div className="form-field">
                  <span>Username:</span>
                  <input defaultValue={learner.username} type="text" className="m-0 bg-box input w-96" placeholder="E.g. Rex" onChange={(e) => setUsername(e.target.value)} id="username" />
                </div>
              </label>
              <label htmlFor="fullname">
                <div className="form-field">
                  <span>Full Name:</span>
                  <input defaultValue={learner.fullname} type="text" className="m-0 bg-box input w-96" placeholder="E.g. Htet Naing" onChange={(e) => setFullname(e.target.value)} id="fullname" />
                </div>
              </label>
              <label htmlFor="email">
                <div className="form-field">
                  <span>Email:</span>
                  <input defaultValue={learner.email} type="text" className="m-0 bg-box input w-96" placeholder="E.g. htetnaing0814@gmail.com" onChange={(e) => setEmail(e.target.value)} id="email" />
                </div>
              </label>
              <label htmlFor="image">
                <div className="form-field">
                  <span>Image:</span>
                  <input defaultValue={learner.image} type="text" className="m-0 bg-box input w-96" placeholder="E.g. https://www.unsplash.com/hello.jpg" onChange={(e) => setImage(e.target.value)} id="image" />
                </div>
              </label>
              <label htmlFor="bio">
                <div className="form-field">
                  <span>Bio:</span>
                  <textarea defaultValue={learner.bio} type="text" className="m-0 bg-box w-96 input" placeholder="E.g. Hi! I am a Spiritual Full-Stack Developer." onChange={(e) => setBio(e.target.value)} id="bio" />
                </div>
              </label>
              <label htmlFor="birthdate">
                <div className="form-field">
                  <span>Birthdate:</span>
                  <input defaultValue={learner.birthdate} type="text" className="m-0 bg-box input w-96" placeholder="E.g. 18-03-2000" onChange={(e) => setBirthdate(e.target.value)} id="birthdate" />
                </div>
              </label>
              <label htmlFor="city">
                <div className="form-field">
                  <span>City:</span>
                  <input defaultValue={learner.city} type="text" className="m-0 bg-box input w-96" placeholder="E.g. Yangon" onChange={(e) => setCity(e.target.value)} id="city" />
                </div>
              </label>
              <label htmlFor="phone">
                <div className="form-field">
                  <span>Phone:</span>
                  <input defaultValue={learner.phone} type="text" className="m-0 bg-box input w-96" placeholder="E.g. +959443112251" onChange={(e) => setPhone(e.target.value)} id="phone" />
                </div>
              </label>
              <label htmlFor="role">
                <div className="form-field">
                  <span>Role:</span>
                  <select defaultValue={learner.role} className="m-0 bg-box input w-96" onChange={(e) => setRole(e.target.value)} name="role" id="role">
                    <option value="admin">Admin</option>
                    <option value="learner">Learner</option>
                  </select>
                </div>
              </label>
              <label htmlFor="github">
                <div className="form-field">
                  <span>GitHub:</span>
                  <input defaultValue={learner.github} type="text" className="m-0 bg-box input w-96" placeholder="E.g. https://www.github.com/rex-9" onChange={(e) => setGithub(e.target.value)} id="github" />
                </div>
              </label>
              <label htmlFor="linkedin">
                <div className="form-field">
                  <span>LinkedIn:</span>
                  <input defaultValue={learner.linkedin} type="text" className="m-0 bg-box input w-96" placeholder="E.g. https://www.linkedin.com/in/rex9" onChange={(e) => setLinkedin(e.target.value)} id="linkedin" />
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
        </div>
      </div>
    </>
  );
};

EditLearner.propTypes = {
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
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }).isRequired,
};

export default EditLearner;
