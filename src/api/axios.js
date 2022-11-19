import axios from 'axios';
import { GetCookie, SetCookie, RemoveCookie } from '../components/services/Cookie';

const baseURL = 'http://127.0.0.1:3000/';

const login = (ep, auth) => axios.post(
  `${baseURL}${ep}`,
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

const getWithToken = (ep) => axios.get(
  `${baseURL}${ep}`,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GetCookie('token')}`,
    },
  },
).catch((error) => {
  if (error.response) {
    console.log('Error', error.response.data);
  } else {
    console.log('error', 'Check Your Connection');
  }
});

export { login, getWithToken };
