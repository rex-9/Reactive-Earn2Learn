import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTechnology from "../technology/EditTechnology";
import AddTechnology from "../technology/AddTechnology";
import {
  fetchTechnologies,
  sortTechnologies,
} from "../../redux/reducers/technologyXer";
import Alert from "../Alert";

const Technologies = () => {
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [alert, setAlert] = useState(false);
  const technologies = useSelector((state) => state.technologies);
  const [technology, setTechnology] = useState({});
  const [id, setId] = useState({});
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    setEdit(!edit);
    const temp = technologies.find((tech) => tech.id === id);
    setTechnology(temp);
  };

  const handleDelete = (id) => {
    setAlert(true);
    setId(id);
  };

  const [asc, setAsc] = useState(true);

  const sort = (attr) => {
    dispatch(sortTechnologies({ attr, dir: asc ? "asc" : "desc" }));
    setAsc(!asc);
  };

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);

  return (
    <section className="text-center flex flex-col items-center">
      {add && <AddTechnology setAdd={setAdd} />}
      {edit && <EditTechnology setEdit={setEdit} technology={technology} />}
      {alert && <Alert setAlert={setAlert} id={id} obj={"technology"} />}

      <button
        className="text-indigo-700 p-4 font-semibold underline self-end mr-16"
        onClick={() => setAdd(true)}
      >
        Add New Technology
      </button>
      <div class="relative overflow-x-auto m-2 shadow-md sm:rounded-lg w-[95%]">
        {" "}
        <table className="w-full text-md">
          <thead className="text-sm text-gray-700  border bg-gray-100 ">
            <tr className="">
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("id")}>
                  ID
                </button>
              </th>
              <th className="">
                <button type="button" onClick={() => sort("name")}>
                  Name
                </button>
              </th>
              <th className="">
                <button type="button" onClick={() => sort("users")}>
                  Users
                </button>
              </th>
              <th className="">
                <button type="button" onClick={() => sort("studies")}>
                  Studies
                </button>
              </th>
              <th className="">
                <button type="button" onClick={() => sort("certificates")}>
                  Certificates
                </button>
              </th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {technologies.map((tech) => (
              <tr key={tech.id} className="border-b">
                <td className="py-4">{tech.id}</td>
                <td className="w-56">{tech.name}</td>
                <td className="w-56">{tech.users ? tech.users.length : 0}</td>
                <td className="w-56">{tech.users ? tech.studies.length : 0}</td>
                <td className="w-56">
                  {tech.users ? tech.certificates.length : 0}
                </td>
                <td className="w-56">
                  <button
                    className="text-indigo-700 px-4"
                    onClick={() => handleEdit(tech.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 px-4"
                    onClick={() => handleDelete(tech.id)}
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

export default Technologies;
