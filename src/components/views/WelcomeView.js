import React from "react";
import PropTypes from "prop-types";

const WelcomeView = (props) => {
    return (
        <div>
          <form onSubmit={props.handleSubmit}>
            <div>
            Ingredients:{" "}
              <input
                value={props.url}
                name="ingredients"
                placeholder="example: onions,garlic" 
                onChange={props.handleChange}
              ></input>
            </div>
            <button>search</button>
          </form>
        </div>


        // <div>
        //   <form onSubmit={props.handleSubmit}>
        //     <div>
        //       Name:{" "}
        //       <input
        //         value={props.name}
        //         name="name"
        //         onChange={props.handleChange}
        //       ></input>
        //     </div>
        //     <div>
        //       Address:{" "}
        //       <input
        //         value={props.address}
        //         name="address"
        //         onChange={props.handleChange}
        //       ></input>
        //     </div>
        //     <div>
        //       Description:{" "}
        //       <input
        //         value={props.description}
        //         name="description"
        //         onChange={props.handleChange}
        //       ></input>
        //     </div>
        //     <div>
        //       Image Url:{" "}
        //       <input
        //         value={props.imageUrl}
        //         name="imageUrl"
        //         onChange={props.handleChange}
        //       ></input>
        //     </div>
        //     <button>Edit Campus</button>
        //   </form>
        // </div>
    );
};

WelcomeView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    // address: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    // imageUrl: PropTypes.string.isRequired,
};

export default WelcomeView;