import { assets } from '../assets/assets';

const Panel = ({ setSelected }) => {

  return (
    <section className="pt-24 h-full w-48 bg-white shadow-lg">
      <ul className="flex flex-col gap-4">
        <li className="selected">
          <button type="button" className="flex items-center" onClick={() => setSelected('learners')} >
              <img src={assets.users} className="mr-2" alt="Learners Dashboard" />
              Learners
          </button>
        </li>
        <li className="selected">
          <button type="button" className="flex items-center" onClick={() => setSelected('users')} >
              <img src={assets.users} className="mr-2" alt="Users Dashboard" />
              Users
          </button>
        </li>
        <li className="selected">
          <button type="button" className="flex items-center" onClick={() => setSelected('studies')}>
            <img src={assets.studies} className="mr-2" alt="Studies Dashboard" />
            Studies
          </button>
        </li>
        <li className="selected">
          <button type="button" className="flex items-center" onClick={() => setSelected('certificates')}>
            <img src={assets.certificates} className="mr-2" alt="Certificates Dashboard" />
            Certificates
          </button>
        </li>
        <li className="selected">
          <button type="button" className="flex items-center" onClick={() => setSelected('technologies')}>
            <img src={assets.certificates} className="mr-2" alt="Technologies Dashboard" />
            Technologies
          </button>
        </li>
      </ul>
    </section>
  )
}

export default Panel
