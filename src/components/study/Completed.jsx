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
  const [commentToggle, setCommentToggle] = useState(false);

  const handleToggle = (id) => {
    setToggle(!toggle);
    setCurrent(id);
  };
  const handleCommentToggle = (id) => {
    setCommentToggle(!commentToggle);
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
      <div className="flex  font-qs w-full my-6">
        <div className="w-full">
          {edit && <EditStudy setEdit={setEdit} study={study} />}
          {alert && <Alert setAlert={setAlert} id={studyId} />}
          {studies.map((study) => (
            <div key={study.id} className="p-4 mb-4 rounded-lg bg-white border">
              <div className="text-gray-500 font-medium text-lg">
                Technology :{" "}
                <span className="font-medium text-black">
                  {study.technology.name}
                </span>
              </div>
              <div className="text-gray-500 font-medium">
                Topic :{" "}
                <span className="font-medium text-black text-lg">
                  {study.topic}
                </span>
              </div>

              <div className="text-blue-500 font-medium text-xs my-2 border px-2 rounded-lg inline-block">
                {study.hours_taken} hours taken
              </div>

              <div className="min-h-[100px] my-2 border">
                <p className="p-2 text-gray-500 font-medium">
                  Learning Experience :
                  <p className="text-black indent-8">{study.experience}</p>
                </p>
              </div>
              {getCookie("token") && (
                <div className="w-full flex justify-between">
                  <div>
                    <button
                      type="button"
                      onClick={() => handleLike(study.id)}
                      className="text-gray-500 font-medium hover:text-black"
                    >
                      Like{" "}
                      <span className="border rounded-md text-center">
                        &nbsp; {study.like_count} &nbsp;
                      </span>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={handleCommentToggle}
                      className="text-gray-500 font-medium mx-4 hover:text-black"
                    >
                      View Comments
                    </button>
                    <button
                      type="button"
                      id={`comment: ${study.id}`}
                      onClick={() => handleToggle(study.id)}
                      className="text-gray-500 font-medium hover:text-black"
                    >
                      Add a comment{" "}
                      {/* <span className="border rounded-md text-center">
                        &nbsp; {study.comment_count} &nbsp;
                      </span> */}
                    </button>
                  </div>
                </div>
              )}
              {currentUser.id === id && (
                <div className="w-full flex justify-between mt-5">
                  <button
                    type="button"
                    onClick={() => handleEdit(study.id)}
                    className="hover:border  px-2 py-1 rounded-lg  text-indigo-800"
                  >
                    Edit Post
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(study.id)}
                    className=" text-red-500 hover:border  px-2 py-1 rounded-lg "
                  >
                    Delete
                  </button>
                </div>
              )}
              {toggle && current === study.id && (
                <div className="flex flex-col items-end">
                  <textarea
                    type="text"
                    placeholder="Share your Opinion..."
                    onChange={(e) => setContent(e.target.value)}
                    className="p-2 min-h-[100px] w-full my-2 border resize-none"
                  />
                  <button type="button" onClick={() => handleComment(study.id)}>
                    Add Comment
                  </button>
                </div>
              )}

              {commentToggle && (
                <div className="mt-5 border rounded-lg">
                  {study.comments.map((comment) => (
                    <div key={comment.id} className="">
                      <p className="text-indigo-700 font-medium m-4   ">
                        {comment.username} :{" "}
                        <span className="text-black ">{comment.content}</span>{" "}
                      </p>
                    </div>
                  ))}
                </div>
              )}
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
