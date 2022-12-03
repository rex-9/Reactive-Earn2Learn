import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditStudy from "../../components/study/EditStudy";
import { fetchStudies, sortStudies } from "../../redux/reducers/studyXer";
import Alert from '../../components/Alert';

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
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("id")}>ID</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("topic")}>Topic</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("experience")}>Experience</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("hours_taken")}>Hours Taken</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("user")}>User</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("tech")}>Technology</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("likes")}>Likes</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("comments")}>Comments</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            studies.map((study) => (
              <tr key={study.id} className="even:bg-red-200 odd:bg-blue-200">
                <td className="border-r-[1px] border-gray-400 px-2">{study.id}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{study.topic}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{study.experience}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{study.hours_taken}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{study.user?.username}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{study.technology?.name}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{study.like_count}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{study.comment_count}</td>
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
