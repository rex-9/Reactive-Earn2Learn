import { useDispatch } from "react-redux";
import { deleteLearner } from "../redux/reducers/learnerXer";
import { deleteStudy } from "../redux/reducers/studyXer";

const Alert = ({ id, setAlert, obj }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (obj === "study") {
      dispatch(deleteStudy(id));
    } else if (obj === "learner") {
      dispatch(deleteLearner(id));
    }
    window.location.reload();
  };

  return (
    <div className="bg-black/40 w-full flex justify-center fixed top-0 left-0">
      <div className="bg-white p-4 my-2 rounded-lg h-screen overflow-y-auto">
        <p>Alert</p>
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button onClick={() => setAlert(false)}>Cancel</button>
      </div>
    </div>
  )
}

export default Alert