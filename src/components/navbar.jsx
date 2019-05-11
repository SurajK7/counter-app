import React from "react";

const NavBar = ({ counters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {counters.filter(c => c.value > 0).length}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
