import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { fetchRecipesThunk } from "../../thunks";
import { NavBarView } from "../views";
//import { ResultsView } from "../views";
//import { AddItemView } from "../views"

class NavBarContainer extends Component {
    render() {
        console.log(this.props.isLoggedIn);
        return(
            <>
            <NavBarView
            isLoggedIn={this.props.isLoggedIn}
            />
            </>
        )
    }
}

// Map state to props;
const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      //user: state.user,
    };
  };
  
  


export default connect(mapState, null)(NavBarContainer);