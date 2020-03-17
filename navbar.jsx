import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <NavLink className="navbar-brand" to="/">
          MoviesApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/employees">
                  Employees
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts">
                Posts
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav justify-content-end ml-auto">
            {!props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}

            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  onClick={() => props.setLogin(false)}
                  className="nav-link "
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/registration">
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
