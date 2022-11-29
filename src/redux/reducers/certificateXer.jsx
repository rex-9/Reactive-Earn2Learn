import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken } from '../../services/axios';

const FETCH_CERTIFICATES = 'reactive-earn2learn/certificates/FETCH_CERTIFICATES';
const ADD_CERTIFICATE = 'reactive-earn2learn/certificates/ADD_CERTIFICATE';

const certificateXer = (state = [], action) => {
  switch (action.payload) {
    case `${FETCH_CERTIFICATES}/fulfilled`:
      console.log('FETCH_CERTIFICATES', action.payload);
      return action.payload;

    case `${FETCH_CERTIFICATES}/rejected`:
      console.log('rejected');
      return action.payload;

    case ADD_CERTIFICATE:
      return [...action.payload];

    default:
      console.log('Default Hahahahahaha');
      return state;
  }
};

const fetchCertificates = createAsyncThunk(FETCH_CERTIFICATES, async () => {
  const response = await getWithToken(endpoint.certificates());
  return response.data;
});

export default certificateXer;
export { fetchCertificates };
