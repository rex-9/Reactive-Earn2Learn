// import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import axios from '../../api/axios';
import { SetCookie, RemoveCookie } from '../services/Cookie';

// import { addLearner } from '../../redux/reducers/learnerXer';
import { USERNAME_REGEX, PASSWORD_REGEX } from './auth_service';

const REGISTER_ENDPOINT = 'users/';

const Register = () => {
  const usernameRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate(); // react-router-dom v6
  // const dispatch = useDispatch(); // redux

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [validConfirm, setValidConfirm] = useState(false);
  const [focusConfirm, setFocusConfirm] = useState(false);

  const [errMsges, setErrMsges] = useState([]);
  const [fullname, setFullname] = useState('');
  const [city, setCity] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
    const match = password === confirmPassword;
    setValidConfirm(match);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrMsges('');
  }, [username, password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USERNAME_REGEX.test(username);
    const v2 = PASSWORD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsges("Username or password doesn't match the requirement");
      return;
    }

    const newLearner = {
      fullname,
      username,
      city,
      birthdate,
      phone,
      email,
      password,
    };
    try {
      const response = await axios.post(
        REGISTER_ENDPOINT,
        JSON.stringify(newLearner),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      const { token, user } = response.data;
      RemoveCookie('token');
      SetCookie('token', token);
      SetCookie('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      if (error.response) {
        const err = error.response.data.error;
        setErrMsges(err);
      } else {
        setErrMsges('Check your Internet Connection');
      }
    }
  };

  return (
    <>
      <section className="flex justify-center pt-12 text-white h-fit bg-dark">
        <div className="flex flex-col items-center my-8">

          <div className="header">Register</div>

          <form>
            <label htmlFor="username">
              Username:
              <span className={validUsername ? 'inline ml-4 text-green-500' : 'hidden'}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={!validUsername && username ? 'inline ml-4 text-red-500' : 'hidden'}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <br />
              <input
                type="text"
                id="username"
                ref={usernameRef}
                autoComplete="off"
                className="mt-2 mb-4 input"
                placeholder="E.g. Rex"
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocusUsername(true)}
                onBlur={() => setFocusUsername(false)}
                required
                aria-invalid={validUsername ? 'false' : 'true'}
                aria-describedby="uidnote"
              />
              <p id="uidnote" className={focusUsername && username && !validUsername ? 'block' : 'hidden'}>
                <FontAwesomeIcon icon={faInfoCircle} />
                3 to 25 characters,
                {' '}
                <br />
                Must start with a letter,
                {' '}
                <br />
                No special characters,
                {' '}
                <br />
                Letters, Numbers, Underscores, and Hyphens only
              </p>
            </label>

            <label htmlFor="fullname">
              <div>Full Name:</div>
              <input
                type="text"
                className="mt-2 mb-4 input"
                placeholder="E.g. Htet Naing"
                onChange={(e) => setFullname(e.target.value)}
                id="fullname"
              />
            </label>

            <label htmlFor="email">
              <div>Email:</div>
              <input
                type="email"
                className="mt-2 mb-4 input"
                placeholder="E.g. htetnaing0814@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                id="fullname"
              />
            </label>

            <label htmlFor="birthdate">
              <div>Birthdate:</div>
              <input
                type="text"
                className="mt-2 mb-4 input"
                placeholder="E.g. 2000-18-03"
                onChange={(e) => setBirthdate(e.target.value)}
                id="age"
              />
            </label>

            <label htmlFor="city">
              <div>City:</div>
              <input
                type="text"
                className="mt-2 mb-4 input"
                placeholder="E.g. Yangon"
                onChange={(e) => setCity(e.target.value)}
                id="city"
              />
            </label>

            <label htmlFor="phone">
              <div>Phone:</div>
              <input
                type="text"
                className="mt-2 mb-4 input"
                placeholder="E.g. +959443112251"
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
              />
            </label>
            <br />

            <label htmlFor="password">
              Password:
              <span className={validPassword ? 'inline ml-4 text-green-500' : 'hidden'}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={!validPassword && password ? 'inline ml-4 text-red-500' : 'hidden'}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <br />
              <input
                type="password"
                id="password"
                className="mt-2 mb-4 input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusPassword(true)}
                onBlur={() => setFocusPassword(false)}
                required
                aria-invalid={validPassword ? 'false' : 'true'}
                aria-describedby="pwdnote"
              />
              <p id="pwdnote" className={focusPassword && password && !validPassword ? 'block' : 'hidden'}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Minimum of 8 characters,
                {' '}
                <br />
                Must include Uppercase and Lowercase letters,
                {' '}
                <br />
                {' '}
                a Number and a Special Character
                {' '}
                <br />
                Allowed special characters:
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
              </p>
              <br />
            </label>

            <label htmlFor="confirm_password">
              Confirm Password:
              <span className={validConfirm && confirmPassword ? 'inline ml-4 text-green-500' : 'hidden'}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={!validConfirm && confirmPassword ? 'inline ml-4 text-red-500' : 'hidden'}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <br />
              <input
                type="password"
                id="confirm_password"
                className="mt-2 mb-4 input"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setFocusConfirm(true)}
                onBlur={() => setFocusConfirm(false)}
                required
                aria-invalid={validPassword ? 'false' : 'true'}
                aria-describedby="confirmnote"
              />
              <p id="confirmnote" className={focusConfirm && !validConfirm ? 'block' : 'hidden'}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>
            </label>
            <br />

            <input type="checkbox" className="checkbox" />
            <span>Remember me</span>
            {' '}
            <br />

            <div className="flex justify-center w-full my-2">
              <button
                type="button"
                disabled={!!(!validUsername || !validPassword || !validConfirm || !fullname || !city || !birthdate || !phone || !email)}
                className="btn hover:shadow-gray-600 disabled:opacity-60 disabled:bg-btn disabled:shadow-none"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>

          {
            errMsges ? errMsges.map((msg) => <p key={msg} ref={errRef} className={msg ? 'text-red-400' : 'bg-blue-300'} aria-live="assertive">{msg}</p>) : <div />
          }

          <div className="flex items-center justify-center">
            <Link to="/login" className="link">Log in</Link>
            <div className="vertical-line" />
            <Link to="/forgot-password" className="link">Forgot your password</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
