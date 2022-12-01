import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { endpoint, reqWithToken } from '../../services/axios';
import { getCookie, returnCurrentUser } from '../../services/cookie';
import Alert from '../Alert';
import EditStudy from './EditStudy';

const Completed = ({ studies }) => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const currentUser = returnCurrentUser();

  const learners = useSelector((state) => state.learners);
  console.log('Learners', learners);
  const [edit, setEdit] = useState();
  const [study, setStudy] = useState({});
  const [studyId, setStudyId] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleEdit = (id) => {
    setEdit(!edit)
    const temp = studies.find((study) => study.id === id);
    setStudy(temp)
  };

  const handleDelete = (id) => {
    setStudyId(id);
    setAlert(true);
  };

  const handleLike = async (id) => {
    setStudyId(id);
    await reqWithToken("POST", endpoint.likes(), { study_id: id, user_id: currentUser.id })
    window.location.reload();
  };

  const [toggle, setToggle] = useState(false);
  const [content, setContent] = useState('');
  const [current, setCurrent] = useState(null);


  const handleToggle = (id) => {
    setToggle(!toggle);
    setCurrent(id);
  };

  const handleComment = async (id) => {
    await reqWithToken("POST", endpoint.comments(), { study_id: id, user_id: currentUser.id, username: currentUser.username, content })
    window.location.reload();
  }

  return (
    <>
      <div className="flex justify-center m-4 font-qs">
        <div className="w-[90%] flex justify-around flex-wrap">
          {edit && (
            <EditStudy
              setEdit={setEdit}
              study={study}
            />
          )}
          {alert && (
            <Alert
              setAlert={setAlert}
              id={studyId}
            />
          )}
          {
            studies.map((study) => (
              <div key={study.id} className="p-4 text-gray-700 bg-white mb-4 rounded-lg w-[500px] hover:shadow-lg">
                <div className="mb-2 text-lg font-bold">
                  {study.topic}
                </div>
                <div className="flex justify-between">
                  <div className="text-green-500">
                    {study.hours_taken}
                    {' '}
                    hours
                  </div>
                  <div className="px-2 py-1 text-gray-100 bg-green-500 rounded-lg hover:text-green-500 hover:bg-gray-100 w-fit">
                    {study.technology.name}
                  </div>
                </div>
                <div>
                  {study.experience}
                </div>
                {
                  getCookie('token') &&
                  <div className="w-full bg-green-300 flex justify-between">
                    <div>
                      <button type="button" onClick={() => handleLike(study.id)}>Like</button>
                      <span>{study.likes.length}</span>
                    </div>
                    <div>
                      <button type="button" id={`comment: ${study.id}`} onClick={() => handleToggle(study.id)}>Comment</button>
                      <span>{study.comments.length}</span>
                    </div>
                  </div>
                }
                {
                  currentUser.id === id
                  && (
                    <div className="w-full bg-red-300 flex justify-between">
                      <button type="button" onClick={() => handleEdit(study.id)}>Edit</button>
                      <button type="button" onClick={() => handleDelete(study.id)}>Delete</button>
                    </div>
                  )
                }
                {
                  toggle && current === study.id &&
                  <div>
                    <input type="text" placeholder="Share your Opinion..." onChange={(e) => setContent(e.target.value)} />
                    <button type="button" onClick={() => handleComment(study.id)}>Comment</button>
                  </div>
                }
                {
                  study.comments.map((comment) => (
                    <div key={comment.id}>
                      {comment.username}
                      {comment.content}
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
};

Completed.propTypes = {
  studies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      technology: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      topic: PropTypes.string.isRequired,
      hours_taken: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Completed;
