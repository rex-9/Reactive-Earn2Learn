import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import github from '../assets/github-black.svg';
import linkedin from '../assets/linkedin-black.svg';
import edit from '../assets/edit.png';

const Profile = () => {
  const { id } = useParams();
  const learners = useSelector((state) => state.learners);
  const learner = learners.filter((learner) => learner.id === parseInt(id, 10))[0];

  const studies = useSelector((state) => state.studies);

  return (
    <>
      {/* Learner Data Section */}
      <section id="learner-data">
        <div className="flex justify-center m-4 font-qs">
          <div className="bg-[#DEE2E6] rounded-md shadow-inner shadow-black p-4 w-[90%] flex items-start">

            {/* Learner Profile Picture */}
            <div className="w-[20%]">
              <img className="object-cover w-48 h-48" src={learner.image} alt="" />
              <div className="flex justify-around w-48 mt-2">
                <Link to={learner.github} className="p-1 rounded-lg hover:bg-white" target="_blank">
                  <img src={github} alt="GitHub Profile" />
                </Link>
                <Link to={learner.linkedin} className="p-1 rounded-lg hover:bg-white" target="_blank">
                  <img src={linkedin} alt="LinkedIn Profile" />
                </Link>
              </div>
            </div>

            {/* Learner Profile Data */}
            <div className="w-[77%]">
              <div className="text-xl font-bold">
                {learner.fullname}
                {' '}
                (
                {learner.username}
                )
              </div>
              <div className="">
                Age -
                {learner.age}
              </div>
              <div className="">
                City -
                {learner.city}
              </div>
              <div className="">
                Phone -
                {learner.phone}
              </div>
            </div>
            <button type="button">
              <img src={edit} alt="Edit Your Profile" />
            </button>
          </div>
        </div>
      </section>

      {/* Learning Fields Section */}
      <section id="learning-field">
        <div className="flex justify-center m-4 font-qs">
          <div className="w-[90%] p-4 bg-red-500">
            <div>
              <button type="button" className="mr-4 text-black bg-white rounded-xl btn">Accomplished Study</button>
              <button type="button" className="mr-4 rounded-xl btn bg-dark">On Going Study</button>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Tech</th>
                  <th>Topic</th>
                  <th>Learning Hour</th>
                </tr>
              </thead>
              <tbody>
                {
                  studies.map((study) => (
                    <tr key={study.id}>
                      <td className="text-center">{study.tech}</td>
                      <td className="text-center">{study.topic}</td>
                      <td className="text-center">{study.hour}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
