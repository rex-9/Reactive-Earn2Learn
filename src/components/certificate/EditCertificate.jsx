import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateCertificate } from '../../redux/reducers/certificateXer';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const EditCertificate = ({
  setEdit,
  certificate,
  setCertificate,
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(certificate.title);
  const [link, setLink] = useState(certificate.link);
  const [achievedDate, setAchievedDate] = useState(certificate.achieved_date);
  const [expirationDate, setExpirationDate] = useState(certificate.expiration_date);

  const saveChanges = () => {
    const obj = {
      id: certificate.id,
      title,
      link,
      achieved_date: achievedDate,
      expiration_date: expirationDate,
    };
    dispatch(updateCertificate(obj));
    setEdit(false);
  };

  useEffect(() => {

  }, [certificate])

  return (
    <>
      <div className="bg-black/40 w-full flex justify-center items-center h-screen fixed top-0 left-0">
        <div className="bg-white p-4 my-2 rounded-lg overflow-y-auto">
          <div className="flex items-start justify-around pt-8 w-[600px]">
            <div className="flex flex-col items-center">
              <label htmlFor="title">
                <div className="form-field">
                  <span>Title:</span>
                  <input defaultValue={certificate.title} type="text" className="m-0 bg-box input w-96" placeholder="E.g. Rex" onChange={(e) => setTitle(e.target.value)} id="title" />
                </div>
              </label>
              <label htmlFor="link">
                <div className="form-field">
                  <span>Link:</span>
                  <input defaultValue={certificate.link} type="text" className="m-0 bg-box input w-96" placeholder="E.g. Htet Naing" onChange={(e) => setLink(e.target.value)} id="link" />
                </div>
              </label>
              <label htmlFor="achieved-date">
                <div className="form-field">
                  <span>Achieved Date:</span>
                  <input defaultValue={certificate.achieved_date} type="text" className="m-0 bg-box input w-96" placeholder="E.g. htetnaing0814@gmail.com" onChange={(e) => setAchievedDate(e.target.value)} id="achieved-date" />
                </div>
              </label>
              <label htmlFor="expiration-date">
                <div className="form-field">
                  <span>Expiration Date:</span>
                  <input defaultValue={certificate.expiration_date} type="text" className="m-0 bg-box input w-96" placeholder="E.g. https://www.unsplash.com/hello.jpg" onChange={(e) => setExpirationDate(e.target.value)} id="expiration-date" />
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

EditCertificate.propTypes = {
  setEdit: PropTypes.func.isRequired,
  certificate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    achieved_date: PropTypes.string,
    expiration_date: PropTypes.string,
  }).isRequired,
};

export default EditCertificate;
