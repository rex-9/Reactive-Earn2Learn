import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken, reqWithToken } from '../../services/axios';

const FETCH_STUDIES = 'e2l-fe/studies/FETCH_STUDIES';
const FETCH_LEARNER_STUDIES = 'e2l-fe/studies/FETCH_LEARNER_STUDIES';
const ADD_STUDY = 'e2l-fe/studies/ADD_STUDY';
const UPDATE_STUDY = 'e2l-fe/studies/UPDATE_STUDY';
const DELETE_STUDY = 'e2l-fe/studies/DELETE_STUDY';

const studyXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_STUDIES}/fulfilled`:
      return action.payload;

    case `${FETCH_LEARNER_STUDIES}/fulfilled`:
      return action.payload;

    case `${ADD_STUDY}/fulfilled`:
      return [...state, action.payload];

    case `${UPDATE_STUDY}/fulfilled`:
      state[action.payload.id - 1] = action.payload;
      return state;

    case DELETE_STUDY:
      return state.filter((study) => study.id !== action.payload);

    default:
      return state;
  }
};

const fetchStudies = createAsyncThunk(FETCH_STUDIES, async () => {
  const response = await getWithToken(endpoint.studies());
  return response.data;
});

const fetchLearnerStudies = createAsyncThunk(FETCH_LEARNER_STUDIES, async (id) => {
  const response = await getWithToken(endpoint.learnerStudies(id));
  return response.data;
});

const addStudy = createAsyncThunk(ADD_STUDY, async (newStudy) => {
  await reqWithToken('POST', endpoint.studies(), newStudy);
});

const updateStudy = createAsyncThunk(UPDATE_STUDY, async (obj) => {
  await reqWithToken('PUT', endpoint.study(obj.id), obj);
});

const deleteStudy = (studyId) => ({
  type: DELETE_STUDY,
  payload: studyId,
});

export default studyXer;
export {
  fetchLearnerStudies, fetchStudies, addStudy, updateStudy, deleteStudy,
};
