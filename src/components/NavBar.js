import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return ( <div className="NavBar">
    <Router>
      <Header />
      <main>
        <Route path ="/home">
          <Home />
          </Route>
          <Route path="/movies">
            <Movies />
            </Route>
            <Route path="/directors">
            <Directors />
            </Route>
            <Route path="/actors">
            <Actors />
            </Route>

      </main>
    </Router>
  </div>
  );
}

export default NavBar;
