import React from "react";

const Navbar = ({ navbarCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/#">
        Counters
        <span className="badge m-2 badge-pill bg-secondary">
          {navbarCounters}
        </span>
      </a>
    </nav>
  );
};
export default Navbar;
