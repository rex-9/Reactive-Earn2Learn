import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchStudies } from '../redux/reducers/studyXer';

import DisplayProfile from '../components/profile/DisplayProfile';
import EditProfile from '../components/profile/EditProfile';
import Completed from '../components/study/Completed';
import Ongoing from '../components/study/Ongoing';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const learners = useSelector((state) => state.learners);
  const learner = learners.filter((learner) => learner.id === parseInt(id, 10))[0];

  const studies = useSelector((state) => state.studies);
  const completed = studies.filter((study) => study.completed === true);
  const ongoing = studies.filter((study) => study.completed === false);

  const [edit, setEdit] = useState(false);
  const [accomplished, setAccomplished] = useState(true);

  const activeStyle = {
    boxShadow: 'inset 0 0 5px #f8a100',
    backgroundColor: 'lightgreen',
    color: '#1a202c',
  };

  const inactiveStyle = {
    backgroundColor: 'lightgray',
    color: '#1a202c',
  };

  useEffect(() => {
    // console.log('Hello Testing 124');
    // console.log('url', url);
    // console.log('id', id);
    // console.log('learners', learners);
    dispatch(fetchStudies(id));
  }, []);

  return (
    <>
      {/* Learner Profile Data Section */}
      <section id="learner-data">
        <div className="flex justify-center m-4 font-qs">
          <div className="bg-box rounded-md shadow-inner shadow-black p-4 w-[90%] flex items-start">
            <DisplayProfile
              setEdit={setEdit}
              learner={learner}
            />
            {edit ? (
              <div className="bg-black/40 w-full flex h-[200%] justify-center fixed top-0 left-0">
                <div className="bg-white p-4 my-2 rounded-lg">
                  <EditProfile
                    setEdit={setEdit}
                    learner={learner}
                  />
                </div>
              </div>
            )
              : (
                <div />
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
