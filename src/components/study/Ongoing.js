import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addStudy, updateStudy } from '../../redux/reducers/studyXer';

import close from '../../assets/close.png';

const Ongoing = ({ studies }) => {
  const techs = useSelector((state) => state.technologies);
  const dispatch = useDispatch();

  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [topic, setTopic] = useState('');
  const [techId, setTechId] = useState(0);
  const [experience, setExperience] = useState('');
  const [hoursTaken, setHoursTaken] = useState(0);

  const addStudyHandle = () => {
    setAddStatus(true);
    const newStudy = {
      id: studies.length,
      topic,
      user_id: 1,
      technology_id: techId,
    };
    dispatch(addStudy(newStudy));
  };

  const handleAdd = () => {
    addStudyHandle();
    setAddStatus(false);
  };

  const updateStudyHandle = () => {
    setUpdateStatus(true);
    const newStudy = {
      id: studies.length,
      topic,
      experience,
      hours_taken: hoursTaken,
      completed: true,
      user_id: 1,
      technology_id: techId,
    };
    dispatch(updateStudy(newStudy));
  };

  const handleUpdate = () => {
    updateStudyHandle();
    setUpdateStatus(false);
  };

  return (
    <>
      <div className="flex justify-center m-4 font-qs">
        <div className="w-[90%]">
          {addStatus
            ? (
              <div id="Add Study Form" className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-black/25">
                <div className="absolute p-4 bg-white rounded-lg w-96 h-fit">
                  <button className="float-right" onClick={() => setAddStatus(false)} type="button">
                    <img src={close} alt="close the popup" />
                  </button>
                  {/* <span className="float-right">x</span> */}
                  <div className="mb-4 text-lg font-bold text-center">Add a new Topic to learn</div>
                  <label htmlFor="topic">
                    <div>Topic:</div>
                    <textarea id="topic" className="text-white input" type="text" placeholder="Topic" onChange={(e) => setTopic(e.target.value)} />
                  </label>
                  <label htmlFor="technology">
                    <div>Technology:</div>
                    <select id="technology" className="text-white input" onChange={(e) => setTechId(e.target.value)}>
                      {techs.map((tech) => (<option value={tech.id} key={tech.id}>{tech.name}</option>))}
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
          {updateStatus
            ? (
              <div id="Update Study Form" className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-black/25">
                <div className="absolute p-4 bg-white rounded-lg w-96 h-fit">
                  <button className="float-right" onClick={() => setUpdateStatus(false)} type="button">
                    <img src={close} alt="close the popup" />
                  </button>
                  {/* <span className="float-right">x</span> */}
                  <div className="mb-4 text-lg font-bold text-center">Congratulations for Completion!</div>
                  <label htmlFor="topic">
                    <div>Topic:</div>
                    <textarea id="topic" className="text-white input" type="text" placeholder="Topic" onChange={(e) => setTopic(e.target.value)} />
                  </label>
                  <label htmlFor="technology">
                    <div>Technology:</div>
                    <select id="technology" className="text-white input" onChange={(e) => setTechId(e.target.value)}>
                      {techs.map((tech) => (<option value={tech.id} key={tech.id}>{tech.name}</option>))}
                    </select>
                  </label>
                  <label htmlFor="experience">
                    <div>Experience:</div>
                    <textarea id="experience" className="text-white input" type="text" placeholder="Experience" onChange={(e) => setExperience(e.target.value)} />
                  </label>
                  <label htmlFor="hoursTaken">
                    <div>Hours Taken:</div>
                    <textarea id="hoursTaken" className="text-white input" type="text" placeholder="Hours taken to complete" onChange={(e) => setHoursTaken(e.target.value)} />
                  </label>
                  <br />
                  <div className="flex justify-center">
                    <button type="button" className="btn" onClick={handleUpdate}>Complete</button>
                  </div>
                </div>
              </div>
            )
            : <div />}
          <button type="button" className="mb-4 btn" onClick={() => setAddStatus(true)}>Add a New Study</button>
          {
            techs.map((tech) => (<div key={tech.id}>{tech.name}</div>))
          }
          {
            studies.map((study) => (<div key={study.id}>{study.topic}</div>))
          }
          {/* <div className="w-[35%] flex justify-between">
            <input type="text" className="mr-4 placeholder-btn input bg-bg" placeholder="Add a New Tech to Learn" />
            <button type="button" className="btn">Add</button>
          </div>
          <div className="flex justify-between items-center w-[35%]">
            <select className="h-8 px-2 py-0 rounded-md bg-box">
              {
                techs.map((tech) => <option value={tech.name} key={tech.id}>{tech.name}</option>)
              }
            </select>
            <input type="text" className="input bg-bg placeholder-btn" placeholder="Add a New Topic to Learn" />
            <button type="button" className="btn">Add</button>
          </div>
          {
            studies.map((study) => (
              <div key={study.technology_id} className="flex items-center justify-between p-2 mb-2 rounded-md bg-box">
                <div>
                  {study.technology.name}
                </div>
                <input type="number" placeholder=" ___ Hours" className="p-2 text-center rounded-md" />
                <button type="button" className="btn">Complete</button>
              </div>
            ))
          } */}
        </div>
      </div>
    </>
  );
};

Ongoing.propTypes = {
  studies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tech: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Ongoing;
