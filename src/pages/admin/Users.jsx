import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLearners, sortLearners } from "../../redux/reducers/learnerXer";
import EditLearner from "../../components/learner/EditLearner";
import avatar from "../../assets/avatar.jpg";
import Alert from "../../components/Alert";

const Users = () => {
  const [edit, setEdit] = useState(false);
  const learners = useSelector((state) => state.learners);
  const [learner, setLearner] = useState({});
  const dispatch = useDispatch();

  const [alert, setAlert] = useState(false);
  const [id, setId] = useState({});

  const handleDelete = (id) => {
    setAlert(true);
    setId(id);
  }

  const handleEdit = (id) => {
    setEdit(!edit)
    const temp = learners.find((learner) => learner.id === id);
    setLearner(temp)
  };

  const [asc, setAsc] = useState(true);

  const sort = (attr) => {
    dispatch(sortLearners({ attr, dir: asc ? "asc" : "desc" }));
    setAsc(!asc);
  }

  useEffect(() => {
    dispatch(fetchLearners())
  }, [dispatch]);

  return (
    <section className="text-center flex flex-col items-center">
      {edit && (
        <EditLearner
          setEdit={setEdit}
          learner={learner}
        />
      )}
      {alert && (
        <Alert
          setAlert={setAlert}
          id={id}
          obj={"learner"}
        />
      )}
      <p className="my-4 font-bold text-xl">Users</p>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("id")}>ID</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">Image</th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("username")}>Username</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("fullname")}>Full Name</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("goal")}>Goal</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("email")}>Email</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("city")}>City</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("phone")}>Phone</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("bio")}>Bio</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("role")}>Role</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("techs")}>Technologies</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("studies")}>Studies</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1"><button type="button" onClick={() => sort("certificates")}>Certificates</button></th>
            <th className="border-2 bg-slate-300 border-slate-200 px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            learners.map((learner) => (
              <tr key={learner.id} className="even:bg-red-200 odd:bg-blue-200">
                <td className="border-r-[1px] border-gray-400 px-2">{learner.id}</td>
                <td className="border-r-[1px] border-gray-400 px-2"><img className="w-20 h-20 object-cover" src={learner.image || avatar} /></td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.username}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.fullname}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.goal}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.email}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.city}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.phone}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.bio}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.role}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.technologies.length}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.studies.length}</td>
                <td className="border-r-[1px] border-gray-400 px-2">{learner.certificates.length}</td>
                <td>
                  <button className="btn mx-2" onClick={() => handleEdit(learner.id)}>Edit</button>
                  <button className="btn bg-red-400 mr-2 hover:bg-red-600" onClick={() => handleDelete(learner.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

export default Users;
