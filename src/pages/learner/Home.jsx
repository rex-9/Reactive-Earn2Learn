import Learners from "../../components/Learners";
import Panel from "../../components/Panel";
import { isAdmin } from "../../services/cookie";
import { useState } from "react";
import Users from "../../components/admin/Users";
import Studies from "../../components/admin/Studies";
import Technologies from "../../components/admin/Technologies";
import Certificates from "../../components/admin/Certificates";
import Invites from "../../components/Invite/invite.component";
const Home = () => {
  const [selected, setSelected] = useState("learners");
  return (
    <section className="flex flex-col font-qs h-[86%]">
      <div className="flex h-full">
        {isAdmin() && <Panel selected={selected} setSelected={setSelected} />}
        {/* <!-- Scroll wrapper --> */}
        <div className="flex-1 flex overflow-hidden">
          {/* <!-- Scrollable container --> */}
          <div className="flex-1 overflow-y-scroll">
            {/* <!-- Your content --> */}
            {selected === "users" ? (
              <Users />
            ) : selected === "studies" ? (
              <Studies />
            ) : selected === "technologies" ? (
              <Technologies />
            ) : selected === "certificates" ? (
              <Certificates />
            ) : (
              <Invites />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
