const FETCH_LEARNERS = 'e2l-fe/learners/FETCH_LEARNERS';
const UPDATE_LEARNER = 'e2l-fe/learners/UPDATE_LEARNER';
const ADD_LEARNER = 'e2l-fe/learners/ADD_LEARNER';

const initialState = [
  {
    id: 1,
    username: 'Rex',
    fullname: 'Htet Naing',
    image: 'https://static.zerochan.net/Dante.full.2952055.jpg',
    bio: "I'm a web developer",
    city: 'Yangon',
    birthdate: '1990-01-01',
    phone: '+959443112251',
    role: 'admin',
    email: 'htetnaing0814@gmail.com',
    password: 'P@ssw0rd',
    github: 'https://github.com/rex-9',
    linkedin: 'https://www.linkedin.com/in/rex-9',
  },
  {
    id: 2,
    username: 'Jerry',
    fullname: 'Sai La Min Oak',
    image: null,
    bio: null,
    city: 'Mandalay',
    birthdate: '1990-01-01',
    phone: '+959443112251',
    role: 'learner',
    email: 'jerry@gmail.com',
    password: 'P@ssw0rd',
    github: 'https://github.com/macabrepanpapakhin',
    linkedin: 'https://www.linkedin.com/in/macabrepanpapakhin',
  },
  {
    id: 3,
    username: 'SwanHtet18',
    fullname: 'Swan Htet',
    image: 'https://static.zerochan.net/Dante.full.2952055.jpg',
    bio: 'I am UI designer',
    city: 'Pyin Oo Lwin',
    birthdate: '1990-01-01',
    phone: '+959443112251',
    role: 'learner',
    email: 'SwanHtet18@gmail.com',
    password: 'P@ssw0rd',
    github: 'https://github.com/Swanhtet18',
    linkedin: 'https://www.linkedin.com/in/Swanhtet18',
  },
];

const learnerXer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEARNERS:
      return [...action.payload];

    case ADD_LEARNER:
      return [...state, action.payload];

    case UPDATE_LEARNER:
      state[action.payload.id - 1] = action.payload;
      return [...state];

    default:
      return state;
  }
};

const addLearner = (learner) => ({
  type: ADD_LEARNER,
  payload: learner,
});

const updateLearner = (learner) => ({
  type: UPDATE_LEARNER,
  payload: learner,
});

export default learnerXer;
export { addLearner, updateLearner };
