const FETCH_TECHNOLOGIES = 'e2l-fe/technologies/FETCH_TECHNOLOGIES';
const ADD_TECHNOLOGY = 'e2l-fe/technologies/ADD_TECHNOLOGY';

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

const technologyXer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TECHNOLOGIES:
      return [...action.payload];

    case ADD_TECHNOLOGY:
      return [...action.payload];

    default:
      return state;
  }
};

export default technologyXer;
