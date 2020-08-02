import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Contact from "../Blog/Contact/Contact";
import Posts from "../Posts/Posts";
import "./Blog.css";
import asyncComponent from "../../hoc/asyncComponent";

//import FullPost from "../Blog/FullPost/FullPost";
//import Posts from "../Posts/Posts";
//import axios from "axios";
//import axios from "../../axios";
//import NewPost from "../../containers/Blog/NewPost/NewPost";

const AsynNewPost = asyncComponent(() => {
  return import("../../containers/Blog/NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                  }}
                >
                  New Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/contact",
                  }}
                >
                  Contact-Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/new-post" exact render={() => <h1>new posting</h1>} />
        <Route path="/contact" exact render={() => <h1>contacting</h1>} /> */}

        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsynNewPost} />
          ) : null}

          <Route path="/contact" component={Contact} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" exact to="/Posts" />
          <Route render={() => <h2>Page Not found</h2>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
