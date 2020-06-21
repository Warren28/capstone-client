import React from "react";
//import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ResultsView = (props) => {
  //console.log(props.recipes);
  if (!props.recipes.length) {
    return (
      <>
        <Link to="/" className="nav-link">
          Search
        </Link>
        <div className="all-campuses">There are no recipe found</div>
      </>
    );
  }

  return (
    <>
      <Link to="/" className="nav-link">
        Search
      </Link>
      <div className="all-campuses">
        {props.recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h1>{recipe.title}</h1>
            </Link>
            <img src={recipe.thumbnail} class="card-img" alt="..."></img>
            {/* <button onClick={props.bookmark(recipe)}>+</button> */}
            <p>{recipe.ingredients}</p>
          </div>
        ))}
      </div>
    </>
  );
};

ResultsView.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default ResultsView;
