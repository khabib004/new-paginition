import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { UserIcons } from "../assets/icons";
import request from "../server";
import image11 from "../assets/page/image11.png"
import image12 from "../assets/page/image12.png"
import image13 from "../assets/page/image13.png"
import image14 from "../assets/page/image14.png"
import image15 from "../assets/page/image15.png"
import image16 from "../assets/page/image16.png"
import image17 from "../assets/page/image17.png"
import image18 from "../assets/page/image18.png"
import image19 from "../assets/page/image19.png"
import image20 from "../assets/page/image20.png"



import "./PostsPage.css"


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
    // const { posts, loading,} = this.state;

    return (
      <section>
        <div className="layout-page container ">
          <div className="featured">
            <div className="featured-name">
              <h1>Featured Products</h1>
            </div>
            <div className="featured-page">
              <div className="regtangle">
                <div className="regtangle-img">
                  <img src={image11} alt="" />
                </div>
                <div className="regtangle-text">
                  <h3>Cantilever chair</h3>
                  <UserIcons />
                  <p>Code - Y523201</p>
                  <Link>$42.00</Link>
                </div>
              </div>
              <div className="regtangle">
                <div className="regtangle-img">
                  <img src={image12} alt="" />
                </div>
                <div className="regtangle-text">
                  <h3>Cantilever chair</h3>
                  <UserIcons />
                  <p>Code - Y523201</p>
                  <Link>$42.00</Link>
                </div>
              </div>
              <div className="regtangle">
                <div className="regtangle-img">
                  <img src={image13} alt="" />
                </div>
                <div className="regtangle-text">
                  <h3>Cantilever chair</h3>
                  <UserIcons />
                  <p>Code - Y523201</p>
                  <Link>$42.00</Link>
                </div>
              </div>
              <div className="regtangle">
                <div className="regtangle-img">
                  <img src={image14} alt="" />
                </div>
                <div className="regtangle-text">
                  <h3>Cantilever chair</h3>
                  <UserIcons />
                  <p>Code - Y523201</p>
                  <Link>$42.00</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="leatest">
            <div className="featured-name">
              <h1>Leatest Products</h1>
            </div>
            <div className="component">
              <div className="products">
                <div className="products-img">
                  <img src={image15} alt="" />
                </div>
                <div className="products-text">
                  <p>Comfort Handy Craft</p>
                  <Link>$42.00 $65.00</Link>
                </div>
              </div>
              <div className="products">
                <div className="products-img">
                  <img src={image16} alt="" />
                </div>
                <div className="products-text">
                  <p>Comfort Handy Craft</p>
                  <Link>$42.00 $65.00</Link>
                </div>
              </div>
              <div className="products">
                <div className="products-img">
                  <img src={image17} alt="" />
                </div>
                <div className="products-text">
                  <p>Comfort Handy Craft</p>
                  <Link>$42.00 $65.00</Link>
                </div>
              </div>
              <div className="products">
                <div className="products-img">
                  <img src={image18} alt="" />
                </div>
                <div className="products-text">
                  <p>Comfort Handy Craft</p>
                  <Link>$42.00 $65.00</Link>
                </div>
              </div>
              <div className="products">
                <div className="products-img">
                  <img src={image19} alt="" />
                </div>
                <div className="products-text">
                  <p>Comfort Handy Craft</p>
                  <Link>$42.00 $65.00</Link>
                </div>
              </div>
              <div className="products">
                <div className="products-img">
                  <img src={image20} alt="" />
                </div>
                <div className="products-text">
                  <p>Comfort Handy Craft</p>
                  <Link>$42.00 $65.00</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PostsPage;
