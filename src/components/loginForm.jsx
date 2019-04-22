import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  // Note: replaced with autoFocus inside input field
  // componentDidMount() {
  //   this.username.current.focus();
  // }

  handleSubmit = e => {
    e.preventDefault();

    // Call the server, make changes and redirect to different page
    // Note: make minimal use of refs. use only when really need to access DOM directly
    const username = this.username.current.value;
    console.log("Submitted", username);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
