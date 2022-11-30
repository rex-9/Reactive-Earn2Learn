import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../components/Alert";
import EditCertificate from "../../components/certificate/EditCertificate";
import { fetchCertificates } from "../../redux/reducers/certificateXer";

const Certificates = () => {
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState(false);
  const [id, setId] = useState(null);
  const certificates = useSelector((state) => state.certificates);
  const [certificate, setCertificate] = useState({});
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    setEdit(!edit)
    const temp = certificates.find((certificate) => certificate.id === id);
    setCertificate(temp)
  };

  const handleDelete = (id) => {
    setId(id);
    setAlert(true);
  }

  useEffect(() => {
    dispatch(fetchCertificates());
  }, [dispatch]);

  return (
    <section className="text-center flex flex-col items-center">
      {edit && (
        <EditCertificate
          setEdit={setEdit}
          certificate={certificate}
        />
      )}
      {alert && (
        <Alert
          setAlert={setAlert}
          id={id}
        />
      )}
      <p className="my-4 font-bold text-xl">Certificates</p>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">ID</th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">Title</th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">Link</th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">Achieved Date</th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">Expiration Date</th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">User</th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">Technology</th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            certificates.map((certificate) => (
              <tr key={certificate.id} className="even:bg-red-200 odd:bg-blue-200">
                <td className="border-r-[1px] border-gray-400 px-2">{certificate.id}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{certificate.title}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{certificate.link}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{certificate.achieved_date}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{certificate.expiration_date}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{certificate.user.username}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{certificate.technology.name}</td>
                <td>
                  <button className="btn mx-2" onClick={() => handleEdit(certificate.id)}>Edit</button>
                  <button className="btn bg-red-400 mr-2 hover:bg-red-600" onClick={() => handleDelete(certificate.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
};

export default Certificates;
