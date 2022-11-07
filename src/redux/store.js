import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import learnerXer from './reducers/learnerXer';
import studyXer from './reducers/studyXer';
import technologyXer from './reducers/technologyXer';
import certificateXer from './reducers/certificateXer';
import professionXer from './reducers/professionXer';

const store = configureStore({
  reducer: {
    learners: learnerXer,
    studies: studyXer,
    technologies: technologyXer,
    certificates: certificateXer,
    professions: professionXer,
  },
  middleware: [thunk, logger],
});

export default store;
