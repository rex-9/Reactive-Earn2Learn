import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();

  return (
    <>
      <div>Profile</div>
      <div>{ id }</div>
    </>
  );
};

export default Profile;
