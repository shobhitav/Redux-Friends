import React from "react";
import { connect } from "react-redux";
import { loggingInAction } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .loggingInAction(this.state.credentials)
      .then(() => this.props.history.push("/friendList"));
  };

  render() {
    return (
      <div className="Form">
        <p>Login</p>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="User Name..."
            value={this.state.credentials.username}
            onChange={this.handleChange}
          /> <br/>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={this.state.credentials.password}
            onChange={this.handleChange}
          /> <br/>
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { loggingInAction }
)(Login);
