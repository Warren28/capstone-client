import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { fetchRecipeThunk } from "../../thunks";
import { NavBarView, WelcomeView, AddItemView } from "../views";


class WelcomeContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         items: []
    //     }
    // }

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

    render() {
        return(
            <>
            <NavBarView/>
            <WelcomeView/>
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

// const mapDispatch = (dispatch) => {
//     return {
//       addItems: (item) => dispatch(fetchRecipeThunk(item)),
//     };
// };

// // Type check props;
// WelcomeContainer.propTypes = {
//     //allCampuses: PropTypes.array.isRequired,
//     addItems: PropTypes.func.isRequired,
// };


//export default connect(null, mapDispatch)(WelcomeContainer);
export default WelcomeContainer;
