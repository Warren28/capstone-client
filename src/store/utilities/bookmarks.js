import axios from "axios";

// Action Types
const BOOKMARK_RECIPE = "BOOKMARK_RECIPE";

// Action Creators
const bookmarkRecipe = (recipe) => {
  //where
  return {
    type: BOOKMARK_RECIPE,
    payload: recipe,
  };
};

// Thunk Creators
export const bookmarkRecipeThunk = (recipe) => (dispatch) => {
  return axios
    .post(`http://localhost:3001/`, recipe)
    .then((res) => res.data)
    .then((newBookmark) => dispatch(bookmarkRecipe(newBookmark)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case BOOKMARK_RECIPE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
