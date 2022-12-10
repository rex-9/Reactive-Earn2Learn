import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Panel = () => {
  const [selected, setSelected] = useState('users');

  console.log(selected);

  return (
    <section className="pt-24 h-full w-48 bg-white shadow-lg">
      <ul className="flex flex-col gap-4">
        <li className="selected">
          <button type="button" onClick={() => setSelected('hello')} >
            <Link to="/admin/users" className="flex">
              <img src={assets.users} className="mr-2" alt="Users Dashboard" />
              Users
            </Link>
          </button>
        </li>
        <li className="selected">
          <Link to="/admin/studies" className="flex">
            <img src={assets.studies} className="mr-2" alt="Studies Dashboard" />
            Studies
          </Link>
        </li>
        <li className="selected">
          <Link to="/admin/certificates" className="flex">
            <img src={assets.certificates} className="mr-2" alt="Certificates Dashboard" />
            Certificates
          </Link>
        </li>
        <li className="selected">
          <Link to="/admin/technologies" className="flex">
            <img src={assets.certificates} className="mr-2" alt="Technologies Dashboard" />
            Technologies
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Panel
