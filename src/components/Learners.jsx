import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import avatar from '../assets/avatar.jpg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const Learners = () => {
  const learners = useSelector((state) => state.learners);
  const professions = useSelector((state) => state.professions);

  return (
    <div className="flex flex-wrap justify-center h-screen">
      { learners.map((learner) => (
        <div key={learner.id} className="flex flex-col items-center py-2 m-2 bg-white rounded-lg w-80 h-fit hover:shadow-2xl">
          <img className="object-cover w-24 h-24 rounded-full" src={learner.image ? learner.image : avatar} alt="" />
          <div className="name">
            Hi! I am&nbsp;
            <span className="text-btn">
              {learner.username}
            </span>
          </div>
          <div className="mt-1 text-center">
            <div className="mb-3">Specializing in</div>
            {professions.length === 0 ? <span>No profession yet</span> : professions.map((profession) => <span key={profession} className="px-2 py-1 m-1 text-gray-600 bg-green-300 border-2 border-gray-300 rounded-md shadow-lg cursor-default hover:bg-green-100 hover:text-gray-800 hover:shadow-inner">{profession}</span>)}
          </div>
          <button type="button" className="mt-4 btn">
            <Link to={`/profile/${learner.id}`}>
              Explore
              {learner.name}
            </Link>
          </button>
          <div className="flex flex-wrap justify-center w-40 gap-4">
            {
                learner.github
                  ? (
                    <Link to={learner.github} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                      <img src={github} alt="GitHub Profile" />
                    </Link>
                  ) : <img src={github} alt="GitHub Profile" />
              }
            {
                learner.linkedin
                  ? (
                    <Link to={learner.linkedin} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                      <img src={linkedin} alt="LinkedIn Profile" />
                    </Link>
                  ) : <img src={linkedin} alt="LinkedIn Profile" />
              }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Learners;
