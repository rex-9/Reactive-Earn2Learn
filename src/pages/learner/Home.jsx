import Nav from "../../components/Nav";
import Learners from '../../components/Learners';
import Panel from '../../components/Panel';
import { isAdmin } from '../../services/cookie';
import { useState } from "react";
import Users from "../admin/Users";
import Studies from "../admin/Studies";
import Technologies from "../admin/Technologies";
import Certificates from "../admin/Certificates";

const Home = () => {
  const [selected, setSelected] = useState('learners');
  return (
    <section className="flex flex-col h-screen">
      <Nav />
      <div className="flex h-[90%]">
        {
          isAdmin() &&
          <Panel setSelected={setSelected} />
        }
        {/* <!-- Scroll wrapper --> */}
        <div className="flex-1 flex overflow-hidden">
          {/* <!-- Scrollable container --> */}
          <div className="flex-1 overflow-y-scroll">
            {/* <!-- Your content --> */}
            {
              selected === 'learners' ? <Learners /> :
              selected === 'users' ? <Users /> :
              selected === 'studies' ? <Studies /> :
              selected === 'technologies' ? <Technologies /> :
              <Certificates />
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
