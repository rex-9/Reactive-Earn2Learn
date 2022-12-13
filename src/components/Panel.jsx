import { assets } from '../assets/assets';

const Panel = ({ selected, setSelected }) => {

  const handleSelected = (label) => {
    return selected === label ? 'selected' : 'unselected';
  }

  return (
    <section className="pt-24 h-full w-48 bg-white shadow-lg">
      <ul className="flex flex-col gap-4">
        <li className={handleSelected('learners')}>
          <button type="button" className="flex items-center" onClick={() => setSelected('learners')} >
              <img src={selected === 'learners' ? assets.learnersWhite : assets.learners} className="mr-2" alt="Learners Dashboard" />
              Learners
          </button>
        </li>
        <li className={handleSelected('users')}>
          <button type="button" className="flex items-center" onClick={() => setSelected('users')} >
              <img src={selected === 'users' ? assets.usersWhite : assets.users} className="mr-2" alt="Users Dashboard" />
              Users
          </button>
        </li>
        <li className={handleSelected('studies')}>
          <button type="button" className="flex items-center" onClick={() => setSelected('studies')}>
            <img src={selected === 'studies' ? assets.studiesWhite : assets.studies} className="mr-2" alt="Studies Dashboard" />
            Studies
          </button>
        </li>
        <li className={handleSelected('certificates')}>
          <button type="button" className="flex items-center" onClick={() => setSelected('certificates')}>
            <img src={selected === 'certificates' ? assets.certificatesWhite : assets.certificates} className="mr-2" alt="Certificates Dashboard" />
            Certificates
          </button>
        </li>
        <li className={handleSelected('technologies')}>
          <button type="button" className="flex items-center" onClick={() => setSelected('technologies')}>
            <img src={selected === 'technologies' ? assets.usersWhite : assets.certificates} className="mr-2" alt="Technologies Dashboard" />
            Technologies
          </button>
        </li>
      </ul>
    </section>
  )
}

export default Panel
