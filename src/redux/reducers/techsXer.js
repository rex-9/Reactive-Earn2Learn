const FETCH_TECHS = 'e2l-fe/techs/FETCH_TECHS';
const ADD_TECH = 'e2l-fe/techs/ADD_TECH';

const initialState = [
  {
    id: 1,
    name: 'React',
  },
  {
    id: 2,
    name: 'Ruby',
  },
];

const techsXer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TECHS:
      return [...action.payload];

    case ADD_TECH:
      return [...action.payload];

    default:
      return state;
  }
};

export default techsXer;
