import React from "react";
import { movies } from "../data";

import { NavLink } from "react-router-dom";


function Movies() {
  return( <div className="movies">

<h1>Movies Page</h1>

  <div>Doctor Strange, Time: 115
    <ul>
      <li>Action</li>
      <li>Adventure</li>
      <li>Fantasy</li>
    </ul>
  </div>

  <div>Trolls, Time: 92
    <ul>
      <li>Animation</li>
      <li>Adventure</li>
      <li>Comedy</li>
      <li>Family</li>
      <li>Fantasy</li>
    </ul>
  </div>

  <div>Jack Reacher: Never Go Back, Time: 118
    <ul>
      <li>Action</li>
      <li>Adventure</li>
      <li>Crime</li>
      <li>Mystery</li>
      <li>Thriller</li>
    </ul>
  </div>
  
  </div>
);
}

export default Movies;
