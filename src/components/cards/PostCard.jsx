import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PostCard extends Component {
  render() {
    const { id, title, body } = this.props;
    return (
      <div className="div-cart  alert-info">
        <div className="alert">
          <Link to={`/posts/${id}`}>
            <h3>
              {id}
            </h3>
            <h1>{title}</h1>
            <p>{body}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default PostCard;
