import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.module.css";
import logo from "../../assets/Hekto.png";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container d-flex gap-50px">
          <div className="logo-page">
            <Link to="/posts">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className="justify-content-between">
            <NavLink to="/posts">Home</NavLink>
            <NavLink to="/about">Pages</NavLink>
            <NavLink to="/contact">Products</NavLink>
            <NavLink to="/">Blog </NavLink>
            <NavLink to="/portfolios">Shop</NavLink>
            <NavLink to="/lifecycle">Contact</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
