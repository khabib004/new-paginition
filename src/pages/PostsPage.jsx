import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";

import PostCard from "../components/cards/PostCard";
import ServerLoading from "../components/loading/ServerLoading";

import request from "../server";

export class PostsPage extends Component {
  state = {
    posts: [],
    loading: false,
    total: 0,
    activPage: 1,
  };
  async getPosts() {
    try {
      this.setState( { loading: true } );
      let { data: allData } = await request( "posts" );
      let { data } = await request( "posts", {
        params: { _page: this.state.activPage, _limit: 6 },
      } );
      this.setState( { posts: data, total: allData.length } );
    } catch ( err ) {
      toast.error( err.response.statusText );
    } finally {
      this.setState( { loading: false } );
    }
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { posts, loading, total, activPage } = this.state;

    const pages = total / 16;
    let paginationitems = [];
    for ( let i = 1; i <= pages; i++ ) {
      paginationitems.push( i );
    }

    const getPage = ( page ) => {
      if ( page === "-" ) {
        this.setState( { activPage: this.state.activPage - 1 } );

      } else if ( page === "+" ) {
        this.setState( { activPage: this.state.activPage + 1 } );

      } else {
        this.setState( { activPage: page } );

      }
      this.getPosts();
    }

    return (
      <section>
        <h1>Our Latest Posts</h1>
        <div className="posts-row">
          {loading ? (
            <ServerLoading />
          ) : (
            <Fragment>
              {posts.map( ( post ) => <PostCard {...post} /> )}
              <ul className="pagination">
                <li className={`page-item ${activPage === 1 ? "disablet" : ""}`}>
                  <button onClick={() => getPage( "-" )} className="page-link">Previous</button>
                </li>
                {paginationitems.map( ( page ) => (
                  <li className={`page-item ${activPage === page ? "active" : ""}`}>
                    <button onClick={() => getPage( page )} className="page-link" >{page}</button>
                  </li>

                ) )}
                <li className={`page-item ${activPage === pages ? "disablet" : ""}`}>
                  <button onClick={() => getPage( "+" )} className="page-link">Next</button>
                </li>
              </ul>
            </Fragment>
          )}
        </div>
      </section>
    );
  }
}

export default PostsPage;
