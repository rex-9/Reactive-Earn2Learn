import { useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateTechnology } from '../../redux/reducers/technologyXer';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const EditTechnology = ({
  setEdit,
  technology,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(technology.name);

  const saveChanges = () => {
    const techObj = {
      id: technology.id,
      name,
    };
    dispatch(updateTechnology(techObj));
    setEdit(false);
    // window.location.reload();
  };

  return (
    <>
      <div className="bg-black/40 w-full flex justify-center h-screen items-center fixed top-0 left-0">
        <div className="bg-white p-4 my-2 rounded-lg overflow-y-auto">
          <div className="flex items-start justify-around pt-8 w-[600px]">
            <div className="flex flex-col items-center">
              <label htmlFor="name">
                <div className="form-field">
                  <span>Name:</span>
                  <input defaultValue={technology.name} type="text" className="m-0 bg-box input w-96" placeholder="E.g. React" onChange={(e) => setName(e.target.value)} id="name" />
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

EditTechnology.propTypes = {
  setEdit: PropTypes.func.isRequired,
  technology: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditTechnology;
