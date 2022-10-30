import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import DisplayProfile from '../components/profile/DisplayProfile';
import EditProfile from '../components/profile/EditProfile';
import AccomplishedTasks from '../components/tasks/AccomplishedTasks';
import OngoingTasks from '../components/tasks/OngoingTasks';

const Profile = () => {
  const { id } = useParams();
  const learners = useSelector((state) => state.learners);
  const learner = learners.filter((learner) => learner.id === parseInt(id, 10))[0];

  const studies = useSelector((state) => state.studies);

  const [edit, setEdit] = useState(false);
  const [accomplished, setAccomplished] = useState(true);

  return (
    <>
      {/* Learner Data Section */}
      <section id="learner-data">
        {!edit ? <DisplayProfile learner={learner} setEdit={setEdit} />
          : <EditProfile />}
      </section>

      {/* Learning Fields Section */}
      <section id="learning-field">
        <div className="flex justify-center m-4">
          <div className="w-[90%] p-4">
            <button type="button" className="mr-4 text-black bg-box rounded-xl btn" onClick={() => setAccomplished(true)}>Accomplished Study</button>
            <button type="button" className="mr-4 rounded-xl btn bg-dark" onClick={() => setAccomplished(false)}>On Going Study</button>
          </div>
        </div>
        {accomplished ? <AccomplishedTasks studies={studies} />
          : <OngoingTasks studies={studies} />}
      </section>
    </>
  );
};

export default Profile;
