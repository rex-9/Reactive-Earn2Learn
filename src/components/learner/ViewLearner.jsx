import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { isAdmin, returnCurrentUser } from "../../services/cookie";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import assets from "../../assets/assets";

const ViewLearner = ({ setEdit, learner }) => {
  const currentUser = returnCurrentUser();
};

export default ViewLearner;
