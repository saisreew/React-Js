import React, { Component } from "react";
import { toast } from "react-toastify";

import PostsTable from "./posts-table";
//import Pagination from "./pagination-post";
import http from "../services/httpService";
import Spinner from "./spinner";
import Pagination from "react-js-pagination";
import _ from "lodash";
const baseurl = "https://jsonplaceholder.typicode.com";

class Posts extends Component {
  state = {
    posts: [],
    activePage: 1,
    pageSize: 10,
    loading: true,
    post: { id: "", userid: "", title: "", body: "" }
  };

  async componentDidMount() {
    console.log("inside componentDidMount");
    const promise = await http.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(promise);
    this.setState({ posts: promise.data, loading: false });
  }
  componentDidUpdate() {
    console.log("inside component did update");
  }
  paginate = n => {
    this.setState({ currentpage: n });
  };
  addPost = async () => {
    console.log("inside add post");
    const response = await http.post(baseurl + "/posts", this.state.post);
    console.log(response.data);
    const posts = [this.state.post, ...this.state.posts];
    this.setState({ posts });
    console.log(this.state.posts);
  };
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }
  paginate = (items, activePage, pageSize) => {
    const startIndex = (activePage - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };
  deletePost = async post => {
    const op = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    try {
      await http.delete(baseurl + "/posts/" + post.id);
    } catch (err) {
      console.log("error:" + err);
      if (err.response && err.response.status === 200) {
        toast.error("post has been deleted");
      } else {
        alert("network error");
        this.setState({ posts: op });
      }
    }
  };
  updatePost = event => {
    event.preventDefault();
    //console.log(post);
    const p = this.state.post;
    const posts = this.state.posts;
    const index = this.state.posts.indexOf(p);
    posts[index] = p;
    this.setState({ posts });
  };
  handleInputField = event => {
    const post = this.state.post;
    const { name, value } = event.currentTarget;
    post[name] = value;
    this.setState({ post });
  };
  getpost = id => {
    const posts = this.state.posts.filter(p => p.id === id);
    this.setState({ post: posts[0] });
  };

  render() {
    const paginatedPosts = this.paginate(
      this.state.posts,
      this.state.activePage,
      this.state.pageSize
    );
    return (
      <div>
        {this.state.loading && <Spinner></Spinner>}
        <PostsTable
          //posts={currentposts}
          posts={paginatedPosts}
          addPost={this.addPost}
          deletePost={this.deletePost}
          updatePost={this.updatePost}
          getpost={this.getpost}
          handleInputField={this.handleInputField}
          post={this.state.post}
        />
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.state.posts.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default Posts;
