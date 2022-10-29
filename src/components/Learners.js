import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const Learners = () => {
  const learners = useSelector((state) => state.learners);

  return (
    <div className="flex flex-wrap justify-center bg-primary">
      {
        learners.map((learner) => (
          <div key={learner.id} className="flex flex-col items-center py-2 m-2 bg-white rounded-lg w-80 hover:shadow-2xl">
            <img className="object-cover w-24 h-24 rounded-full" src={learner.image} alt="" />
            <div className="flex justify-center border-b-[1px] w-[80%] font-bold border-b-gray-600 py-1 px-2">
              {learner.name}
            </div>
            <div className="p-2">
              Learning fields under construction...
            </div>
            <button type="button" className="w-40 px-4 py-2 text-gray-900 bg-yellow-500 rounded-lg hover:bg-yellow-300"><Link to={`/profile/${learner.id}`}>Explore More</Link></button>
            <div className="flex flex-wrap justify-around w-40 mt-2">
              <Link to={learner.github} className="p-1 rounded-lg hover:bg-gray-300" target="_blank">
                <img src={github} alt="GitHub Profile" />
              </Link>
              <Link to={learner.linkedin} className="p-1 rounded-lg hover:bg-gray-300" target="_blank">
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
