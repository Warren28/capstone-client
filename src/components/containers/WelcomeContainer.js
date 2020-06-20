import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRecipeThunk } from "../../thunks";
import { NavBar } from "../views";
import { WelcomeView } from "../views";
import { AddItemView } from "../views";
import { Link } from "react-router-dom";

class WelcomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        //this.props.fetchCampus(this.props.match.params.id);
        //<button  class="btn btn-primary">Search</button>
    }

    handleAdd = (e) => {
        const newList = this.state.items
        newList.push(e.target.value)
        this.setState({
            items: newList  
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("warren")
        this.props.addItems(this.state.items);
    }

    addFirstView() {
        return(<AddItemView
            handleAdd={this.handleAdd}
          /> 
        )
    }

    render() {
        return(
            <>
            <NavBar/>
            <WelcomeView/>
            {this.addFirstView()}
            {this.state.items.map(items => {
                return(<AddItemView
                        handleAdd={this.handleAdd}
                      /> 
                )
            })}
            <button onClick={this.handleSubmit}>
                <Link to={'/results'} >Search</Link>
            </button>
            </>
        )
    }
}

/*
// map state to props
const mapState = (state) => {
  return {
    //campus: state.campus,
  };
};
*/

const mapDispatch = (dispatch) => {
    return {
      addItems: (item) => dispatch(fetchRecipeThunk(item)),
    };
};

// Type check props;
WelcomeContainer.propTypes = {
    //allCampuses: PropTypes.array.isRequired,
    addItems: PropTypes.func.isRequired,
};


export default connect(null, mapDispatch)(WelcomeContainer);