import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bookmarkRecipeThunk } from "../../thunks";
import { NavBarContainer } from "./";
import { ResultsView } from "../views";
//import { AddItemView } from "../views"

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
    };
  }

  componentDidMount() {
    this.props.addBookmark();
  }

  handleAdd = (recipeObject) => (event) => {
    const newList = [...this.state.bookmarks];
    console.log(recipeObject);
    newList.push(recipeObject);

    this.setState({
      bookmarks: newList,
    });
    this.props.addBookmark(this.state.bookmarks);
  };
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         url: "",

  //     }
  // }

  // componentDidMount() {
  //     this.props.fetchRecipes();
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const id = this.props.match.params.id;
  //   this.props.editCampus(id, this.state);
  //   this.props.history.push(`/campuses/${id}`);
  // };

  render() {
    //console.log(this.props.recipes);
    return (
      <>
        <NavBarContainer />
        <ResultsView recipes={this.props.recipes} />
        {/* {this.state.items.map(items => {
                return(<AddItemView
                        handleSubmit={this.handleSubmit}
                      /> 
                )
            })}
            <a class="btn btn-primary" href="result.html">Search</a> */}
      </>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    recipes: state.welcome,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addBookmark: (recipe) => dispatch(bookmarkRecipeThunk(recipe)),
  };
};

// Map dispatch to props;
// const mapDispatch = (dispatch) => {
//   return {
//     fetchRecipes: () => dispatch(fetchRecipesThunk()),
//   };
// };

// Type check props;
ResultsContainer.propTypes = {
  recipes: PropTypes.array.isRequired,
  addBookmark: PropTypes.func.isRequired,
  //fetchRecipes: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(ResultsContainer);
