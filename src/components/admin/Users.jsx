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
  };

  const handleEdit = (id) => {
    setEdit(!edit);
    const temp = learners.find((learner) => learner.id === id);
    setLearner(temp);
  };

  const [asc, setAsc] = useState(true);

  const sort = (attr) => {
    dispatch(sortLearners({ attr, dir: asc ? "asc" : "desc" }));
    setAsc(!asc);
  };

  useEffect(() => {
    dispatch(fetchLearners());
  }, [dispatch]);

  return (
    <section className="text-center flex flex-col items-center">
      {edit && <EditLearner setEdit={setEdit} learner={learner} />}
      {alert && <Alert setAlert={setAlert} id={id} obj={"learner"} />}
      {/* <p className="my-4 mx-16 font-bold text-xl self-start">Users</p> */}
      {/* <table class="w-full text-md text-left  ">
        <thead class="text-sm text-gray-700 uppercase border bg-gray-100">
          <tr>
            <th scope="col" class="px-4 py-3 w-[25%]">
              Technology
            </th>
            <th scope="col" class="px-4 py-3 w-[60%]">
              Topic
            </th>
            {currentUser.id === id && (
              <th className="w-[15%] px-4 py-3 text-center">Action</th>
            )}
          </tr>
        </thead>
        <tbody class="border">
          {studies.map((study) => (
            <tr key={study.id} className="bg-white border-b">
              <td className="px-4 py-4 text-gray-900 font-medium ">
                {study.technology.name}
              </td>
              <td className="px-4 py-4 font-medium text-gray-900">
                {study.topic}
              </td>
              {currentUser.id === id && (
                <td className="px-4 py-4  text-center">
                  {id === currentUser.id && (
                    <button
                      class="font-medium text-indigo-600 hover:text-indigo-900 "
                      type="button"
                      onClick={() => openUpdate(study.id)}
                    >
                      Complete
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table> */}
      <div class="relative  overflow-x-auto m-2 shadow-md sm:rounded-lg ">
        <table className=" text-md ">
          <thead className="text-sm text-gray-700  border bg-gray-100">
            <tr>
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("id")}>
                  Id
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b">
                Image
              </th>
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("username")}>
                  Username
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("fullname")}>
                  Full Name
                </button>
              </th>

              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("email")}>
                  Email
                </button>
              </th>

              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("role")}>
                  Role
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("techs")}>
                  Technologies
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("studies")}>
                  Studies
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b ">
                <button type="button" onClick={() => sort("certificates")}>
                  Certificates
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {learners.map((learner) => (
              <tr key={learner.id} className="border-b">
                <td className="">{learner.id}</td>
                <td className="p-4">
                  <img
                    className="w-14 h-14 object-cover rounded-lg"
                    src={learner.image || assets.avatar}
                  />
                </td>
                <td className="">{learner.username}</td>
                <td className="">{learner.fullname}</td>

                <td className="">{learner.email}</td>

                <td className="">{learner.role}</td>
                <td className="">{learner.technologies.length}</td>
                <td className="">{learner.studies.length}</td>
                <td className="">{learner.certificates.length}</td>
                <td>
                  <button
                    className="text-indigo-700 mx-2 px-2"
                    onClick={() => handleEdit(learner.id)}
                  >
                    Edit
                  </button>
                  <button
                    className=" text-red-500  mr-2 hover:bg-red-600 px-2"
                    onClick={() => handleDelete(learner.id)}
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

export default Users;
