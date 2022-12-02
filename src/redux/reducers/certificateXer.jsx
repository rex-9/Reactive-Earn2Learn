import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken, reqWithToken, deleteWithToken } from '../../services/axios';

const FETCH_CERTIFICATES = 'reactive-earn2learn/certificates/FETCH_CERTIFICATES';
const ADD_CERTIFICATE = 'reactive-earn2learn/certificates/ADD_CERTIFICATE';
const UPDATE_CERTIFICATE = 'reactive-earn2learn/certificates/UPDATE_CERTIFICATE';
const DELETE_CERTIFICATE = 'reactive-earn2learn/certificates/DELETE_CERTIFICATE';
const SORT_CERTIFICATES = 'reactive-earn2learn/certificates/SORT_CERTIFICATES';

const certificateXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_CERTIFICATES}/fulfilled`:
      return action.payload;

    case ADD_CERTIFICATE:
      return [...action.payload];

    case `${UPDATE_CERTIFICATE}/fulfilled`:
      state[action.payload.id - 1] = action.payload;
      return state;

    case SORT_CERTIFICATES:
      switch (action.payload.attr) {
        case "id":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.id - b.id) : state.sort((a, b) => b.id - a.id);
          break;

        case "title":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.title.localeCompare(b.title)) : state.sort((a, b) => b.title.localeCompare(a.title));
          break;

        case "link":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.link.localeCompare(b.link)) : state.sort((a, b) => b.link.localeCompare(a.link));
          break;

        case "achieved_date":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.achieved_date.localeCompare(b.achieved_date)) : state.sort((a, b) => b.achieved_date.localeCompare(a.achieved_date));
          break;

        case "expiration_date":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.expiration_date.localeCompare(b.expiration_date)) : state.sort((a, b) => b.expiration_date.localeCompare(a.expiration_date));
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

export const fetchCertificates = createAsyncThunk(FETCH_CERTIFICATES, async () => {
  const response = await getWithToken(endpoint.certificates());
  return response.data;
});

export const updateCertificate = createAsyncThunk(UPDATE_CERTIFICATE, async (obj) => {
  await reqWithToken('PUT', endpoint.certificate(obj.id), obj);
});

export const deleteCertificate = createAsyncThunk(DELETE_CERTIFICATE, async (id) => {
  const response = await deleteWithToken(endpoint.certificate(id));
  return response.data;
});

export const sortCertificates = (obj) => ({
  type: SORT_CERTIFICATES,
  payload: obj,
});

export default certificateXer;
