import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../Alert";
import EditCertificate from "../certificate/EditCertificate";
import {
  fetchCertificates,
  sortCertificates,
} from "../../redux/reducers/certificateXer";

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
      {edit && <EditCertificate setEdit={setEdit} certificate={certificate} />}
      {alert && <Alert setAlert={setAlert} id={id} obj={"certificate"} />}
      <div class="relative overflow-x-auto m-2 shadow-md sm:rounded-lg w-[95%]">
        {" "}
        <table className="w-full text-md">
          <thead className="text-sm text-gray-700 border bg-gray-100 ">
            <tr>
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("id")}>
                  ID
                </button>
              </th>
              <th className="">
                <button type="button" onClick={() => sort("title")}>
                  Title
                </button>
              </th>

              <th className="">
                <button type="button" onClick={() => sort("achieved_date")}>
                  Achieved Date
                </button>
              </th>
              <th className="">
                <button type="button" onClick={() => sort("expiration_date")}>
                  Expiration Date
                </button>
              </th>
              <th className="">
                <button type="button" onClick={() => sort("user")}>
                  User
                </button>
              </th>
              <th className="">
                <button type="button" onClick={() => sort("tech")}>
                  Technology
                </button>
              </th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((certificate) => (
              <tr key={certificate.id} className="border-b">
                <td className="py-4">{certificate.id}</td>
                <td className="">
                  <a href="{certificate.link}">{certificate.title}</a>
                </td>

                <td className="">{certificate.achieved_date}</td>
                <td className="">{certificate.expiration_date}</td>
                <td className="">{certificate.user.username}</td>
                <td className="">{certificate.technology.name}</td>
                <td>
                  <button
                    className="text-indigo-700 px-4"
                    onClick={() => handleEdit(certificate.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 px-4"
                    onClick={() => handleDelete(certificate.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Certificates;
