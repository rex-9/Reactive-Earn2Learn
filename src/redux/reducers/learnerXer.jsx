import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken, reqWithFile, deleteWithToken } from '../../services/axios';

const FETCH_LEARNERS = 'reactive-earn2learn/learners/FETCH_LEARNERS';
const FETCH_LEARNER = 'reactive-earn2learn/learners/FETCH_LEARNER';
const ADD_LEARNER = 'reactive-earn2learn/learners/ADD_LEARNER';
const UPDATE_LEARNER = 'reactive-earn2learn/learners/UPDATE_LEARNER';
const DELETE_LEARNER = 'reactive-earn2learn/learners/DELETE_LEARNER';

const SORT_LEARNERS = 'reactive-earn2learn/learners/SORT_LEARNERS';

const learnerXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_LEARNERS}/fulfilled`:
      return action.payload;

    case `${FETCH_LEARNER}/fulfilled`:
      return action.payload;

    case `${ADD_LEARNER}/fulfilled`:
      return [...state, action.payload];

    case `${UPDATE_LEARNER}/fulfilled`:
      const learner = state.find((learner) => learner.id === action.payload.id);
      learner.username = action.payload.username;
      learner.fullname = action.payload.fullname;
      learner.catchphrase = action.payload.catchphrase;
      learner.goal = action.payload.goal;
      learner.email = action.payload.email;
      learner.image = action.payload.image;
      learner.bio = action.payload.bio;
      learner.birthdate = action.payload.birthdate;
      learner.city = action.payload.city;
      learner.phone = action.payload.phone;
      learner.role = action.payload.role;
      learner.github = action.payload.github;
      learner.linkedin = action.payload.linkedin;
      return [...state];

    case `${DELETE_LEARNER}/fulfilled`:
      return state.filter((learner) => learner.id !== action.payload.id);

    case SORT_LEARNERS:
      switch (action.payload.attr) {
        case "id":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.id - b.id) : state.sort((a, b) => b.id - a.id);
          break;

        case "username":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.username.localeCompare(b.username)) : state.sort((a, b) => b.username.localeCompare(a.username));
          break;

        case "fullname":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.fullname.localeCompare(b.fullname)) : state.sort((a, b) => b.fullname.localeCompare(a.fullname));
          break;

        case "goal":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.goal.localeCompare(b.goal)) : state.sort((a, b) => b.goal.localeCompare(a.goal));
          break;

        case "email":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.email.localeCompare(b.email)) : state.sort((a, b) => b.email.localeCompare(a.email));
          break;

        case "city":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.city.localeCompare(b.city)) : state.sort((a, b) => b.city.localeCompare(a.city));
          break;

        case "phone":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.phone.localeCompare(b.phone)) : state.sort((a, b) => b.phone.localeCompare(a.phone));
          break;

        case "bio":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.bio.localeCompare(b.bio)) : state.sort((a, b) => b.bio.localeCompare(a.bio));
          break;

        case "role":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.role.localeCompare(b.role)) : state.sort((a, b) => b.role.localeCompare(a.role));
          break;

        case "techs":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.technologies.length - b.technologies.length) : state.sort((a, b) => b.technologies.length - a.technologies.length);
          break;

        case "studies":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.studies.length - b.studies.length) : state.sort((a, b) => b.studies.length - a.studies.length);
          break;

        case "certificates":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.certificates.length - b.certificates.length) : state.sort((a, b) => b.certificates.length - a.certificates.length);
          break;

        default:
          break;
      }
      return state;

    default:
      return state;
  }
};

export const fetchLearners = createAsyncThunk(FETCH_LEARNERS, async () => {
  const response = await getWithToken(endpoint.learners());
  return response.data;
});

export const updateLearner = createAsyncThunk(UPDATE_LEARNER, async (learner) => {
  const id = learner.get('id');
  const response = await reqWithFile(endpoint.learner(id), learner);
  console.log(response);
  console.log(response.error);
  // const response = await reqWithToken('PUT', endpoint.learner(learner.get('id')), learner);
  return response.data;
});

export const deleteLearner = createAsyncThunk(DELETE_LEARNER, async (id) => {
  const response = await deleteWithToken(endpoint.learner(id));
  return response.data;
});

export const sortLearners = (obj) => ({
  type: SORT_LEARNERS,
  payload: obj,
});

export default learnerXer;
