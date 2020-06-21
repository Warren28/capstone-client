import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bookmarkRecipeThunk } from "../../thunks";
import { NavBar } from "../views";
import { ResultView } from "../views";

class ResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: []
        }
    }

    componentDidMount() {
        this.props.addBookmark()
    }

    handleAdd = recipeObject => event => {
        const newList = [...this.state.bookmarks]
        console.log(recipeObject)
        newList.push(recipeObject)

        this.setState({
            bookmarks: newList  
        });
        this.props.addBookmark(this.state.bookmarks)
    }

    render() {
        return(
            <>
            <ResultView
              recipes={this.props.recipes}
              bookmark={this.handleAdd}
            />
            </>
        )
    }
}

// map state to props
const mapState = (state) => {
  return {
    recipes: state.welcome
  };
};


const mapDispatch = (dispatch) => {
    return {
      addBookmark: (recipe) => dispatch(bookmarkRecipeThunk(recipe)),
    };
};


// Type check props;
ResultContainer.propTypes = {
    recipes: PropTypes.array.isRequired,
    addBookmark: PropTypes.func.isRequired,
};


export default connect(mapState, mapDispatch)(ResultContainer);