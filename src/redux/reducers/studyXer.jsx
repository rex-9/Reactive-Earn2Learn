import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken, reqWithToken, createStudy, deleteWithToken } from '../../services/axios';

const FETCH_STUDIES = 'reactive-earn2learn/studies/FETCH_STUDIES';
const FETCH_LEARNER_STUDIES = 'reactive-earn2learn/studies/FETCH_LEARNER_STUDIES';
const ADD_STUDY = 'reactive-earn2learn/studies/ADD_STUDY';
const UPDATE_STUDY = 'reactive-earn2learn/studies/UPDATE_STUDY';
const DELETE_STUDY = 'reactive-earn2learn/studies/DELETE_STUDY';
const SORT_STUDIES = 'reactive-earn2learn/studies/SORT_STUDIES';

const studyXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_STUDIES}/fulfilled`:
      return action.payload;

    case `${FETCH_LEARNER_STUDIES}/fulfilled`:
      return action.payload;

    case `${ADD_STUDY}/fulfilled`:
      return [...state, action.payload];

    case `${UPDATE_STUDY}/fulfilled`:
      const study = state.find((study) => study.id === action.payload.id);
      study.topic = action.payload.topic;
      study.experience = action.payload.experience;
      study.completed = action.payload.completed;
      study.hours_taken = action.payload.hours_taken;
      return [...state];

    case `${DELETE_STUDY}/fulfilled`:
      return state.filter((study) => study.id !== action.payload.id);

    case SORT_STUDIES:
      switch (action.payload.attr) {
        case "id":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.id - b.id) : state.sort((a, b) => b.id - a.id);
          break;

        case "topic":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.topic.localeCompare(b.topic)) : state.sort((a, b) => b.topic.localeCompare(a.topic));
          break;

        case "experience":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.experience.localeCompare(b.experience)) : state.sort((a, b) => b.experience.localeCompare(a.experience));
          break;

        case "achieved_date":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.achieved_date.localeCompare(b.achieved_date)) : state.sort((a, b) => b.achieved_date.localeCompare(a.achieved_date));
          break;

        case "completed":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.completed.localeCompare(b.completed)) : state.sort((a, b) => b.completed.localeCompare(a.completed));
          break;

        case "hours_taken":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.hours_taken - b.hours_taken) : state.sort((a, b) => b.hours_taken - a.hours_taken);
          break;

        case "user":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.user.username.localeCompare(b.user.username)) : state.sort((a, b) => b.user.username.localeCompare(a.user.username));
          break;

        case "tech":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.technology.name.localeCompare(b.technology.name)) : state.sort((a, b) => b.technology.name.localeCompare(a.technology.name));
          break;

        default:
          break;
      }
      return state;

    default:
      return state;
  }
};

export const fetchStudies = createAsyncThunk(FETCH_STUDIES, async () => {
  const response = await getWithToken(endpoint.studies());
  return response.data;
});

export const fetchLearnerStudies = createAsyncThunk(FETCH_LEARNER_STUDIES, async (id) => {
  const response = await getWithToken(endpoint.learnerStudies(id));
  return response.data;
});

export const addStudy = createAsyncThunk(ADD_STUDY, async (newStudy) => {
  const response = await createStudy('POST', endpoint.studies(), newStudy);
  return response.data;
});

export const updateStudy = createAsyncThunk(UPDATE_STUDY, async (obj) => {
  const response = await reqWithToken('PUT', endpoint.study(obj.id), obj);
  return response.data;
});

export const deleteStudy = createAsyncThunk(DELETE_STUDY, async (id) => {
  const response = await deleteWithToken(endpoint.study(id));
  return response.data;
});

export const sortStudies = (obj) => ({
  type: SORT_STUDIES,
  payload: obj,
});

export default studyXer;
