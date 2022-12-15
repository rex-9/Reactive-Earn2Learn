import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTechnology } from "../../redux/reducers/technologyXer"

const AddTechnology = ({ setAdd }) => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const saveChanges = () => {
    dispatch(addTechnology({ name }));
    setAdd(false);
  };

  const validates = () => {
    name ? saveChanges() : setError('Please enter the name.');
  }

  return (
    <div className="bg-black/40 w-full flex justify-center h-screen items-center fixed top-0 left-0">
      <div className="bg-white p-4 my-2 rounded-lg overflow-y-auto">
        <div className="flex items-start justify-around pt-8 w-[600px]">
          <div className="flex flex-col items-center">
            <label htmlFor="name">
              <div className="form-field">
                <span>Name:</span>
                <input type="text" className="m-0 bg-box input w-96" placeholder="E.g. React" onChange={(e) => setName(e.target.value)} id="name" />
              </div>
            </label>
            <div className="text-right w-[500px]">
              <button type="button" className="btn" onClick={validates}>
                Save Changes
              </button>
            </div>
            {
              error && <p className="text-red-400 text-center mt-4">{error}</p>
            }
          </div>

          <button type="button" onClick={() => setAdd(false)}>
            <FontAwesomeIcon icon={faClose} className="h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddTechnology