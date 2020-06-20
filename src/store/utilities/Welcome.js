import axios from "axios";

// Action Types
const FETCH_RECIPES = "FETCH_RECIPES";

// Action Creators
const fetchRecipes = (recipe) => {  //where
  return {
    type: FETCH_RECIPES,
    payload: recipe,
  };
};

// Thunk Creators
export const fetchRecipeThunk = (items) => (dispatch) => {
  const url1 = "https://cors-anywhere.herokuapp.com/";
  return axios
    .get(url1 + `http://www.recipepuppy.com/api/?i=${items}`)
    .then((res) => res.data)
    .then((recipe) => dispatch(fetchRecipes(recipe)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;