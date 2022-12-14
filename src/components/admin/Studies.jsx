import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditStudy from "../study/EditStudy";
import { fetchStudies, sortStudies } from "../../redux/reducers/studyXer";
import Alert from '../Alert';

const Studies = () => {
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState(false);
  const studies = useSelector((state) => state.studies);
  const [study, setStudy] = useState({});
  const [id, setId] = useState({});
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    setEdit(!edit)
    const temp = studies.find((study) => study.id === id);
    setStudy(temp)
  }

  const handleDelete = (id) => {
    setAlert(true);
    setId(id);
  }

  const [asc, setAsc] = useState(true);

  const sort = (attr) => {
    dispatch(sortStudies({ attr, dir: asc ? "asc" : "desc" }));
    setAsc(!asc);
  }

  useEffect(() => {
    dispatch(fetchStudies());
  }, [dispatch])

  return (
    <section className="text-center flex flex-col items-center">
      {edit && (
        <EditStudy
          setEdit={setEdit}
          study={study}
        />
      )}
      {alert && (
        <Alert
          setAlert={setAlert}
          id={id}
          obj={"study"}
        />
      )}
      <p className="my-4 font-bold text-xl">Studies</p>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="table-head"><button type="button" onClick={() => sort("id")}>ID</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("topic")}>Topic</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("experience")}>Experience</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("hours_taken")}>Hours Taken</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("user")}>User</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("tech")}>Technology</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("likes")}>Likes</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("comments")}>Comments</button></th>
            <th className="table-head">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            studies.map((study) => (
              <tr key={study.id} className="table-stripe font-semibold">
                <td className="table-data">{study.id}</td>
                <td className="table-data">{study.topic}</td>
                <td className="table-data">{study.experience}</td>
                <td className="table-data">{study.hours_taken}</td>
                <td className="table-data">{study.user?.username}</td>
                <td className="table-data">{study.technology?.name}</td>
                <td className="table-data">{study.like_count}</td>
                <td className="table-data">{study.comment_count}</td>
                <td>
                  <button className="btn mx-2" onClick={() => handleEdit(study.id)}>Edit</button>
                  <button className="btn bg-red-400 mr-2 hover:bg-red-600" onClick={() => handleDelete(study.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
};

export default Studies;
