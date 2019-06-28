import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatingFriendAction } from '../actions';
import "./Friend.css";

class UpdateFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.state.friend.id,
      name: this.props.location.state.friend.name,
      age: this.props.location.state.friend.age,
      email: this.props.location.state.friend.email
    };
  }

  updateFriend = event => {
    event.preventDefault();
    // add code to create the friend using the api
    this.props
      .updatingFriendAction(this.state)
      .then(() => this.props.history.push("/friendList"));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Form">
        <p>Update Friend</p>
        <form onSubmit={this.updateFriend}>
          <input
            onChange={this.handleInputChange}
            placeholder="Name..."
            value={this.state.name}
            name="name"
          /> <br/>
          <input
            onChange={this.handleInputChange}
            placeholder="Age..."
            value={this.state.age}
            name="age"
          /> <br/>
          <input
            onChange={this.handleInputChange}
            placeholder="Email..."
            value={this.state.email}
            name="email"
          /> <br/>
          <button type="submit" className="button">Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ error }) => ({
  error
});

export default withRouter(
  connect(
    mapStateToProps,
    { updatingFriendAction }
  )(UpdateFriend)
);
