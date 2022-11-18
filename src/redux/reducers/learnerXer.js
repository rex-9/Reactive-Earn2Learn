import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { SetCookie, RemoveCookie } from '../../components/services/Cookie';

const REGISTER_ENDPOINT = 'users/';

const LOGIN_LEARNER = 'e2l-fe/learners/LOGIN_LEARNERS';
const FETCH_LEARNERS = 'e2l-fe/learners/FETCH_LEARNERS';
const ADD_LEARNER = 'e2l-fe/learners/ADD_LEARNER';
const UPDATE_LEARNER = 'e2l-fe/learners/UPDATE_LEARNER';
const DELETE_LEARNER = 'e2l-fe/learners/DELETE_LEARNER';

// const initialState = [
//   {
//     id: 1,
//     username: 'Rex',
//     fullname: 'Htet Naing',
//     image: 'https://static.zerochan.net/Dante.full.2952055.jpg',
//     bio: "I'm a web developer",
//     city: 'Yangon',
//     birthdate: '1990-01-01',
//     phone: '+959443112251',
//     role: 'admin',
//     email: 'htetnaing0814@gmail.com',
//     password: 'P@ssw0rd',
//     github: 'https://github.com/rex-9',
//     linkedin: 'https://www.linkedin.com/in/rex-9',
//   },
//   {
//     id: 2,
//     username: 'Jerry',
//     fullname: 'Sai La Min Oak',
//     image: null,
//     bio: null,
//     city: 'Mandalay',
//     birthdate: '1990-01-01',
//     phone: '+959443112251',
//     role: 'learner',
//     email: 'jerry@gmail.com',
//     password: 'P@ssw0rd',
//     github: null,
//     linkedin: null,
//   },
//   {
//     id: 3,
//     username: 'SwanHtet18',
//     fullname: 'Swan Htet',
//     image: 'https://static.zerochan.net/Dante.full.2952055.jpg',
//     bio: 'I am UI designer',
//     city: 'Pyin Oo Lwin',
//     birthdate: '1990-01-01',
//     phone: '+959443112251',
//     role: 'learner',
//     email: 'SwanHtet18@gmail.com',
//     password: 'P@ssw0rd',
//     github: 'https://github.com/Swanhtet18',
//     linkedin: 'https://www.linkedin.com/in/Swanhtet18',
//   },
// ];

const learnerXer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LEARNERS:
      return [...action.payload];

    case `${LOGIN_LEARNER}/fulfilled`:
      return state;

    case ADD_LEARNER:
      return [...state, action.payload];

    case UPDATE_LEARNER:
      state[action.payload.id - 1] = action.payload;
      return [...state];

    case DELETE_LEARNER:
      return state.filter((learner) => learner.id !== action.payload);

    default:
      return state;
  }
};

const loginLearner = createAsyncThunk(LOGIN_LEARNER, async (auth) => {
  // try {
  await axios.post(
    'users/login',
    JSON.stringify(auth),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  ).then((response) => {
    const { token, user } = response.data;
    RemoveCookie('token');
    RemoveCookie('error');
    SetCookie('token', token);
    SetCookie('user', JSON.stringify(user));
  }).catch((error) => {
    if (error.response) {
      SetCookie('error', error.response.data.error);
    } else {
      SetCookie('error', 'Check Your Connection');
    }
  });
});

const addLearner = createAsyncThunk(ADD_LEARNER, async (newLearner) => {
  console.log(`lelelelelel ${newLearner}`);
  const response = await axios.post(
    REGISTER_ENDPOINT,
    newLearner,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
  console.log('Posted learner');
  const { token, user } = response.data;
  RemoveCookie('token');
  SetCookie('token', token);
  SetCookie('user', JSON.stringify(user));
  console.log(`token: ${token} user: ${user}`);
});

// const addLearner = (learner) => ({
//   type: ADD_LEARNER,
//   payload: learner,
// });

const updateLearner = (learner) => ({
  type: UPDATE_LEARNER,
  payload: learner,
});

const deleteLearner = (id) => ({
  type: DELETE_LEARNER,
  payload: id,
});

export default learnerXer;
export {
  loginLearner, addLearner, updateLearner, deleteLearner,
};
