import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const OngoingTasks = ({ studies }) => {
  const techs = useSelector((state) => state.techs);

  return (
    <>
      <div className="flex justify-center m-4 font-qs">
        <div className="w-[90%]">
          <div>
            <input type="text" placeholder="Add a New Tech to Learn" />
            <button type="button" className="btn">Add</button>
          </div>
          <div>
            <select>
              {
                techs.map((tech) => <option value={tech.name} key={tech.id}>{tech.name}</option>)
              }
            </select>
            <input type="text" placeholder="Add a New Topic to Learn" />
            <button type="button">Add</button>
          </div>
          {
            studies.map((study) => <div key={study.tech}>{study.tech}</div>)
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
