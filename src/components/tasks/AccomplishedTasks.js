import PropTypes from 'prop-types';

const AccomplishedTasks = ({ studies }) => (
  <>
    <div className="flex justify-center m-4 font-qs">
      <div className="w-[90%] p-4">
        <div>
          <button type="button" className="mr-4 text-black bg-box rounded-xl btn">Accomplished Study</button>
          <button type="button" className="mr-4 rounded-xl btn bg-dark">On Going Study</button>
        </div>
        <table className="w-full mt-4 border-collapse">
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
                  <td className="py-2 text-center border rounded-lg border-slate-300">{study.tech}</td>
                  <td className="py-2 text-center border rounded-lg border-slate-300">{study.topic}</td>
                  <td className="py-2 text-center border rounded-lg border-slate-300">{study.hour}</td>
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
      tech: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default AccomplishedTasks;
