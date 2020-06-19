import React from "react";
import PropTypes from "prop-types";

const ResultView = (props) => {
    return (
      <>
      <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
              <div class="col-md-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" class="card-img" alt="..."></img>
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Food</h5>
                    <p class="card-text">https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg</p>
                    <p class="card-text"><b>Ingredients:</b> Red stuff, green stuff, maybe potato?</p>
                  </div>
             </div>
          </div>
      </div>
      </>
    );
  };
  
export default ResultView;
