import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./header.module.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="container  justify-content-between">
          <NavLink to="/posts">Home</NavLink>
          <NavLink to="/about">Business</NavLink>
          <NavLink to="/contact">Entertainment</NavLink>
          <NavLink to="/">General</NavLink>
          <NavLink to="/portfolios">Health</NavLink>
          <NavLink to="/lifecycle">Science</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
