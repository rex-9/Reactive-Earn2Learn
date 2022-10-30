import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const Learners = () => {
  const learners = useSelector((state) => state.learners);

  return (
    <div className="flex flex-wrap justify-center h-screen bg-bg">
      {
        learners.map((learner) => (
          <div key={learner.id} className="flex flex-col items-center py-2 m-2 bg-white rounded-lg w-80 h-fit hover:shadow-2xl">
            <img className="object-cover w-24 h-24 rounded-full" src={learner.image} alt="" />
            <div className="name">
              Hi! I am&nbsp;
              <span className="text-btn">
                {learner.name}
              </span>
            </div>
            <div className="p-2">
              Learning fields under construction...
            </div>
            <button type="button" className="btn"><Link to={`/profile/${learner.id}`}>Explore More</Link></button>
            <div className="flex flex-wrap justify-around w-40 mt-2">
              <Link to={learner.github} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                <img src={github} alt="GitHub Profile" />
              </Link>
              <Link to={learner.linkedin} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                <img src={linkedin} alt="LinkedIn Profile" />
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Learners;
