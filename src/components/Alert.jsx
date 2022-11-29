import { useDispatch } from "react-redux";
import { deleteStudy } from "../redux/reducers/studyXer";

const Alert = ({ id, setAlert }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteStudy(id));
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