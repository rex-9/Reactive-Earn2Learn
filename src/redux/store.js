import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import learnersXer from "./reducers/learnersXer";

const store = configureStore({
  reducer: {
    learners: learnersXer,
  },
  middleware: [thunk, logger],
})

export default store;
