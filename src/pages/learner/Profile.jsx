import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchLearnerStudies } from "../../redux/reducers/studyXer";
import DisplayLearner from "../../components/learner/DisplayLearner";
import EditLearner from "../../components/learner/EditLearner";
import Completed from "../../components/study/Completed";
import Ongoing from "../../components/study/Ongoing";
import { endpoint, get } from "../../services/axios";
import { returnCurrentUser } from "../../services/cookie";
import { updateLearner } from "../../redux/reducers/learnerXer";
import "./profile.styles.css";
import { func } from "prop-types";

const Profile = () => {
  const [learner, setLearner] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentUser = returnCurrentUser();

  const fetchLearner = async (id) => {
    const response = await get(endpoint.learner(id));
    setLearner(response);
  };

  const studies = useSelector((state) => state.studies);
  const completed = studies.filter((study) => study.completed === true);
  const ongoing = studies.filter((study) => study.completed === false);

  const [edit, setEdit] = useState(false);
  const [accomplished, setAccomplished] = useState(true);
  const [completeTask, setCompleteTask] = useState(true);
  useEffect(() => {
    fetchLearner(id);
    dispatch(fetchLearnerStudies(id));
  }, [dispatch, id]);

  if (Object.keys(learner).length !== 0) {
    const learnerObj = {
      id: learner.id,
      views: learner.views + 1,
    };
    currentUser.id !== parseInt(id) && dispatch(updateLearner(learnerObj));
  }

  function handleTasks() {
    setCompleteTask(!completeTask);
  }

  return (
    <div className="flex mt-4 items-center justify-center overflow-y-hidden h-[84%] overflow-hidden ">
      <div className="flex w-[95%]  gap-2 h-full">
        {/* Learner Profile Data Section */}

        <div id="learner-data" className=" font-qs h-full">
          <DisplayLearner setEdit={setEdit} learner={learner} />
          {edit && <EditLearner setEdit={setEdit} learner={learner} />}
        </div>

        <div className=" flex flex-1  overflow-scroll overscroll-auto scroll-smooth scrollremove mb-6">
          <div className="flex-1 h-full">
            <h1 className="font-bold text-xl font-qs mx-5 mb-4">About Me</h1>
            <div className="mx-4 my-2 bg-indigo-900 rounded-md text-white py-6 px-10 min-h-[25%] select-none">
              <p>{learner.bio || "I'm a super learner"}</p>
            </div>
            {/* Learning Fields Section */}
            <section id="learning-field" className="px-4 mt-10">
              <div className="flex justify-between items-center mt-8  ">
                <h1 className="font-bold text-xl font-qs ">
                  My Learning Journey
                </h1>
                <button
                  onClick={handleTasks}
                  className="font-medium bg-gray-100 hover:bg-indigo-800 hover:text-white border  rounded-xl px-3 py-1"
                >
                  {completeTask ? "On Progress" : "Completed "}
                </button>
              </div>

              {completeTask ? (
                <Completed studies={completed} />
              ) : (
                <Ongoing studies={ongoing} />
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
