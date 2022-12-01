import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken, reqWithToken, deleteWithToken } from '../../services/axios';

const FETCH_TECHNOLOGIES = 'reactive-earn2learn/TECHNOLOGIES/FETCH_TECHNOLOGIES';
const ADD_TECHNOLOGY = 'reactive-earn2learn/technologies/ADD_TECHNOLOGY';
const UPDATE_TECHNOLOGY = 'reactive-earn2learn/technologies/UPDATE_TECHNOLOGY';
const DELETE_TECHNOLOGY = 'reactive-earn2learn/technologies/DELETE_TECHNOLOGY';

const technologyXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_TECHNOLOGIES}/fulfilled`:
      return action.payload;

    case ADD_TECHNOLOGY:
      return [...state, action.payload];

    case `${UPDATE_TECHNOLOGY}/fulfilled`:
      state[action.payload.id - 1] = action.payload;
      return state;

    case DELETE_TECHNOLOGY:
      return state;

    default:
      return state;
  }
};

const fetchTechnologies = createAsyncThunk(FETCH_TECHNOLOGIES, async () => {
  const response = await getWithToken(endpoint.technologies());
  return response.data;
});

const addTechnology = createAsyncThunk(ADD_TECHNOLOGY, async (newTech) => {
  await reqWithToken('POST', endpoint.technologies(), newTech);
});

const updateTechnology = createAsyncThunk(UPDATE_TECHNOLOGY, async (obj) => {
  await reqWithToken('PUT', endpoint.technology(obj.id), obj);
});

const deleteTechnology = createAsyncThunk(DELETE_TECHNOLOGY, async (id) => {
  await deleteWithToken(endpoint.technology(id));
});

export default technologyXer;
export { fetchTechnologies, addTechnology, updateTechnology, deleteTechnology };
