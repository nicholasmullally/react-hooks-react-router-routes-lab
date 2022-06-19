import React from "react";
import { actors } from "../data";

function Actors() {
  return ( <div className="actors">

  <h1>Actors Page</h1>

  <div>Benedict Cumberbatch
    <ul>
      <li>Doctor Strange</li>
      <li>The Imitation Game</li>
      <li>Black Mass</li>
    </ul>
  </div>

  <div>Justin Timberlake
    <ul>
      <li>Trolls</li>
      <li>Friends with Benefits</li>
      <li>The Social Network</li>
    </ul>
  </div>

  <div>Anna Kendrick
    <ul>
      <li>Trolls</li>
      <li>Pitch Perfect</li>
      <li>Into The Wood</li>
    </ul>
  </div>

  <div>Tom Cruise
    <ul>
      <li>Jack Reacher: Never Go Back</li>
      <li>Mission Impossible 4</li>
      <li>War of the Worlds</li>
    </ul>
  </div>

</div>
);
}

export default Actors;
