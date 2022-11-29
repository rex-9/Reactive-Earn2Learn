import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken, reqWithToken } from '../../services/axios';

const FETCH_LEARNERS = 'e2l-fe/learners/FETCH_LEARNERS';
const FETCH_LEARNER = 'e2l-fe/learners/FETCH_LEARNER';
const ADD_LEARNER = 'e2l-fe/learners/ADD_LEARNER';
const UPDATE_LEARNER = 'e2l-fe/learners/UPDATE_LEARNER';
const DELETE_LEARNER = 'e2l-fe/learners/DELETE_LEARNER';

const learnerXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_LEARNERS}/fulfilled`:
      return action.payload;

    case `${FETCH_LEARNER}/fulfilled`:
      return action.payload;

    case `${ADD_LEARNER}/fulfilled`:
      return [...state, action.payload];

    case `${UPDATE_LEARNER}/fulfilled`:
      state[action.payload.id - 1] = action.payload;
      return [...state];

    case DELETE_LEARNER:
      return state.filter((learner) => learner.id !== action.payload);

    default:
      return state;
  }
};

const fetchLearners = createAsyncThunk(FETCH_LEARNERS, async () => {
  const response = await getWithToken(endpoint.learners());
  return response.data;
});

const updateLearner = createAsyncThunk(UPDATE_LEARNER, async (learner) => {
  const response = await reqWithToken('PUT', endpoint.learner(learner.id), learner);
  return response.data;
});

const deleteLearner = (id) => ({
  type: DELETE_LEARNER,
  payload: id,
});

export default learnerXer;
export {
  fetchLearners, updateLearner, deleteLearner,
};
