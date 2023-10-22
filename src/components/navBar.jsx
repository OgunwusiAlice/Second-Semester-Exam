import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ALICIA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="navbar-toggler"
          data-bs-target="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/">
              home
            </NavLink>
            <NavLink className="nav-item nav-link active" to="/Counter">
              counter
            </NavLink>
            <NavLink className="nav-item nav-link" to="/test_error_boundary">
              Test Error Boundry
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
