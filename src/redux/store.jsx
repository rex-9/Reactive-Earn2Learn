import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import learnerXer from './reducers/learnerXer';
import studyXer from './reducers/studyXer';
import technologyXer from './reducers/technologyXer';
import certificateXer from './reducers/certificateXer';

const store = configureStore({
  reducer: {
    learners: learnerXer,
    studies: studyXer,
    technologies: technologyXer,
    certificates: certificateXer,
  },
  middleware: [thunk, logger],
});

export default store;
