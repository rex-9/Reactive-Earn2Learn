import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditStudy from "../study/EditStudy";
import { fetchStudies, sortStudies } from "../../redux/reducers/studyXer";
import Alert from "../Alert";

const Studies = () => {
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState(false);
  const studies = useSelector((state) => state.studies);
  const [study, setStudy] = useState({});
  const [id, setId] = useState({});
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    setEdit(!edit);
    const temp = studies.find((study) => study.id === id);
    setStudy(temp);
  };

  const handleDelete = (id) => {
    setAlert(true);
    setId(id);
  };

  const [asc, setAsc] = useState(true);

  const sort = (attr) => {
    dispatch(sortStudies({ attr, dir: asc ? "asc" : "desc" }));
    setAsc(!asc);
  };

  useEffect(() => {
    dispatch(fetchStudies());
  }, [dispatch]);

  return (
    <section className="text-center flex flex-col items-center">
      {edit && <EditStudy setEdit={setEdit} study={study} />}
      {alert && <Alert setAlert={setAlert} id={id} obj="study" />}
      <div class="relative overflow-x-auto m-2 shadow-md sm:rounded-lg ">
        {" "}
        <table className="text-md">
          <thead className="text-sm text-gray-700  border bg-gray-100">
            <tr>
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("id")}>
                  ID
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b w-32">
                <button type="button" onClick={() => sort("topic")}>
                  Topic
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b w-56">
                <button type="button" onClick={() => sort("experience")}>
                  Experience
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("hours_taken")}>
                  Hours Taken
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b w-32">
                <button type="button" onClick={() => sort("user")}>
                  User
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b w-40">
                <button type="button" onClick={() => sort("tech")}>
                  Technology
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("likes")}>
                  Likes
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b">
                <button type="button" onClick={() => sort("comments")}>
                  Comments
                </button>
              </th>
              <th scope="col" class="px-4 py-3 border-b ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {studies.map((study) => (
              <tr key={study.id} className="border-b ">
                <td className="py-4">{study.id}</td>
                <td className="">topic</td>
                <td className="">{study.experience}</td>
                <td className="">{study.hours_taken}</td>
                <td className="">{study.user?.username}</td>
                <td className="">{study.technology?.name}</td>
                <td className="">{study.like_count}</td>
                <td className="">{study.comment_count}</td>
                <td>
                  <button
                    className="text-indigo-700 px-2"
                    onClick={() => handleEdit(study.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 px-2"
                    onClick={() => handleDelete(study.id)}
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

export default Studies;
