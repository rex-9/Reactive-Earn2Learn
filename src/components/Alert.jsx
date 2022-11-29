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
    <div>
      <p>Alert</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => setAlert(false)}>Cancel</button>
    </div>
  )
}

export default Alert