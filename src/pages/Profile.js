import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const learners = useSelector((state) => state.learners);
  const learner = learners.filter((learner) => learner.id === parseInt(id, 10))[0];

  return (
    <>
      <div>Profile</div>
      <div>{id}</div>
      <div>{learner.username}</div>
    </>
  );
};

export default Profile;
