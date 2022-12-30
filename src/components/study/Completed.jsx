import PropTypes from "prop-types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { endpoint, reqWithToken } from "../../services/axios";
import { getCookie, returnCurrentUser } from "../../services/cookie";
import Alert from "../Alert";
import EditStudy from "./EditStudy";

const Completed = ({ studies }) => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const currentUser = returnCurrentUser();

  const [edit, setEdit] = useState();
  const [study, setStudy] = useState({});
  const [studyId, setStudyId] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleEdit = (id) => {
    setEdit(!edit);
    const temp = studies.find((study) => study.id === id);
    setStudy(temp);
  };

  const handleDelete = (id) => {
    setStudyId(id);
    setAlert(true);
  };

  const handleLike = async (id) => {
    setStudyId(id);
    await reqWithToken("POST", endpoint.likes(), {
      study_id: id,
      user_id: currentUser.id,
    });
    window.location.reload();
  };

  const [toggle, setToggle] = useState(false);
  const [content, setContent] = useState("");
  const [current, setCurrent] = useState(null);

  const handleToggle = (id) => {
    setToggle(!toggle);
    setCurrent(id);
  };

  const handleComment = async (id) => {
    await reqWithToken("POST", endpoint.comments(), {
      study_id: id,
      user_id: currentUser.id,
      username: currentUser.username,
      content,
    });
    window.location.reload();
  };

  return (
    <>
      <div className="flex  mx-16 font-qs w-[90%] my-8">
        <div className="w-full">
          {edit && <EditStudy setEdit={setEdit} study={study} />}
          {alert && <Alert setAlert={setAlert} id={studyId} />}
          {studies.map((study) => (
            <div
              key={study.id}
              className="p-4 text-white-400 mb-4 rounded-lg w-[90%] bg-slate-200"
            >
              <div className="mb-2 text-normal">{study.topic}</div>
              <div className="flex justify-between mb-5">
                <div className="text-blue-600">
                  {study.hours_taken} hours taken
                </div>
                <div className="px-2 py-1 text-gray-100 bg-slate-400 rounded-lg hover:text-green-500 hover:bg-gray-100 w-fit">
                  {study.technology.name}
                </div>
              </div>
              <div className="w-full">{study.experience}</div>
              {getCookie("token") && (
                <div className="w-full flex justify-between">
                  <div>
                    <button
                      type="button"
                      onClick={() => handleLike(study.id)}
                      className="px-6 py-3 bg-slate-400 rounded-lg text-white"
                    >
                      Like
                    </button>
                    <span className="text-green-600">
                      &nbsp; {study.like_count}&nbsp;
                    </span>
                  </div>
                  <div>
                    <span className="text-green-600">
                      {study.comment_count}&nbsp; &nbsp;
                    </span>
                    <button
                      type="button"
                      id={`comment: ${study.id}`}
                      onClick={() => handleToggle(study.id)}
                      className="px-6 py-3 bg-slate-400 rounded-lg text-white"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              )}
              {currentUser.id === id && (
                <div className="w-full flex justify-between mt-5">
                  <button
                    type="button"
                    onClick={() => handleEdit(study.id)}
                    className="px-6 py-3 bg-slate-400 rounded-lg text-white"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(study.id)}
                    className="px-6 py-3 bg-slate-400 rounded-lg text-white"
                  >
                    Delete
                  </button>
                </div>
              )}
              {toggle && current === study.id && (
                <div>
                  <input
                    type="text"
                    placeholder="Share your Opinion..."
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <button type="button" onClick={() => handleComment(study.id)}>
                    Comment
                  </button>
                </div>
              )}
              <div className="mt-5">
                {" "}
                {study.comments.map((comment) => (
                  <div key={comment.id}>
                    <span className="text-blue-500">
                      {comment.username}&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    </span>
                    {comment.content}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Completed.propTypes = {
  studies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      topic: PropTypes.string.isRequired,
      hours_taken: PropTypes.number.isRequired,
      like_count: PropTypes.number.isRequired,
      comment_count: PropTypes.number.isRequired,
      technology: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      comment: PropTypes.shape({
        content: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default Completed;
