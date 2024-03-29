import axios from 'axios';
import { getCookie, setCookie } from './cookie';

class Endpoint {
  constructor() {
    this.url = 'http://127.0.0.1:3000/api/';
    // this.url = 'https://etl.robust.best/api/';
    // this.url = 'https://earn2learn.onrender.com/';
  }

  login = () => `${this.url}users/login`;

  learners = () => `${this.url}users/`;

  learner = (id) => `${this.url}users/${id}`;

  studies = () => `${this.url}studies/`;

  study = (id) => `${this.url}studies/${id}`;

  learnerStudies = (id) => `${this.url}users/${id}/studies/`;

  technologies = () => `${this.url}technologies/`;

  technology = (id) => `${this.url}technologies/${id}`;

  certificates = () => `${this.url}certificates/`;

  certificate = (id) => `${this.url}certificates/${id}`;

  likes = () => `${this.url}likes/`;

  studyLikes = (id) => `${this.url}studies/${id}/likes/`;

  userLikes = (id) => `${this.url}users/${id}/likes/`;

  comments = () => `${this.url}comments/`;

  studyComments = (id) => `${this.url}studies/${id}/comments/`;

  userComments = (id) => `${this.url}users/${id}/comments/`;
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
).then((response) => response.data);

const deleteWithToken = (ep) => axios.delete(
  ep,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
    },
  },
).then((response) => response.data);

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
}).then((response) => response.data);

const reqWithFile = (ep, obj) => axios({
  method: 'PUT',
  url: ep,
  data: obj,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${getCookie('token')}`,
  },
}).then((response) => response.data)
  .catch((error) => { console.log(error); });

const createStudy = (method, ep, obj) => axios({
  method,
  url: ep,
  data: JSON.stringify(obj),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('token')}`,
  },
}).then((response) => response);

export {
  endpoint, authentication, get, getWithToken, reqWithToken, reqWithFile, createStudy, deleteWithToken,
};
