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
          <div className="bg-box rounded-md shadow-inner shadow-black p-4 w-[90%] flex items-start">

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
          <div className="w-[90%] p-4">
            <div>
              <button type="button" className="mr-4 text-black bg-box rounded-xl btn">Accomplished Study</button>
              <button type="button" className="mr-4 rounded-xl btn bg-dark">On Going Study</button>
            </div>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="w-[20%] bg-box py-2 border border-slate-500">Tech</th>
                  <th className="w-[60%] bg-box py-2 border border-slate-500">Topic</th>
                  <th className="w-[20%] bg-box py-2 border border-slate-500">Learning Hour</th>
                </tr>
              </thead>
              <tbody>
                {
                  studies.map((study) => (
                    <tr key={study.id} className="even:bg-blue-100 odd:bg-green-100">
                      <td className="py-2 text-center border rounded-lg border-slate-300">{study.tech}</td>
                      <td className="py-2 text-center border rounded-lg border-slate-300">{study.topic}</td>
                      <td className="py-2 text-center border rounded-lg border-slate-300">{study.hour}</td>
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
