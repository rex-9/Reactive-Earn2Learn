import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken } from '../../services/axios';

const FETCH_TECHNOLOGIES = 'e2l-fe/TECHNOLOGIES/FETCH_TECHNOLOGIES';
const ADD_TECHNOLOGY = 'e2l-fe/technologies/ADD_TECHNOLOGY';

const technologyXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_TECHNOLOGIES}/fulfilled`:
      return action.payload;

    case ADD_TECHNOLOGY:
      return [...action.payload];

    default:
      return state;
  }
};

const fetchTechnologies = createAsyncThunk(FETCH_TECHNOLOGIES, async () => {
  const response = await getWithToken(endpoint.technologies());
  return response.data;
});

export default technologyXer;
export { fetchTechnologies };
