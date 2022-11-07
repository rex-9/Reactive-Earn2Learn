const FETCH_STUDIES = 'e2l-fe/studies/FETCH_STUDIES';
const ADD_STUDY = 'e2l-fe/studies/ADD_STUDY';

const initialState = [
  {
    id: 1,
    topic: 'Redux',
    experience: 'Fall in love with Redux',
    completed: true,
    hours_taken: 3,
    user_id: 1,
    technology_id: 1,
  },
  {
    id: 2,
    topic: 'Ruby On Rails',
    experience: null,
    completed: false,
    hours_taken: 0,
    user_id: 1,
    technology_id: 2,
  },
];

const studyXer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDIES:
      return [...action.payload];

    case ADD_STUDY:
      return [...action.payload];

    default:
      return state;
  }
};

export default studyXer;
