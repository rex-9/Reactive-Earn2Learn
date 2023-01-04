import axios from "axios";

const sendMail = (ep, credentials) =>
  axios
    .post(ep, JSON.stringify(credentials), {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      } else {
        return { status: "failure", error: "Check Your Connection" };
      }
    });
export default sendMail;
