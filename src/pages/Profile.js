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

  return (
    <>
      {/* Learner Data Section */}
      <section id="learner-data">
        <DisplayProfile learner={learner} />
        <EditProfile />
      </section>

      {/* Learning Fields Section */}
      <section id="learning-field">
        <AccomplishedTasks studies={studies} />
        <OngoingTasks />
      </section>
    </>
  );
};

export default Profile;
