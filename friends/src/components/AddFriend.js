import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addingFriendAction } from '../actions';
import "./Friend.css";

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  addFriend = event => {
    event.preventDefault();
    // add code to create the friend using the api
    this.props
      .addingFriendAction(this.state)
      .then(() => this.props.history.push("/friendList"));

    this.setState({
      name: '',
      height: '',
      age: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Form">
        <p>Add Friend</p>
        <form onSubmit={this.addFriend}>
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
          <button type="submit" className="button">Add</button>
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
    { addingFriendAction }
  )(AddFriend)
);
