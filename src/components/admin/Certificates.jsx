import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../Alert";
import EditCertificate from "../certificate/EditCertificate";
import { fetchCertificates, sortCertificates } from "../../redux/reducers/certificateXer";

const Certificates = () => {
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState(false);
  const [id, setId] = useState(null);
  const certificates = useSelector((state) => state.certificates);
  const [certificate, setCertificate] = useState({});
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    setEdit(!edit);
    const temp = certificates.find((certificate) => certificate.id === id);
    setCertificate(temp);
  };

  const handleDelete = (id) => {
    setId(id);
    setAlert(true);
  };

  const [asc, setAsc] = useState(true);

  const sort = (attr) => {
    dispatch(sortCertificates({ attr, dir: asc ? "asc" : "desc" }));
    setAsc(!asc);
  };

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
          obj={"certificate"}
        />
      )}
      <p className="my-4 font-bold text-xl">Certificates</p>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="table-head"><button type="button" onClick={() => sort("id")}>ID</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("title")}>Title</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("link")}>Link</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("achieved_date")}>Achieved Date</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("expiration_date")}>Expiration Date</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("user")}>User</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("tech")}>Technology</button></th>
            <th className="table-head">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            certificates.map((certificate) => (
              <tr key={certificate.id} className="table-stripe font-semibold">
                <td className="table-data">{certificate.id}</td>
                <td className="table-data">{certificate.title}</td>
                <td className="table-data">{certificate.link}</td>
                <td className="table-data">{certificate.achieved_date}</td>
                <td className="table-data">{certificate.expiration_date}</td>
                <td className="table-data">{certificate.user.username}</td>
                <td className="table-data">{certificate.technology.name}</td>
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
