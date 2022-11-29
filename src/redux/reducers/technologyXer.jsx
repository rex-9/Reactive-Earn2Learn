import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken, reqWithToken } from '../../services/axios';

const FETCH_TECHNOLOGIES = 'reactive-earn2learn/TECHNOLOGIES/FETCH_TECHNOLOGIES';
const ADD_TECHNOLOGY = 'reactive-earn2learn/technologies/ADD_TECHNOLOGY';

const technologyXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_TECHNOLOGIES}/fulfilled`:
      return action.payload;

    case ADD_TECHNOLOGY:
      return [...state, action.payload];

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

export default technologyXer;
export { fetchTechnologies, addTechnology };
