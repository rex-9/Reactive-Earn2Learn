import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTechnology from "../../components/technology/EditTechnology";
import AddTechnology from "../../components/technology/AddTechnology";
import { fetchTechnologies, sortTechnologies } from "../../redux/reducers/technologyXer";
import Alert from '../../components/Alert';

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
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("id")}>ID</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("name")}>Name</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("users")}>Users</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("studies")}>Studies</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("certificates")}>Certificates</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            technologies.map((tech) => (
              <tr key={tech.id} className="even:bg-red-200 odd:bg-blue-200">
                <td className="border-r-[1px] border-gray-400 px-2">{tech.id}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{tech.name}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{tech.users.length}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{tech.studies.length}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{tech.certificates.length}</td>
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
