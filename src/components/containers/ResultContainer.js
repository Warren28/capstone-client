import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRecipeThunk } from "../../thunks";
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
        //this.props.recipes()
        //this.props.fetchCampus(this.props.match.params.id);
    }

    handleAdd = (e) => {
        /*
        const newList = this.state.items
        newList.push(e.target.value)
        this.setState({
            items: newList  
        });
        */
    }

    handleSubmit = (e) => {
        //e.preventDefault();
        //this.props.addItems(this.state.items);
    }

    render() {
        return(
            <>
            <NavBar/>
            <button onClick={this.handleSubmit} class="btn btn-primary">Search</button>
            <ResultView
              recipes={this.props.recipes}
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

/*
const mapDispatch = (dispatch) => {
    return {
      addItems: (item) => dispatch(fetchRecipeThunk(item)),
    };
};
*/

// Type check props;
ResultContainer.propTypes = {
    recipes: PropTypes.array.isRequired,
    //addItems: PropTypes.func.isRequired,
};


export default connect(mapState, null)(ResultContainer);