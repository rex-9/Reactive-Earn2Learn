import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWithToken, reqWithToken } from '../../api/axios';

const FETCH_STUDIES = 'e2l-fe/studies/FETCH_STUDIES';
const ADD_STUDY = 'e2l-fe/studies/ADD_STUDY';
const UPDATE_STUDY = 'e2l-fe/studies/UPDATE_STUDY';
const DELETE_STUDY = 'e2l-fe/studies/DELETE_STUDY';

const STUDIES_ENDPOINT = (id) => `users/${id}/studies/`;
const ADD_STUDY_ENDPOINT = 'studies/';
const UPDATE_STUDY_ENDPOINT = (id) => `studies/${id}`;

const studyXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_STUDIES}/fulfilled`:
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

const fetchStudies = createAsyncThunk(FETCH_STUDIES, async (id) => {
  const response = await getWithToken(STUDIES_ENDPOINT(id));
  return response.data;
});

const addStudy = createAsyncThunk(ADD_STUDY, async (newStudy) => {
  await reqWithToken('POST', ADD_STUDY_ENDPOINT, newStudy);
});

const updateStudy = createAsyncThunk(UPDATE_STUDY, async (obj) => {
  console.log(obj);
  await reqWithToken('PUT', UPDATE_STUDY_ENDPOINT(obj.id), obj);
});

const deleteStudy = (studyId) => ({
  type: DELETE_STUDY,
  payload: studyId,
});

export default studyXer;
export {
  fetchStudies, addStudy, updateStudy, deleteStudy,
};
