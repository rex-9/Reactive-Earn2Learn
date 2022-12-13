import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLearners } from '../redux/reducers/learnerXer';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import assets from '../assets/assets';

const Learners = () => {
  const learners = useSelector((state) => state.learners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLearners());
  }, [dispatch]);

  return (
    <section className="flex flex-wrap justify-center" >
      {learners.map((learner) => (
        <Link to={`/profile/${learner.id}`}>
          <div key={learner.id} className="transition ease-linear py-2 m-2 h-fit bg-white hover:bg-gradient-to-br from-white to-bg bg-no-repeat border-2 border-gray-300 rounded-lg w-80 hover:shadow-2xl">
            <div className="flex px-6">
              <img className="object-cover w-24 h-24 rounded-full" src={learner.image ? learner.image : assets.avatar} alt="" />
              <div className="font-qs pl-2 pt-2">
                <p className="text-btn font-bold text-xl">
                  {learner.username}
                </p>
                <p>
                  {learner.goal}
                </p>
              </div>
            </div>
            <p className="text-center py-2">
              {learner.catchphrase}
            </p>
            {/* <div className="mt-1 text-center">
            <div className="mb-3">Specializing in</div>
            {
              learner.technologies.length === 0 ?
                <span>No profession yet</span> :
                learner.technologies.map((technology) => (
                  <span key={technology.id} className="px-2 py-1 m-1 text-gray-600 bg-green-300 border-2 border-gray-300 rounded-md shadow-lg cursor-default hover:bg-green-100 hover:text-gray-800 hover:shadow-inner">
                    {technology.name}
                  </span>
                ))
            }
          </div> */}
            {/* <button type="button" className="btn hidden group-hover:inline">
              Explore
              {learner.name}
          </button> */}
            {/* <div className="flex flex-wrap justify-center w-40 gap-4">
            {
              learner.github
                ? (
                  <Link to={learner.github} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                    <img src={assets.github} alt="GitHub Profile" />
                  </Link>
                ) : <img src={assets.github} alt="GitHub Profile" />
            }
            {
              learner.linkedin
                ? (
                  <Link to={learner.linkedin} className="p-1 rounded-lg hover:bg-gray-200" target="_blank">
                    <img src={assets.linkedin} alt="LinkedIn Profile" />
                  </Link>
                ) : <img src={assets.linkedin} alt="LinkedIn Profile" />
            }
          </div> */}
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Learners;
