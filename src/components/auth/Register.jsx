import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../../pages/guest/GuestHome.styles.css";
import { USERNAME_REGEX, PASSWORD_REGEX } from "./auth_service";
import { endpoint, authentication } from "../../services/axios";

const Register = () => {
  const usernameRef = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);
  const [focusConfirm, setFocusConfirm] = useState(false);

  const [errMsges, setErrMsges] = useState("");
  const [fullname, setFullname] = useState("");
  const [goal, setGoal] = useState("");
  const [city, setCity] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

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
    setErrMsges("");
  }, [username, password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USERNAME_REGEX.test(username);
    const v2 = PASSWORD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsges("Username or Password doesn't match the requirement");
      return;
    }

    const newLearner = {
      fullname,
      username,
      goal,
      city,
      birthdate,
      phone,
      email,
      password,
    };
    const result = await authentication(endpoint.learners(), newLearner);
    if (result.status === "success") {
      navigate("/login");
    } else if (result.status === "failure") {
      setErrMsges(result.error);
    }
  };

  return (
    <>
      <section className="flex justify-center pt-12 h-[85vh] overflow-y-auto scrollremove">
        <div className="flex flex-col items-center my-8">
          <div className="header text-blue-500 text-3xl">Earn To Learn</div>
          <div className="my-2 header">Welcome Back Champion!</div>
          <div className="mb-4 header">Register</div>

          <form>
            <label htmlFor="username">
              Username:
              <span
                className={
                  validUsername ? "inline ml-4 text-green-500" : "hidden"
                }
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={
                  !validUsername && username
                    ? "inline ml-4 text-red-500"
                    : "hidden"
                }
              >
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
                aria-invalid={validUsername ? "false" : "true"}
                aria-describedby="uidnote"
              />
              <p
                id="uidnote"
                className={
                  focusUsername && username && !validUsername
                    ? "block"
                    : "hidden"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />3 to 25 characters,{" "}
                <br />
                Must start with a letter, <br />
                No special characters, <br />
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
            <label htmlFor="goal">
              <div>Goal:</div>
              <input
                type="text"
                className="mt-2 mb-4 input"
                placeholder="E.g. Data Scientist"
                onChange={(e) => setGoal(e.target.value)}
                id="goal"
              />
            </label>
            <label htmlFor="email">
              <div>Email:</div>
              <input
                type="email"
                className="mt-2 mb-4 input"
                placeholder="E.g. htetnaing0814@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
            </label>
            <label htmlFor="birthdate">
              <div>Birthdate:</div>
              <input
                type="text"
                className="mt-2 mb-4 input"
                placeholder="E.g. 18-03-2000"
                onChange={(e) => setBirthdate(e.target.value)}
                id="birthdate"
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
              <span
                className={
                  validPassword ? "inline ml-4 text-green-500" : "hidden"
                }
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={
                  !validPassword && password
                    ? "inline ml-4 text-red-500"
                    : "hidden"
                }
              >
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
                aria-invalid={validPassword ? "false" : "true"}
                aria-describedby="pwdnote"
              />
              <p
                id="pwdnote"
                className={
                  focusPassword && password && !validPassword
                    ? "block"
                    : "hidden"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Minimum of 8 characters, <br />
                Must include Uppercase and Lowercase letters, <br /> a Number
                and a Special Character <br />
                Allowed special characters:
                <br />
                <span aria-label="exclamation mark">! </span>
                <span aria-label="double quotation">" </span>
                <span aria-label="hashtag"># </span>
                <span aria-label="dollar sign">$ </span>
                <span aria-label="percent">% </span>
                <span aria-label="ampersand">& </span>
                <span aria-label="apostrophe">' </span>
                <span aria-label="left parenthesis">&#40; </span>
                <span aria-label="right parenthesis">&#41; </span>
                <span aria-label="asterisk">* </span>
                <span aria-label="plus sign">+ </span>
                <span aria-label="comma">, </span>
                <span aria-label="full-stop">. </span>
                <span aria-label="colon">: </span>
                <span aria-label="semicolon">; </span>
                <span aria-label="less than sign">&#60; </span>
                <span aria-label="equal sign">=</span>
                <span aria-label="greater than sign">&#62; </span>
                <span aria-label="question mark">? </span>
                <span aria-label="at symbol">@ </span>
              </p>
              <br />
            </label>
            <label htmlFor="confirm_password">
              Confirm Password:
              <span
                className={
                  validConfirm && confirmPassword
                    ? "inline ml-4 text-green-500"
                    : "hidden"
                }
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={
                  !validConfirm && confirmPassword
                    ? "inline ml-4 text-red-500"
                    : "hidden"
                }
              >
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
                aria-invalid={validPassword ? "false" : "true"}
                aria-describedby="confirmnote"
              />
              <p
                id="confirmnote"
                className={focusConfirm && !validConfirm ? "block" : "hidden"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>
            </label>
            <br />
            <input type="checkbox" className="checkbox" />
            <span>Remember me</span> <br />
            <div className="flex justify-center w-full my-2">
              <button
                type="button"
                disabled={
                  !!(
                    !validUsername ||
                    !validPassword ||
                    !validConfirm ||
                    !fullname ||
                    !city ||
                    !birthdate ||
                    !phone ||
                    !email
                  )
                }
                className="btn hover:shadow-gray-600 disabled:opacity-60 disabled:bg-btn disabled:shadow-none"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>

          {errMsges &&
            errMsges.map((msg) => (
              <p key={msg} className="text-red-400" aria-live="assertive">
                {msg}
              </p>
            ))}

          <div className="flex items-center justify-center">
            <Link to="/login" className="link">
              Log in
            </Link>
            <div className="vertical-line" />
            <Link to="/forgot-password" className="link">
              Forgot your password
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
