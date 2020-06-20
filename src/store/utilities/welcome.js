import axios from "axios";

// Action Types
const FETCH_RECIPES = "FETCH_RECIPES";

// Action Creators
const fetchRecipes = (recipes) => {  //where
  return {
    type: FETCH_RECIPES,
    payload: recipes,
  };
};

// Thunk Creators
export const fetchRecipesThunk = (url) => (dispatch) => {
  const url1 = "https://cors-anywhere.herokuapp.com/";
  //console.log("Thunk invoking");
  return axios
    // .get(url1 + `http://www.recipepuppy.com/api/?i=${items}`)
    .get(url1 + url)
    .then((res) => res.data.results)
    .then((recipes) => dispatch(fetchRecipes(recipes)))
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
