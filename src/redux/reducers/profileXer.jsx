import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWithToken } from '../../api/axios';

const PROFILE_ENDPOINT = (id) => `users/${id}`;

const FETCH_PROFILE = 'e2l-fe/profile/FETCH_PROFILE';
// const ADD_LEARNER = 'e2l-fe/learners/ADD_LEARNER';
// const UPDATE_LEARNER = 'e2l-fe/learners/UPDATE_LEARNER';
// const DELETE_LEARNER = 'e2l-fe/learners/DELETE_LEARNER';

const learnerXer = (state = {}, action) => {
  switch (action.type) {
    case `${FETCH_PROFILE}/fulfilled`:
      return action.payload;

      // case `${ADD_LEARNER}/fulfilled`:
      //   return [...state, action.payload];

      // case `${UPDATE_LEARNER}/fulfilled`:
      //   state[action.payload.id - 1] = action.payload;
      //   return [...state];

      // case DELETE_LEARNER:
      //   return state.filter((learner) => learner.id !== action.payload);

    default:
      return state;
  }
};

const fetchProfile = createAsyncThunk(FETCH_PROFILE, async (id) => {
  const response = await getWithToken(PROFILE_ENDPOINT(id));
  return response.data;
});

// const addLearner = createAsyncThunk(ADD_LEARNER, async (newLearner) => {
//   await auth(LEARNERS_ENDPOINT, newLearner);
// });

// const updateLearner = createAsyncThunk(UPDATE_LEARNER, async (learner) => {
//   const response = await reqWithToken('PUT', LEARNER_ENDPOINT(learner.id), learner);
//   return response.data;
// });

// const deleteLearner = (id) => ({
//   type: DELETE_LEARNER,
//   payload: id,
// });

export default learnerXer;
export { fetchProfile };
