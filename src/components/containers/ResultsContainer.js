import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bookmarkRecipeThunk } from "../../thunks";
import { NavBarContainer } from "./";
import { ResultsView } from "../views";

class ResultsContainer extends Component {
  handleAdd = (recipeObject) => (event) => {
    recipeObject.userId = this.props.id;
    console.log(recipeObject);
    this.props.addBookmark(recipeObject);
  };

  render() {
    return (
      <>
        <NavBarContainer />
        <ResultsView recipes={this.props.recipes} handleAdd={this.handleAdd} />
      </>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    recipes: state.welcome,
    id: state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addBookmark: (recipe) => dispatch(bookmarkRecipeThunk(recipe)),
  };
};

// Type check props;
ResultsContainer.propTypes = {
  recipes: PropTypes.array.isRequired,
  addBookmark: PropTypes.func.isRequired,
  //fetchRecipes: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(ResultsContainer);
