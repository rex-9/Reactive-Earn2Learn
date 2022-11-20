import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { loginLearner } from '../../redux/reducers/learnerXer';
import { GetCookie, RemoveCookie } from '../services/Cookie';
import { delay } from '../../api/axios';

const Login = () => {
  const emailRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [err, setErr] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    RemoveCookie('error');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = { email, password };
    dispatch(loginLearner(auth));
    await delay(300);
    const cookErr = GetCookie('error');
    if (cookErr) setErr(cookErr);
    else {
      RemoveCookie('error');
      console.log('before navigate');
      navigate('/');
      console.log('after navigate');
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <>
      <div className="flex justify-center h-screen pt-12 text-white bg-dark">
        <div className="flex flex-col items-center">
          <div className="my-8 header">Log In</div>
          <form onSubmit={handleSubmit} ref={formRef}>
            <input
              className="input"
              ref={emailRef}
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {' '}
            <br />
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {' '}
            <br />
            <input type="checkbox" className="checkbox" />
            <span>Remember me</span>
            {' '}
            <br />
            <div className="flex justify-center w-full my-2">
              <button type="submit" className="btn hover:shadow-gray-600 disabled:opacity-60 disabled:bg-btn disabled:shadow-none" disabled={!!(!email || !password)}>Log In</button>
            </div>
          </form>
          {
            err ? <p className="text-red-400">{err}</p> : <div />
          }
          <div className="flex items-center justify-center">
            <Link to="/register" className="link">Register</Link>
            <div className="vertical-line" />
            <Link to="/forgot-password" className="link">Forgot your password</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
