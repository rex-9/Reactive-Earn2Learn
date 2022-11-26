const FETCH_PROFESSIONS = 'e2l-fe/professions/FETCH_PROFESSIONS';
// const FETCH_TECHNOLOGY_USERS = "e2l-fe/user_technologies/FETCH_TECHNOLOGY_USERS";

const initialState = [
  'React',
  'Ruby',
];

const professionXer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFESSIONS:
      return [...action.payload];

    default:
      return state;
  }
};

export default professionXer;
