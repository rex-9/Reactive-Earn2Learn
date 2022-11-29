import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { endpoint, authentication } from '../../api/axios';

const Login = () => {
  const authRef = useRef();
  const formRef = useRef();

  const [err, setErr] = useState('');
  const [auth, setAuth] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { auth, password };
    const result = await authentication(endpoint.login(), credentials);
    if (result.status === 'success') {
      window.location.reload();
    } else if (result.status === 'failure') {
      setErr(result.error);
    }
  };

  useEffect(() => {
    authRef.current.focus();
  }, []);

  return (
    <>
      <div className="flex justify-center h-screen pt-12 text-white bg-dark">
        <div className="flex flex-col items-center">
          <div className="my-8 header">Log In</div>
          <form onSubmit={handleSubmit} ref={formRef}>
            <input
              className="input"
              ref={authRef}
              type="text"
              placeholder="Username or Email"
              onChange={(e) => setAuth(e.target.value)}
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
              <button type="submit" className="btn hover:shadow-gray-600 disabled:opacity-60 disabled:bg-btn disabled:shadow-none" disabled={!!(!auth || !password)}>Log In</button>
            </div>
          </form>
          {
            err && <p className="text-red-400">{err}</p>
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
