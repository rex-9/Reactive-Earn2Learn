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
    <section className="flex flex-col h-screen">
      <Nav />
      <div className="flex h-[90%]">
        {
          isAdmin() ?
            <div className="bg-yellow-200 w-96 h-full">
              <Panel />
            </div>
            : <div />
        }
        {/* <!-- Scroll wrapper --> */}
        <div class="flex-1 flex overflow-hidden">
          {/* <!-- Scrollable container --> */}
          <div class="flex-1 overflow-y-scroll">
            {/* <!-- Your content --> */}
            <Learners />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
