import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

async function getRecipeList() 
{
  try 
  {
    const url1 = "https://cors-anywhere.herokuapp.com/";
    const response = await axios.get(url1 + 'http://www.recipepuppy.com/api/?i=onions,garlic');
    console.log(response);
  } 
  catch (error) 
  {
    console.error(error);
  }
}


function App() {
  getRecipeList();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
