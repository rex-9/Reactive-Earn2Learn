import PropTypes from 'prop-types';

const AccomplishedTasks = ({ studies }) => (
  <>
    <div className="flex justify-center m-4 font-qs">
      <div className="w-[90%]">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-[20%] bg-box py-2 border border-slate-500">Tech</th>
              <th className="w-[60%] bg-box py-2 border border-slate-500">Topic</th>
              <th className="w-[20%] bg-box py-2 border border-slate-500">Learning Hour</th>
            </tr>
          </thead>
          <tbody>
            {
              studies.map((study) => (
                <tr key={study.id} className="even:bg-blue-100 odd:bg-green-100">
                  <td className="py-2 text-center border rounded-lg border-slate-300">{study.technology_id}</td>
                  <td className="py-2 text-center border rounded-lg border-slate-300">{study.topic}</td>
                  <td className="py-2 text-center border rounded-lg border-slate-300">{study.hours_taken}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </>
);

AccomplishedTasks.propTypes = {
  studies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      technology_id: PropTypes.number.isRequired,
      topic: PropTypes.string.isRequired,
      hours_taken: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default AccomplishedTasks;
