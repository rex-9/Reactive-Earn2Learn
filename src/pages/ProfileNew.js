import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProfile } from '../redux/reducers/profileXer';

import DisplayProfile from '../components/profile/DisplayProfile';
import EditProfile from '../components/profile/EditProfile';
import Completed from '../components/study/Completed';
import Ongoing from '../components/study/Ongoing';

const activeStyle = {
  boxShadow: 'inset 0 0 5px #f8a100',
  backgroundColor: 'lightgreen',
  color: '#1a202c',
};

const inactiveStyle = {
  backgroundColor: 'lightgray',
  color: '#1a202c',
};

const Profile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const fetchProfileInfo = async () => {
    console.log('loading', loading);
    await dispatch(fetchProfile(id));
    setLoading(false);
  };

  useEffect(() => {
    console.log('Before Dispatch');
    fetchProfileInfo();
  }, []);

  if (!loading) {
    console.log('Profile: ', profile);
  }

  const completed = loading ? [] : profile.studies.filter((study) => study.completed === true);
  const ongoing = loading ? [] : profile.studies.filter((study) => study.completed === false);

  console.log(completed, ongoing);

  const [edit, setEdit] = useState(false);
  const [onGoing, setOnGoing] = useState(false);

  return (
    <>
      {
        loading ? <div>Loading</div> : (
          <section>
            {/* Learner Profile Data Section */}
            <section id="learner-data">
              <div className="flex justify-center m-4 font-qs">
                <div className="bg-box rounded-md shadow-inner shadow-black p-4 w-[90%] flex items-start">
                  {/* <DisplayProfile
                  setEdit={setEdit}
                  learner={profile}
                /> */}
                  {edit ? (
                    <div className="bg-black/40 w-full flex justify-center fixed top-0 left-0">
                      <div className="bg-white p-4 my-2 rounded-lg h-screen overflow-y-auto">
                        <EditProfile
                          setEdit={setEdit}
                          learner={profile}
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
                  <button type="button" className="mr-4 rounded-xl btn" style={onGoing ? activeStyle : inactiveStyle} onClick={() => setOnGoing(true)}>Completed</button>
                  <button type="button" className="mr-4 rounded-xl btn" style={!onGoing ? activeStyle : inactiveStyle} onClick={() => setOnGoing(false)}>On Going</button>
                </div>
              </div>
              {onGoing ? <Completed studies={completed} />
                : <Ongoing studies={ongoing} />}
            </section>
          </section>
        )
      }
    </>
  );
};

export default Profile;
