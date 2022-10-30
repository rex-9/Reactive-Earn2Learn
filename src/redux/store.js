import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import learnersXer from './reducers/learnersXer';
import studiesXer from './reducers/studiesXer';

const store = configureStore({
  reducer: {
    learners: learnersXer,
    studies: studiesXer,
  },
  middleware: [thunk, logger],
});

export default store;
