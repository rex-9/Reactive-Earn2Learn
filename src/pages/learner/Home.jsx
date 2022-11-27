import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLearners } from '../../redux/reducers/learnerXer';

import HomeNav from "../../components/HomeNav";
import Learners from '../../components/Learners';
import Panel from '../../components/Panel';
import { checkCookie, GetCookie } from '../../components/services/Cookie';

const Home = () => {
  const dispatch = useDispatch();
  const auth = () => {
    return checkCookie('user') && GetCookie('user').role === 'admin';
  }

  useEffect(() => {
    dispatch(fetchLearners());
  }, [dispatch]);

  return (
    <>
    {
      auth() ? <Panel /> : <div />
    }
      <HomeNav />
      <Learners />
    </>
  );
};

export default Home;
