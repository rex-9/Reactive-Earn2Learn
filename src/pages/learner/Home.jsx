import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLearners } from '../../redux/reducers/learnerXer';

import Nav from "../../components/Nav";
import Learners from '../../components/Learners';
import Panel from '../../components/Panel';
import { isAdmin } from '../../components/services/cookie';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLearners());
  }, [dispatch]);

  return (
    <>
      <Nav />
      {
        isAdmin() ? <Panel /> : <div />
      }
      <Learners />
    </>
  );
};

export default Home;
