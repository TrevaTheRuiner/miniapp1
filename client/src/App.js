import './App.css';
// import { Router, Route, Link } from 'react-router-dom';
import React, { createContext, useState } from 'react';

export const movieContext = createContext();

function App() {

  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];



  return (
    <div>
      <h1> Trevor's Top 5 Movies of all Time</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
