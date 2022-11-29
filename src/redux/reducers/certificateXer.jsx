import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoint, getWithToken, reqWithToken } from '../../services/axios';

const FETCH_CERTIFICATES = 'reactive-earn2learn/certificates/FETCH_CERTIFICATES';
const ADD_CERTIFICATE = 'reactive-earn2learn/certificates/ADD_CERTIFICATE';
const UPDATE_CERTIFICATE = 'reactive-earn2learn/certificates/UPDATE_CERTIFICATE';

const certificateXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_CERTIFICATES}/fulfilled`:
      return action.payload;

    case ADD_CERTIFICATE:
      return [...action.payload];

    case `${UPDATE_CERTIFICATE}/fulfilled`:
      state[action.payload.id - 1] = action.payload;
      return state;

    default:
      return state;
  }
};

const fetchCertificates = createAsyncThunk(FETCH_CERTIFICATES, async () => {
  const response = await getWithToken(endpoint.certificates());
  return response.data;
});

const updateCertificate = createAsyncThunk(UPDATE_CERTIFICATE, async (obj) => {
  await reqWithToken('PUT', endpoint.certificate(obj.id), obj);
});

export default certificateXer;
export { fetchCertificates, updateCertificate };
