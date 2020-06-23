import React from "react";
import PropTypes from "prop-types";
import logo from "../../scrap2food-logo.png";
const WelcomeView = (props) => {
  return (
    <div>
      <h1 class="title">Welcome to</h1>
      <img src={logo} />
      <form onSubmit={props.handleSubmit}>
        <div class="input-group-append">
          <input
            value={props.url}
            name="ingredients"
            placeholder="Example: onions,garlic"
            onChange={props.handleChange}
            class="form-control"
          ></input>
          <button class="btn btn-primary">Search</button>
        </div>
      </form>
    </div>
  );
};

WelcomeView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  //url: PropTypes.string.isRequired,
  // address: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // imageUrl: PropTypes.string.isRequired,
};

export default WelcomeView;
