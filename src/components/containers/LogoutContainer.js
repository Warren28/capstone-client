import React, { Component } from "react";
import PropTypes from "prop-types";
import { logout } from "../../thunks";
import { connect } from "react-redux";
import { LogoutView } from "../views";

class LogoutContainer extends Component {


    componentDidMount() {
        this.props.logout();
    }

    render() {
        return(
            <>
           <LogoutView/> 
           </>
        )
    }
}


const mapDispatch = (dispatch) => {
    return {
      logout: () => dispatch(logout()),
    };
};

// Type check props;
LogoutContainer.propTypes = {
    //allCampuses: PropTypes.array.isRequired,
    logout: PropTypes.func.isRequired,
};


export default connect(null, mapDispatch)(LogoutContainer);