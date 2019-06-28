import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchingFriendsAction , deletingFriendAction } from '../actions';
import Friend from "./Friend";
import "./Friend.css";

class FriendList extends React.Component {
  componentDidMount() {
    this.props.fetchingFriendsAction();
  }

  deleteHandler = id => {
    this.props
      .deletingFriendAction(id)
      .then(() => this.props.history.push("/friendList"));
  }

  editHandler = friend => {
    this.props.history.push("/updateFriend", {friend : friend} );
  }

  render() { 
    return (
      <div className="FriendList">
        {
          !this.props.fetchingFriends 
          ? this.props.friends.map(friend => (<Friend key={friend.id} friend={friend} editHandler={this.editHandler} deleteHandler={this.deleteHandler} />))
          : <h4>Fetching friends ...</h4>
        }
        {
          this.props.error && <p className="error"> { 
            this.props.error
          } </p> 
        }
      </div>
    );
  }
}

const mapStateToProps = ({ friends , fetchingFriends , error }) => ({
  friends,
  fetchingFriends,
  error
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchingFriendsAction , deletingFriendAction }
  )(FriendList)
);
