const FETCH_LEARNERS = 'e2l-fe/learners/FETCH_LEARNERS';

const initialState = [
  {
    name: 'Rex',
    github: 'https://github.com/rex-9',
    linkedin: 'https://www.linkedin.com/in/rex-9'
  },
  {
    name: 'Jerry',
    github: 'https://github.com/macabrepanpapakhin',
    linkedin: 'https://www.linkedin.com/in/macabrepanpapakhin'
  },
  {
    name: 'Ko Swan',
    github: 'https://github.com/Swanhtet18',
    linkedin: 'https://www.linkedin.com/in/Swanhtet18'
  }
];

const learnersXer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEARNERS:
      return [...action.payload]
      break;

    default:
      return state;
      break;
  }
}

export default learnersXer;
