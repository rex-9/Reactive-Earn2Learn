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
    setLearner(response.data);
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
      {/* Learner Profile Data Section */}
      <section id="learner-data">
        <div className="flex justify-center m-4 font-qs">
          <div className="bg-box rounded-md shadow-inner shadow-black p-4 w-[90%] flex items-start">
            <DisplayLearner
              setEdit={setEdit}
              learner={learner}
            />
            {edit && (
              <div className="bg-black/40 w-full flex h-screen justify-center fixed top-0 left-0">
                <div className="bg-white p-4 my-4 rounded-lg overflow-y-auto">
                  <EditLearner
                    setEdit={setEdit}
                    learner={learner}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Profile;
