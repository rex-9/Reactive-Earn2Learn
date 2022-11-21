import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWithToken } from '../../api/axios';

const FETCH_TECHNOLOGIES = 'e2l-fe/TECHNOLOGIES/FETCH_TECHNOLOGIES';
const ADD_TECHNOLOGY = 'e2l-fe/technologies/ADD_TECHNOLOGY';

const TECHNOLOGIES_ENDPOINT = 'technologies/';

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
  const response = await getWithToken(TECHNOLOGIES_ENDPOINT);
  return response.data;
});

export default technologyXer;
export { fetchTechnologies };
