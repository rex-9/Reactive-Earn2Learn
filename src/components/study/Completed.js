import PropTypes from 'prop-types';

const Completed = ({ studies }) => (
  <>
    <div className="flex justify-center m-4 font-qs">
      <div className="w-[90%] flex justify-around flex-wrap">
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
            </div>
          ))
        }
        {/* <table className="w-full border-collapse">
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
                  <td className="py-2 text-center border rounded-lg border-slate-300">{study.technology.name}</td>
                  <td className="py-2 text-center border rounded-lg border-slate-300">{study.topic}</td>
                  <td className="py-2 text-center border rounded-lg border-slate-300">{study.hours_taken}</td>
                </tr>
              ))
            }
          </tbody>
        </table> */}
      </div>
    </div>
  </>
);

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
