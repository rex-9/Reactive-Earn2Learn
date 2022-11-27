import axios from 'axios';
import { getCookie, setCookie } from '../components/services/cookie';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const baseURL = 'http://127.0.0.1:3000/';
// const baseURL = 'https://earn2learn-on-rails.onrender.com/';
// const baseURL = 'https://earn2learn-on-rails.herokuapp.com/';

const authentication = (ep, credentials) => axios.post(
  `${baseURL}${ep}`,
  JSON.stringify(credentials),
  {
    headers: { 'Content-Type': 'application/json' },
  },
).then((response) => {
  const { token, user } = response.data;
  if (ep === 'users/login') {
    setCookie('token', token);
    setCookie('user', JSON.stringify(user));
  }
  return response.data;
}).catch((error) => {
  if (error.response) {
    return error.response.data;
  } else {
    return { status: 'failure', error: 'Check Your Connection' };
  }
});

const get = (ep) => axios.get(
  `${baseURL}${ep}`,
).then(response => response);

const getWithToken = (ep) => axios.get(
  `${baseURL}${ep}`,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
    },
  },
).then((response) => response);

const reqWithToken = (method, ep, obj) => axios({
  method,
  url: `${baseURL}${ep}`,
  data: JSON.stringify(obj),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

export {
  delay, authentication, get, getWithToken, reqWithToken,
};
