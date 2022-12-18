import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLearners, sortLearners } from "../../redux/reducers/learnerXer";
import EditLearner from "../learner/EditLearner";
import Alert from "../Alert";
import assets from "../../assets/assets";

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
            <th className="table-head"><button type="button" onClick={() => sort("id")}>ID</button></th>
            <th className="table-head">Image</th>
            <th className="table-head"><button type="button" onClick={() => sort("username")}>Username</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("fullname")}>Full Name</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("goal")}>Goal</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("email")}>Email</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("email")}>Social</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("city")}>City</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("phone")}>Phone</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("bio")}>Bio</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("role")}>Role</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("techs")}>Technologies</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("studies")}>Studies</button></th>
            <th className="table-head"><button type="button" onClick={() => sort("certificates")}>Certificates</button></th>
            <th className="table-head">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            learners.map((learner) => (
              <tr key={learner.id} className="table-stripe font-semibold">
                <td className="table-data">{learner.id}</td>
                <td className="table-data w-24"><img className="w-20 h-20 object-cover" src={learner.image || assets.avatar} /></td>
                <td className="table-data">{learner.username}</td>
                <td className="table-data">{learner.fullname}</td>
                <td className="table-data">{learner.goal}</td>
                <td className="table-data">{learner.email}</td>
                <td className="table-data flex justify-center items-center">
                  <div className="flex gap-4 h-20 w-20">
                    {learner.github && <Link to={learner.github}><img src={assets.github} alt="GitHub Profile" /></Link> }
                    {learner.linkedin && <Link to={learner.linkedin}><img src={assets.linkedin} alt="LinkedIn Profile" /></Link> }
                  </div>
                </td>
                <td className="table-data">{learner.city}</td>
                <td className="table-data">{learner.phone}</td>
                <td className="table-data">{learner.bio}</td>
                <td className="table-data">{learner.role}</td>
                <td className="table-data">{learner.technologies.length}</td>
                <td className="table-data">{learner.studies.length}</td>
                <td className="table-data">{learner.certificates.length}</td>
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
