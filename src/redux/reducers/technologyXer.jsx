import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken, reqWithToken, deleteWithToken } from '../../services/axios';

const FETCH_TECHNOLOGIES = 'reactive-earn2learn/TECHNOLOGIES/FETCH_TECHNOLOGIES';
const ADD_TECHNOLOGY = 'reactive-earn2learn/technologies/ADD_TECHNOLOGY';
const UPDATE_TECHNOLOGY = 'reactive-earn2learn/technologies/UPDATE_TECHNOLOGY';
const DELETE_TECHNOLOGY = 'reactive-earn2learn/technologies/DELETE_TECHNOLOGY';
const SORT_TECHNOLOGIES = 'reactive-earn2learn/technologies/SORT_TECHNOLOGIES';

const technologyXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_TECHNOLOGIES}/fulfilled`:
      return action.payload;

    case `${ADD_TECHNOLOGY}/fulfilled`:
      return [...state, action.payload];

    case `${UPDATE_TECHNOLOGY}/fulfilled`:
      state[action.payload.id - 1] = action.payload;
      return state;

    case `${DELETE_TECHNOLOGY}/fulfilled`:
      return state.filter((technology) => technology.id !== action.payload.id);

    case SORT_TECHNOLOGIES:
      switch (action.payload.attr) {
        case "id":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.id - b.id) : state.sort((a, b) => b.id - a.id);
          break;

        case "name":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.name.localeCompare(b.name)) : state.sort((a, b) => b.name.localeCompare(a.name));
          break;

        case "users":
          action.payload.dir === 'asc' ? state.sort((a, b) => a.users.length - b.users.length) : state.sort((a, b) => b.users.length - a.users.length);
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

export const fetchTechnologies = createAsyncThunk(FETCH_TECHNOLOGIES, async () => {
  const response = await getWithToken(endpoint.technologies());
  return response.data;
});

export const addTechnology = createAsyncThunk(ADD_TECHNOLOGY, async (newTech) => {
  const response = await reqWithToken('POST', endpoint.technologies(), newTech);
  console.log(response.data);
  return response.data;
});

export const updateTechnology = createAsyncThunk(UPDATE_TECHNOLOGY, async (obj) => {
  const response = await reqWithToken('PUT', endpoint.technology(obj.id), obj);
  return response.data;
});

export const deleteTechnology = createAsyncThunk(DELETE_TECHNOLOGY, async (id) => {
  const response = await deleteWithToken(endpoint.technology(id));
  return response.data;
});

export const sortTechnologies = (obj) => ({
  type: SORT_TECHNOLOGIES,
  payload: obj,
});

export default technologyXer;
