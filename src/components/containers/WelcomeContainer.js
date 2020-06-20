import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchRecipesThunk } from "../../thunks";
import { NavBarView, WelcomeView} from "../views";
import { connect } from "react-redux";

class WelcomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: "",
        }
    }

    // componentDidMount() {
    //     //this.props.fetchCampus(this.props.match.params.id);
    // }

    // handleAdd = (e) => {
    //     const newList = this.state.items
    //     newList.push(e.target.value)
    //     this.setState({
    //         items: newList  
    //     });
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.addItems(this.state.items);
    // }

    // addFirstView() {
    //     return(<AddItemView
    //         handleAdd={this.handleAdd}
    //       /> 
    //     )
    // }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        //const id = this.props.match.params.id;
        const url = `http://www.recipepuppy.com/api/?i=${this.state.ingredients}`
        this.props.searching(url);
        this.props.history.push("/results");
      };

    render() {
        return(
            <>
            <NavBarView/>
            <WelcomeView
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                url={this.state.url}
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
      searching: (url) => dispatch(fetchRecipesThunk(url)),
    };
};

// Type check props;
WelcomeContainer.propTypes = {
    //allCampuses: PropTypes.array.isRequired,
    searching: PropTypes.func.isRequired,
};


export default connect(null, mapDispatch)(WelcomeContainer);
//export default WelcomeContainer;
