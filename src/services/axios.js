import axios from 'axios';
import { getCookie, setCookie } from './cookie';

class Endpoint {
  constructor() {
    this.url = 'http://127.0.0.1:3000/';
    // this.url = 'https://earn2learn-on-rails.onrender.com/';
  }

  login = () => `${this.url}users/login`;

  learners = () => `${this.url}users/`;

  learner = (id) => `${this.url}users/${id}`;

  studies = () => `${this.url}studies/`;

  study = (id) => `${this.url}studies/${id}`;

  learnerStudies = (id) => `${this.url}users/${id}/studies/`;

  technologies = () => `${this.url}technologies/`;

  certificates = () => `${this.url}certificates/`;

  certificate = (id) => `${this.url}certificates/${id}`;
}

const endpoint = new Endpoint();

const authentication = (ep, credentials) => axios.post(
  ep,
  JSON.stringify(credentials),
  {
    headers: { 'Content-Type': 'application/json' },
  },
).then((response) => {
  const { token, user } = response.data;
  if (ep === endpoint.login()) {
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
  ep,
).then((response) => response);

const deleteWithToken = (ep) => axios.delete(
  ep,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
    },
  },
);

const getWithToken = (ep) => axios.get(
  ep,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
    },
  },
).then((response) => response);

const reqWithToken = (method, ep, obj) => axios({
  method,
  url: ep,
  data: JSON.stringify(obj),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

export {
  endpoint, authentication, get, getWithToken, reqWithToken, deleteWithToken,
};
