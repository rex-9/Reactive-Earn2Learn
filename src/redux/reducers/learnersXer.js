const FETCH_LEARNERS = 'e2l-fe/learners/FETCH_LEARNERS';
const ADD_LEARNER = 'e2l-fe/learners/ADD_LEARNER';

const initialState = [
  {
    id: 1,
    username: 'Rex',
    fullname: 'Htet Naing',
    email: 'htetnaing0814@gmail.com',
    age: 22,
    city: 'Yangon',
    phone: '+959443112251',
    password: 'P@ssw0rd',
    image: 'https://static.zerochan.net/Dante.full.2952055.jpg',
    github: 'https://github.com/rex-9',
    linkedin: 'https://www.linkedin.com/in/rex-9',
  },
  {
    id: 2,
    username: 'Jerry',
    fullname: 'Sai La Min Oak',
    email: 'jerry@gmail.com',
    age: 21,
    city: 'Mandalay',
    phone: '+959443112251',
    password: 'P@ssw0rd',
    image: 'https://static.zerochan.net/Dante.full.2952055.jpg',
    github: 'https://github.com/macabrepanpapakhin',
    linkedin: 'https://www.linkedin.com/in/macabrepanpapakhin',
  },
  {
    id: 3,
    username: 'SwanHtet18',
    fullname: 'Swan Htet',
    email: 'SwanHtet18@gmail.com',
    age: 23,
    city: 'Pyin Oo Lwin',
    phone: '+959443112251',
    password: 'P@ssw0rd',
    image: 'https://static.zerochan.net/Dante.full.2952055.jpg',
    github: 'https://github.com/Swanhtet18',
    linkedin: 'https://www.linkedin.com/in/Swanhtet18',
  },
];

const learnersXer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEARNERS:
      return [...action.payload];

    case ADD_LEARNER:
      return [...action.payload];

    default:
      return state;
  }
};

export default learnersXer;
