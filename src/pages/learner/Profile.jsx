import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchLearnerStudies } from '../../redux/reducers/studyXer';
import DisplayLearner from '../../components/learner/DisplayLearner';
import EditLearner from '../../components/learner/EditLearner';
import Completed from '../../components/study/Completed';
import Ongoing from '../../components/study/Ongoing';
import { endpoint, get } from '../../services/axios';
import { returnCurrentUser } from '../../services/cookie';
import { updateLearner } from '../../redux/reducers/learnerXer';

const Profile = () => {
  const [learner, setLearner] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentUser = returnCurrentUser();

  const fetchLearner = async (id) => {
    const response = await get(endpoint.learner(id));
    setLearner(response);
  };

  const studies = useSelector((state) => state.studies);
  const completed = studies.filter((study) => study.completed === true);
  const ongoing = studies.filter((study) => study.completed === false);

  const [edit, setEdit] = useState(false);
  const [accomplished, setAccomplished] = useState(true);
  useEffect(() => {
    fetchLearner(id);
    dispatch(fetchLearnerStudies(id));
  }, [dispatch, id]);

  if (Object.keys(learner).length !== 0) {
    const learnerObj = {
      id: learner.id,
      views: learner.views + 1,
    };
    currentUser.id !== parseInt(id) && dispatch(updateLearner(learnerObj));
  }

  return (
    <>
      <section className="flex flex-col h-screen">
        <div className="flex h-[90%]">

          {/* Learner Profile Data Section */}
          <section id="learner-data">
            <div className="m-4 font-qs w-96">
              <div className="flex flex-col items-center bg-white/25 rounded-md shadow-inner shadow-black py-4 h-[95vh]">
                <DisplayLearner
                  setEdit={setEdit}
                  learner={learner}
                />
                {edit && (
                  <EditLearner
                    setEdit={setEdit}
                    learner={learner}
                  />
                )}
              </div>
            </div>
          </section>


          <div className="flex-1 flex overflow-hidden">
            {/* <!-- Scrollable container --> */}
            <div className="flex-1 overflow-y-scroll">
              <div className="mt-4 bg-white/25 rounded-md border-2 border-gray-300 p-4 ">
                <h1 className="font-bold text-lg font-qs">About Me</h1>
                <p>{learner.bio || "I'm a super learner"}</p>
              </div>
              {/* Learning Fields Section */}
              <section id="learning-field" className="px-4 py-4 mt-2">
                <h1 className="font-bold text-lg font-qs">My Learning Journey</h1>
                <div className="flex justify-center my-4">
                  <div className="w-full">
                    <button type="button" className={accomplished ? "bg-gradient-to-br from-white to-bg bg-no-repeat text-black shadow-inner shadow-gray-300 mr-4 rounded-md px-2 py-1" : "mr-4 text-gray-700 px-2 py-1"} onClick={() => setAccomplished(true)}>Completed</button>
                    <button type="button" className={!accomplished ? "bg-gradient-to-br from-white to-bg bg-no-repeat text-black shadow-inner shadow-gray-300 mr-4 rounded-md px-2 py-1" : "mr-4 text-gray-700 px-2 py-1"} onClick={() => setAccomplished(false)}>On Going</button>
                  </div>
                </div>
                {accomplished ? <Completed studies={completed} />
                  : <Ongoing studies={ongoing} />}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
