import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const OngoingTasks = ({ studies }) => {
  const techs = useSelector((state) => state.techs);

  return (
    <>
      <div className="flex justify-center m-4 font-qs">
        <div className="w-[90%]">
          <div className="w-[35%] flex justify-between">
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
              <div key={study.tech} className="flex items-center justify-between p-2 mb-2 rounded-md bg-box">
                <div>
                  {study.tech}
                </div>
                <input type="number" placeholder=" ___ Hours" className="p-2 text-center rounded-md" />
                <button type="button" className="btn">Complete</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

OngoingTasks.propTypes = {
  studies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tech: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default OngoingTasks;
