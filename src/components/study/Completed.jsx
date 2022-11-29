import PropTypes from 'prop-types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { returnCurrentUser } from '../../services/cookie';
import Alert from '../Alert';
import EditStudy from './EditStudy';

const Completed = ({ studies }) => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const currentUser = returnCurrentUser();

  const [edit, setEdit] = useState();
  const [study, setStudy] = useState({});
  const [studyId, setStudyId] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleEdit = (id) => {
    setEdit(!edit)
    const temp = studies.find((study) => study.id === id);
    setStudy(temp)
  }

  const handleDelete = (id) => {
    setStudyId(id);
    setAlert(true);
  }

  return (
    <>
      <div className="flex justify-center m-4 font-qs">
        <div className="w-[90%] flex justify-around flex-wrap">
          {edit && (
            <div className="bg-black/40 w-full flex justify-center fixed top-0 left-0">
              <div className="bg-white p-4 my-2 rounded-lg h-screen overflow-y-auto">
                <EditStudy
                  setEdit={setEdit}
                  study={study}
                />
              </div>
            </div>
          )}
          {alert && (
            <div className="bg-black/40 w-full flex justify-center fixed top-0 left-0">
              <div className="bg-white p-4 my-2 rounded-lg h-screen overflow-y-auto">
                <Alert
                  setAlert={setAlert}
                  id={studyId}
                />
              </div>
            </div>
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
                  currentUser.id === id
                  && (
                    <div>
                      <button type="button" onClick={() => handleEdit(study.id)}>Edit</button>
                      <button type="button" onClick={() => handleDelete(study.id)}>Delete</button>
                    </div>
                  )
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
