import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTechnology from "../technology/EditTechnology";
import AddTechnology from "../technology/AddTechnology";
import { fetchTechnologies, sortTechnologies } from "../../redux/reducers/technologyXer";
import Alert from '../Alert';

const Technologies = () => {
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [alert, setAlert] = useState(false);
  const technologies = useSelector((state) => state.technologies);
  const [technology, setTechnology] = useState({});
  const [id, setId] = useState({});
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    setEdit(!edit)
    const temp = technologies.find((tech) => tech.id === id);
    setTechnology(temp)
  }

  const handleDelete = (id) => {
    setAlert(true);
    setId(id);
  }

  const [asc, setAsc] = useState(true);

  const sort = (attr) => {
    dispatch(sortTechnologies({ attr, dir: asc ? "asc" : "desc" }));
    setAsc(!asc);
  }

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch])

  return (
    <section className="text-center flex flex-col items-center">
      {
        add && (
          <AddTechnology
            setAdd={setAdd} />
        )
      }
      {edit && (
        <EditTechnology
          setEdit={setEdit}
          technology={technology}
        />
      )}
      {alert && (
        <Alert
          setAlert={setAlert}
          id={id}
          obj={"technology"}
        />
      )}
      <p className="my-4 font-bold text-xl">Technologies</p>
      <button className="btn" onClick={() => setAdd(true)}>Add New Technology</button>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="table-head"><button type="button" onClick={() => sort("id")}>ID</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("name")}>Name</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("users")}>Users</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("studies")}>Studies</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("certificates")}>Certificates</button></th>
            <th className="table-head">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            technologies.map((tech) => (
              <tr key={tech.id} className="table-stripe font-semibold">
                <td className="table-data">{tech.id}</td>
                <td className="table-data">{tech.name}</td>
                <td className="table-data">{tech.users ? tech.users.length : 0}</td>
                <td className="table-data">{tech.users ? tech.studies.length : 0}</td>
                <td className="table-data">{tech.users ? tech.certificates.length : 0}</td>
                <td>
                  <button className="btn mx-2" onClick={() => handleEdit(tech.id)}>Edit</button>
                  <button className="btn bg-red-400 mr-2 hover:bg-red-600" onClick={() => handleDelete(tech.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
};

export default Technologies;
