const FETCH_LEARNERS = 'e2l-fe/learners/FETCH_LEARNERS';
const ADD_LEARNERS = 'e2l-fe/learners/ADD_LEARNERS';

const initialState = [
  {
    id: 1,
    name: 'Rex',
    image: 'https://static.zerochan.net/Dante.full.2952055.jpg',
    github: 'https://github.com/rex-9',
    linkedin: 'https://www.linkedin.com/in/rex-9'
  },
  {
    id: 2,
    name: 'Jerry',
    image: 'https://static.zerochan.net/Dante.full.2952055.jpg',
    github: 'https://github.com/macabrepanpapakhin',
    linkedin: 'https://www.linkedin.com/in/macabrepanpapakhin'
  },
  {
    id: 3,
    name: 'Ko Swan',
    image: 'https://static.zerochan.net/Dante.full.2952055.jpg',
    github: 'https://github.com/Swanhtet18',
    linkedin: 'https://www.linkedin.com/in/Swanhtet18'
  }
];

const learnersXer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEARNERS:
      return [...action.payload]
      break;

    case ADD_LEARNERS:
      return [...action.payload]
      break;

    default:
      return state;
      break;
  }
}

export default learnersXer;
