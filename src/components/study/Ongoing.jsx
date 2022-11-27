import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { addStudy, updateStudy } from '../../redux/reducers/studyXer';

import { fetchTechnologies } from '../../redux/reducers/technologyXer';
import { returnCurrentUser } from '../services/cookie';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Ongoing = ({ studies }) => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const dispatch = useDispatch();
  const techs = useSelector((state) => state.technologies);
  const currentUser = returnCurrentUser();

  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  const [currentStudyID, setCurrentStudyID] = useState('');
  const [topic, setTopic] = useState('');
  const [currentTopic, setCurrentTopic] = useState('');

  const [techId, setTechId] = useState(1);
  const [currentTechId, setCurrentTechId] = useState(0);
  const [experience, setExperience] = useState('');
  const [hoursTaken, setHoursTaken] = useState(0);

  useEffect(() => {
    if (Object.keys(currentUser).length !== 0 && currentUser.id === id) {
      dispatch(fetchTechnologies());
    }
  }, [dispatch]);

  const addStudyHandle = () => {
    setAddStatus(true);
    setTechId(techId);
    const newStudy = {
      topic,
      user_id: id,
      technology_id: techId,
    };
    dispatch(addStudy(newStudy));
  };

  const handleAdd = () => {
    addStudyHandle();
    setAddStatus(false);
    window.location.reload();
  };

  const updateStudyHandle = () => {
    const completeStudy = {
      id: currentStudyID,
      experience,
      hours_taken: hoursTaken,
      completed: true,
    };
    dispatch(updateStudy(completeStudy));
    setUpdateStatus(false);
    window.location.reload();
  };

  const openUpdate = (id) => {
    setUpdateStatus(true);
    const study = studies.find((study) => study.id === id);
    setCurrentStudyID(study.id);
    setCurrentTopic(study.topic);
    setCurrentTechId(study.technology.id);
  };

  return (
    <>
      <div className="flex justify-center m-4 font-qs">
        <div className="w-[90%]">
          {/* Add Study Section */}
          {addStatus
            ? (
              <div id="Add Study Form" className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-black/25">
                <div className="absolute p-4 bg-white rounded-lg w-96 h-fit">
                  <button className="float-right" onClick={() => setAddStatus(false)} type="button">
                    <FontAwesomeIcon icon={faClose} className="h-6" />
                  </button>
                  <div className="mb-4 text-lg font-bold text-center">Add a new Topic to learn</div>
                  <label htmlFor="topic">
                    <div>Topic:</div>
                    <textarea id="topic" className="text-white input" type="text" placeholder="Topic" onChange={(e) => setTopic(e.target.value)} />
                  </label>
                  <label htmlFor="technology">
                    <div>Technology:</div>
                    <select id="technology" className="text-white input" onChange={(e) => setTechId(e.target.value)}>
                      {techs.map((tech) => (
                        <option value={tech.id} key={tech.id}>
                          {tech.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <br />
                  <div className="flex justify-center">
                    <button type="button" className="btn" onClick={handleAdd}>Add</button>
                  </div>
                </div>
              </div>
            )
            : <div />}

          {/* Update Study Section */}
          {updateStatus
            ? (
              <div id="Update Study Form" className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-black/25">
                <div className="absolute p-4 bg-white rounded-lg w-96 h-fit">
                  <button className="float-right" onClick={() => setUpdateStatus(false)} type="button">
                    <FontAwesomeIcon icon={faClose} className="h-6" />
                  </button>
                  <div className="mb-4 text-lg font-bold text-center">Congratulations for Completion!</div>
                  <label htmlFor="topic">
                    <div>Topic:</div>
                    <textarea disabled id="topic" className="text-gray-200 bg-gray-700 input" type="text" placeholder="Topic" value={currentTopic} />
                  </label>
                  <label htmlFor="technology">
                    <div>Technology:</div>
                    <input disabled id="topic" className="text-gray-200 bg-gray-700 input" type="number" placeholder="Topic" value={currentTechId} />
                  </label>
                  <label htmlFor="experience">
                    <div>Experience:</div>
                    <textarea id="experience" className="text-white input" type="text" placeholder="Experience" onChange={(e) => setExperience(e.target.value)} />
                  </label>
                  <label htmlFor="hoursTaken">
                    <div>Hours Taken:</div>
                    <input id="hoursTaken" className="text-white input" type="number" placeholder="Hours taken to complete" onChange={(e) => setHoursTaken(e.target.value)} />
                  </label>
                  <br />
                  <div className="flex justify-center">
                    <button type="button" className="btn" onClick={() => updateStudyHandle()}>Complete</button>
                  </div>
                </div>
              </div>
            )
            : <div />}
          {
            currentUser.id === id
              ? <button type="button" className="mb-4 btn" onClick={() => setAddStatus(true)}>Add a New Study</button>
              : <div />
          }

          {/* Display Study List */}
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-[20%] bg-box py-2 border border-slate-500">Tech</th>
                <th className="w-[60%] bg-box py-2 border border-slate-500">Topic</th>
                <th className="w-[20%] bg-box py-2 border border-slate-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                studies.map((study) => (
                  <tr key={study.id} className="even:bg-blue-100 odd:bg-green-100">
                    <td className="py-2 text-center border rounded-lg border-slate-300">{study.technology.name}</td>
                    <td className="py-2 text-center border rounded-lg border-slate-300">{study.topic}</td>
                    <td className="py-2 text-center border rounded-lg border-slate-300">
                      {id === currentUser.id
                        ? <button type="button" className="btn" onClick={() => openUpdate(study.id)}>Complete</button>
                        : <div />}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

Ongoing.propTypes = {
  studies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      topic: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Ongoing;
