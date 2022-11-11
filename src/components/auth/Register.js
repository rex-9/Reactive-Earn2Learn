import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addLearner } from '../../redux/reducers/learnerXer';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const learners = useSelector((state) => state.learners);

  const [success, setSuccess] = useState(false);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validate = () => {
    if (!fullname || !username || !city || !birthdate || !phone || !email || !password || !confirmPassword) {
      alert('You must fill all fields in the form');
      setSuccess(false);
    } else if (password !== confirmPassword) {
      alert('Password does not match');
      setSuccess(false);
    } else {
      setSuccess(true);
    }
  };

  const register = () => {
    const newLearner = {
      id: learners.length,
      fullname,
      username,
      city,
      birthdate,
      phone,
      email,
      password,
      role: 'learner',
      image: null,
      bio: null,
      linkedin: null,
      github: null,
    };
    dispatch(addLearner(newLearner));
    navigate('/');
  };

  const onSubmit = () => {
    validate();
    if (success) {
      register();
    } else {
      alert('Validation Failed. Not gonna proceed to registration.');
    }
  };

  return (
    <>
      <div className="flex justify-center pt-12 text-white h-fit bg-dark">
        <div className="flex flex-col items-center my-8">
          <div className="header">Register</div>
          <form>
            <label htmlFor="username">
              <div>Username:</div>
              <input type="text" className="mt-2 mb-4 input" placeholder="E.g. Rex" onChange={(e) => setUsername(e.target.value)} id="username" />
            </label>
            <label htmlFor="fullname">
              <div>Full Name:</div>
              <input type="text" className="mt-2 mb-4 input" placeholder="E.g. Htet Naing" onChange={(e) => setFullname(e.target.value)} id="fullname" />
            </label>
            <label htmlFor="email">
              <div>Email:</div>
              <input type="email" className="mt-2 mb-4 input" placeholder="E.g. htetnaing0814@gmail.com" onChange={(e) => setEmail(e.target.value)} id="fullname" />
            </label>
            <label htmlFor="birthdate">
              <div>Birthdate:</div>
              <input type="text" className="mt-2 mb-4 input" placeholder="E.g. 2000-18-03" onChange={(e) => setBirthdate(e.target.value)} id="age" />
            </label>
            <label htmlFor="city">
              <div>City:</div>
              <input type="text" className="mt-2 mb-4 input" placeholder="E.g. Yangon" onChange={(e) => setCity(e.target.value)} id="city" />
            </label>
            <label htmlFor="phone">
              <div>Phone:</div>
              <input type="text" className="mt-2 mb-4 input" placeholder="E.g. +959443112251" onChange={(e) => setPhone(e.target.value)} id="phone" />
            </label>
            <label htmlFor="password">
              <div>Password:</div>
              <input type="password" className="mt-2 mb-4 input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} id="password" />
            </label>
            <label htmlFor="confirm-password">
              <div>Confirm Password:</div>
              <input type="password" className="mt-2 mb-4 input" placeholder="E.g. +Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} id="confirm-password" />
            </label>
            <br />
            <input type="checkbox" className="checkbox" />
            <span>Remember me</span>
            {' '}
            <br />
            <div className="flex justify-center w-full my-2"><button type="button" className="btn hover:shadow-gray-600" onClick={onSubmit}>Register</button></div>
          </form>
          <div className="flex items-center justify-center">
            <Link to="/login" className="link">Log in</Link>
            <div className="vertical-line" />
            <Link to="/forgot-password" className="link">Forgot your password</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
