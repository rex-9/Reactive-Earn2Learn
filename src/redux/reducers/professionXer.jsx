const FETCH_PROFESSIONS = 'reactive-earn2learn/professions/FETCH_PROFESSIONS';
// const FETCH_TECHNOLOGY_USERS = "reactive-earn2learn/user_technologies/FETCH_TECHNOLOGY_USERS";

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
