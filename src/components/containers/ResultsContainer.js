import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRecipesThunk } from "../../thunks";
import { NavBarView } from "../views";
import { ResultsView } from "../views";
//import { AddItemView } from "../views"

class ResultsContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         items: ['']
    //     }
    // }

    componentDidMount() {
        this.props.fetchRecipes();
    }

    // handleSubmit = (e) => {
    //     console.log(e)

    //     const newList = this.state.items
    //     newList.push('warren')
    //     this.setState({
    //         items: newList  
    //     });
    // }
    /*
    addView() {
        return(<AddItemView
              handleSubmit={this.handleSubmit}
             />
        );
    }
    */

    render() {
        console.log(this.props.recipes);
        return(
            <>
            <NavBarView/>
            <ResultsView 
                recipes={this.props.recipes}
            />
            {/* {this.state.items.map(items => {
                return(<AddItemView
                        handleSubmit={this.handleSubmit}
                      /> 
                )
            })}
            <a class="btn btn-primary" href="result.html">Search</a> */}
            </>
        )
    }
}

// Map state to props;
const mapState = (state) => {
    return {
      recipes: state.welcome,
    };
  };
  
  // Map dispatch to props;
  const mapDispatch = (dispatch) => {
    return {
      fetchRecipes: () => dispatch(fetchRecipesThunk()),
    };
  };
  
  // Type check props;
  ResultsContainer.propTypes = {
    recipes: PropTypes.array.isRequired,
    fetchRecipes: PropTypes.func.isRequired,
  };


export default connect(mapState, mapDispatch)(ResultsContainer);