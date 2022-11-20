import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWithToken } from '../../api/axios';

const FETCH_STUDIES = 'e2l-fe/studies/FETCH_STUDIES';
const ADD_STUDY = 'e2l-fe/studies/ADD_STUDY';
const UPDATE_STUDY = 'e2l-fe/studies/UPDATE_STUDY';
const DELETE_STUDY = 'e2l-fe/studies/DELETE_STUDY';

const STUDIES_ENDPOINT = (id) => `users/${id}/studies/`;

const studyXer = (state = [], action) => {
  switch (action.type) {
    case FETCH_STUDIES:
      return [...action.payload];

    case ADD_STUDY:
      return [...state, action.payload];

    case UPDATE_STUDY:
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
  console.log('Response Data', response.data);
  return response.data;
});

const addStudy = (study) => ({
  type: ADD_STUDY,
  payload: study,
});

const updateStudy = (study) => ({
  type: UPDATE_STUDY,
  payload: study,
});

const deleteStudy = (studyId) => ({
  type: DELETE_STUDY,
  payload: studyId,
});

export default studyXer;
export {
  fetchStudies, addStudy, updateStudy, deleteStudy,
};
