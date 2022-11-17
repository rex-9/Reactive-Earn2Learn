import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';

const Login = () => {
  const emailRef = useRef();
  const formRef = useRef();

  const [err, setErr] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = { email, password };
    try {
      const response = await axios.post(
        'users/login',
        JSON.stringify(auth),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      console.log(response);
    } catch (error) {
      const err = error.response.data.error;
      setErr(err);
      formRef.current?.reset();
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
