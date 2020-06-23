import React, { Component } from "react";
import PropTypes from "prop-types";
import { me } from "../../thunks";
import { connect } from "react-redux";
import { ProfileView } from "../views";
import { NavBarContainer } from "./";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getUser(this.props.user.id);
  }

  render() {
    console.log(this.props.user);
    return (
      <>
        <NavBarContainer />
        <ProfileView user={this.props.user} />
      </>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUser: (id) => dispatch(me(id)),
  };
};

// Type check props;
ProfileContainer.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(ProfileContainer);
