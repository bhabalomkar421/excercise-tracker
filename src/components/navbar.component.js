import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">ExerciseTracker</NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link is-active" to="/">Exercise</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">Create Exercise Log</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user">User</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    );
  }
  
  export default Navbar;