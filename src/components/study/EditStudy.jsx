import { useState } from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { updateStudy } from "../../redux/reducers/studyXer";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const EditStudy = ({ setEdit, study }) => {
  const dispatch = useDispatch();
  const [topic, setTopic] = useState(study.topic);
  const [experience, setExperience] = useState(study.experience);
  const [completed, setCompleted] = useState(study.completed);
  const [hoursTaken, setHoursTaken] = useState(study.hours_taken);

  const saveChanges = () => {
    setEdit(false);
    const studyObj = {
      id: study.id,
      topic,
      experience,
      completed,
      hours_taken: hoursTaken,
    };
    dispatch(updateStudy(studyObj));
  };

  return (
    <>
      <div className="bg-black/40 w-full flex justify-center h-screen items-center fixed top-0 left-0">
        <div className="bg-white p-4 my-2 rounded-lg overflow-y-auto">
          <div className="flex items-start justify-around pt-8 w-[600px]">
            <div className="flex flex-col items-center">
              <label htmlFor="topic">
                <div className="form-field">
                  <span>Topic:</span>
                  <input
                    defaultValue={study.topic}
                    type="text"
                    className="m-0 bg-box text-black input w-96"
                    placeholder="E.g. State Management"
                    onChange={(e) => setTopic(e.target.value)}
                    id="topic"
                  />
                </div>
              </label>
              <label htmlFor="experience">
                <div className="form-field">
                  <span>Experience:</span>
                  <input
                    defaultValue={study.experience}
                    type="text"
                    className="m-0 bg-box input w-96"
                    placeholder="E.g. Htet Naing"
                    onChange={(e) => setExperience(e.target.value)}
                    id="experience"
                  />
                </div>
              </label>
              <label htmlFor="completed">
                <div className="form-field">
                  <span>Completed:</span>
                  <input
                    defaultValue={study.completed}
                    type="text"
                    className="m-0 bg-box input w-96"
                    placeholder="E.g. htetnaing0814@gmail.com"
                    onChange={(e) => setCompleted(e.target.value)}
                    id="completed"
                  />
                </div>
              </label>
              <label htmlFor="hoursTaken">
                <div className="form-field">
                  <span>Hours Taken:</span>
                  <input
                    defaultValue={study.hours_taken}
                    type="text"
                    className="m-0 bg-box input w-96"
                    placeholder="E.g. https://www.unsplash.com/hello.jpg"
                    onChange={(e) => setHoursTaken(e.target.value)}
                    id="hoursTaken"
                  />
                </div>
              </label>
              <div className="text-right w-[500px]">
                <button type="button" className="btn" onClick={saveChanges}>
                  Save Changes
                </button>
              </div>
            </div>

            <button type="button" onClick={() => setEdit(false)}>
              <FontAwesomeIcon icon={faClose} className="h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

EditStudy.propTypes = {
  setEdit: PropTypes.func.isRequired,
  study: PropTypes.shape({
    id: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
    experience: PropTypes.string,
    completed: PropTypes.bool.isRequired,
    hours_taken: PropTypes.number,
  }).isRequired,
};

export default EditStudy;
