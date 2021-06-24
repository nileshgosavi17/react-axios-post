import React, { Component } from "react";
import axios from "axios";
class PostHttp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((responce) => {
        console.log(responce);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <form onSubmit={this.submitHandler}>
            <div className="form-group text-left">
              <label>userId</label>
              <input
                type="text"
                name="userId"
                className="form-control"
                value={userId}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group text-left">
              <label>title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={title}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group text-left">
              <label>body</label>
              <input
                type="text"
                name="body"
                className="form-control"
                value={body}
                onChange={this.changeHandler}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostHttp;
