import React, { Component } from "react";
import request from "../server";
import { toast } from "react-toastify";

import "./PostsPage.css"

export class PostPage extends Component {
  state = {
    post: {},
  };
  async getPost() {
    try {
      let postId = window.location.pathname.split("/").at(-1);
      let { data } = await request(`posts/${postId}`);
      this.setState({ post: data });
    } catch (err) {
      toast.error(err.response.statusText);
    }
  }
  componentDidMount() {
    this.getPost();
  }
  render() {
    const { post } = this.state;
    return (
      <section>
        <div className="page-card">
          <a href="/posts">Home</a>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        </div>
      </section>
    );
  }
}

export default PostPage;
