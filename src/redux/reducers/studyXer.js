const FETCH_STUDIES = 'e2l-fe/studies/FETCH_STUDIES';
const ADD_STUDY = 'e2l-fe/studies/ADD_STUDY';
const UPDATE_STUDY = 'e2l-fe/studies/UPDATE_STUDY';
const DELETE_STUDY = 'e2l-fe/studies/DELETE_STUDY';

const initialState = [
  {
    id: 1,
    topic: 'Redux',
    experience: 'Fall in love with Redux',
    completed: true,
    hours_taken: 3,
    user: {
      id: 1,
      username: 'Rex',
      fullname: 'Htet Naing',
      email: 'rex@soul.com',
      city: 'Yangon',
      bio: null,
      birthdate: '2000-03-18',
      image: null,
      role: 'learner',
    },
    technology: {
      id: 1,
      name: 'React',
    },
  },
  {
    id: 2,
    topic: 'Ruby On Rails',
    experience: null,
    completed: true,
    hours_taken: 0,
    user: {
      id: 2,
      username: 'SaSa',
      fullname: 'Sa Aung Htet Nyein',
      email: 'sasa@sasa.com',
      city: 'Yangon',
      bio: null,
      birthdate: '1999-11-07',
      image: null,
      role: 'learner',
    },
    technology: {
      id: 2,
      name: 'Ruby',
    },
  },
];

const studyXer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDIES:
      return [...action.payload];

    case ADD_STUDY:
      return [...state, action.payload];

    case UPDATE_STUDY:
      state[action.payload.id - 1] = action.payload;
      return state;

    case DELETE_STUDY:
      return state.filter((study) => study.id !== action.payload);

    default:
      return state;
  }
};

const addStudy = (study) => ({
  type: ADD_STUDY,
  payload: study,
});

const updateStudy = (study) => ({
  type: UPDATE_STUDY,
  payload: study,
});

const deleteStudy = (studyId) => ({
  type: DELETE_STUDY,
  payload: studyId,
});

export default studyXer;
export { addStudy, updateStudy, deleteStudy };
