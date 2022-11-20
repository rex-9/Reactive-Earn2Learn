import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLearners } from '../redux/reducers/learnerXer';

import HomeNav from '../components/HomeNav';
import Learners from '../components/Learners';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLearners());
  }, []);

  return (
    <>
      <HomeNav />
      <Learners />
    </>
  );
};

export default Home;
