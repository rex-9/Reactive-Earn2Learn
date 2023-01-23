import { useState } from "react";
import sendMail from "../../services/sendmail";
// import Loading from "../loading/loading.component";
const Invites = () => {
  const defaultFormFields = { email: "", password: "" };
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const helpers = async () => {
    const response = await sendMail(
      "https://etl.robust.best/api/sendmail",
      formFields
    );
    if (response) {
      setLoading(false);
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    helpers();
  };

  return (
    <div className="w-full flex justify-center mt-10 h-[70%]">
      {" "}
      <div class="relative  m-2 shadow-md sm:rounded-lg border h-[70%] w-[70%] flex justify-center items-center">
        <form onSubmit={submitForm}>
          <input
            className="input rounded-lg text-gray-500"
            type="text"
            required
            name="name"
            placeholder="Invitee Name"
            onChange={handleChange}
          />{" "}
          <br />
          <input
            name="email"
            className="input rounded-lg text-gray-500"
            type="email"
            required
            placeholder="Invitee Email"
            onChange={handleChange}
          />{" "}
          <br />
          <div className="flex justify-center w-full my-2">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-900"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invites;
