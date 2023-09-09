import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Notfound extends Component {
  render() {
    return (
      <div>
        <h1>Notfound</h1>
        <Link to="/posts">Home</Link>
      </div>
    );
  }
}

export default Notfound;
