import React from "react";
//Create link for Saved
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/books">
        React Reading List
      </a>
      <Link className="navbar-brand" to="/saved">
        Database
      </Link>
    </nav>
  );
}

export default Nav;
