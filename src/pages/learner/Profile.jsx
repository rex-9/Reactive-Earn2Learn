import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchLearnerStudies } from '../../redux/reducers/studyXer';
import DisplayLearner from '../../components/learner/DisplayLearner';
import EditLearner from '../../components/learner/EditLearner';
import Completed from '../../components/study/Completed';
import Ongoing from '../../components/study/Ongoing';
import { endpoint, get } from '../../services/axios';

const Profile = () => {
  const [learner, setLearner] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

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

  const activeStyle = {
    boxShadow: 'inset 0 0 5px #f8a100',
    backgroundColor: 'lightgreen',
    color: '#1a202c',
  };

  const inactiveStyle = {
    backgroundColor: 'lightgray',
    color: '#1a202c',
  };

  return (
    <>
      <section className="flex flex-col h-screen">
        <div className="flex h-[90%]">

          {/* Learner Profile Data Section */}
          <section id="learner-data">
            <div className="m-4 font-qs w-96">
              <div className="flex flex-col items-center bg-box rounded-md shadow-inner shadow-black p-4 h-[95vh]">
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
              {/* Learning Fields Section */}
              <section id="learning-field">
                <div className="flex justify-center m-4">
                  <div className="w-[90%] p-4">
                    <button type="button" className="mr-4 rounded-xl btn" style={accomplished ? activeStyle : inactiveStyle} onClick={() => setAccomplished(true)}>Completed</button>
                    <button type="button" className="mr-4 rounded-xl btn" style={!accomplished ? activeStyle : inactiveStyle} onClick={() => setAccomplished(false)}>On Going</button>
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
