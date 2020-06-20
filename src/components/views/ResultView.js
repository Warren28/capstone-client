import React from "react";
//import PropTypes from "prop-types";

const ResultView = (props) => {
  if (!props.recipes.length) {
    return <div className="all-campuses">There are no recipes</div>;
  }
  
  /*
  <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Food</h5>
                <p class="card-text">https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg</p>
                <p class="card-text"><b>Ingredients:</b> Red stuff, green stuff, maybe potato?</p>
              </div>
  </div>
  */

  console.log(props.recipes)
    return (
      <>
      <div class="card mb-3">
          <div>
            {props.recipes.map((recipe) => (
              <div>
                <img src={recipe.thumbnail} class="card-img" alt="..."></img>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
              </div>
            ))}
          </div>
      </div>
      </>
    );
  };
  
export default ResultView;
