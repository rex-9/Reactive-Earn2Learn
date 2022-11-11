import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { addLearner } from '../../redux/reducers/learnerXer';

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,24}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/;

const Register = () => {
  const usernameRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const learners = useSelector((state) => state.learners);

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [validConfirm, setValidConfirm] = useState(false);
  const [focusConfirm, setFocusConfirm] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
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
    console.log(result);
    console.log(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === confirmPassword;
    setValidConfirm(match);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrMsg('');
  }, [username, password, confirmPassword]);

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
      <section className="flex justify-center pt-12 text-white h-fit bg-dark">
        <p ref={errRef} className={errMsg ? 'bg-red-500' : 'bg-blue-300'} aria-live="assertive">{errMsg}</p>
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
              <p id="pwdnote" className={focusPassword && !validPassword ? 'block' : 'hidden'}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Minimum of 8 characters,
                {' '}
                <br />
                Must include Uppercase and Lowercase letters, a Number and a Special Character
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
                disabled={!!(!validUsername || !validPassword || !validConfirm)}
                className="btn hover:shadow-gray-600"
                onClick={onSubmit}
              >
                Register
              </button>
            </div>
          </form>
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
