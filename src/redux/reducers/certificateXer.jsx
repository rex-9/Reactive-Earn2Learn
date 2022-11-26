const FETCH_CERTIFICATES = 'e2l-fe/certificates/FETCH_CERTIFICATES';
const ADD_CERTIFICATE = 'e2l-fe/certificates/ADD_CERTIFICATE';

const initialState = [
  {
    id: 1,
    title: 'Master of React',
    link: 'https://www.udemy.com/certificate/UC-8b9b9b1c-1b1a-4b1f-8f1a-1f1f1f1f1f1f/',
    achieved_date: '2021-01-01',
    expiration_date: '2021-01-01',
    user_id: 1,
    technology_id: 1,
  },
  {
    id: 2,
    title: 'Master on Rails',
    link: 'https://www.udemy.com/certificate/UC-8b9b9b1c-1b1a-4b1f-8f1a-1f1f1f1f1f1f/',
    achieved_date: '2022-01-01',
    expiration_date: null,
    user_id: 1,
    technology_id: 2,
  },
];

const certificateXer = (state = initialState, action) => {
  switch (action.payload) {
    case FETCH_CERTIFICATES:
      return [...action.payload];

    case ADD_CERTIFICATE:
      return [...action.payload];

    default:
      return state;
  }
};

export default certificateXer;
