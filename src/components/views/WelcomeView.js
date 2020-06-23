import React from "react";
import PropTypes from "prop-types";
import logo from "../../scrap2food-logo.png";
const WelcomeView = (props) => {
    return (
        <div>
          <h1>Welcome to Scrap2Food!</h1>
          <img src={logo}/>
          <form onSubmit={props.handleSubmit}>
            <div class="input-group-append">
            {/* Ingredients:{" "} */}
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
    );
};

WelcomeView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,

};

export default WelcomeView;