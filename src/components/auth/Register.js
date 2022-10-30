import { Link } from 'react-router-dom';

const Register = () => (
  <>
    <div className="flex justify-center h-screen pt-12 text-white bg-dark">
      <div className="flex flex-col items-center">
        <div className="my-8 header">Register</div>
        <form>
          <input className="input" type="text" placeholder="Full Name" />
          {' '}
          <br />
          <input className="input" type="text" placeholder="Username" />
          {' '}
          <br />
          <input className="input" type="text" placeholder="Email" />
          {' '}
          <br />
          <input className="input" type="password" placeholder="Password" />
          {' '}
          <br />
          <input className="input" type="password" placeholder="Confirm Password" />
          {' '}
          <br />
          <input type="checkbox" className="checkbox" />
          <span>Remember me</span>
          {' '}
          <br />
          <div className="flex justify-center w-full"><button type="button" className="btn hover:shadow-gray-600">Register</button></div>
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

export default Register;
