import React from "react";
//import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ResultsView = (props) => {
  //console.log(props.recipes);
  if (!props.recipes.length) {
    return (
      <>
        <Link to="/" className="nav-link">Search</Link>
        <div className="no-result">There are no recipes found</div>
      </>
    );
  }

  return (
    <>
      <Link to="/" className="nav-link">Search</Link>
      
      <div className="all-campuses">
        {props.recipes.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.thumbnail} class="card-img" alt="..."></img>
            <div class = "info">
              <Link to={`/recipe/${recipe.id}`}>
                <h1>{recipe.title}</h1>
              </Link>
              <p>Ingredients: {recipe.ingredients}</p>
              <button onClick={props.handleAdd(recipe)}>+</button>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

ResultsView.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default ResultsView;
