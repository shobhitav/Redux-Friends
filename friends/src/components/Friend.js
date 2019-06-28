import React from "react";
import "./Friend.css";

function Friend(props) {
  return (
    <div className="Friend">
      <p className="FriendName">{props.friend.name}</p>
      <ul>
      <li><strong>Age: </strong>{props.friend.age}</li>
      <li><strong>Email: </strong>{props.friend.email}</li>
      </ul>
      <div className="FriendActions">
        <p title="Update" className="UpdateButton" onClick={() => props.editHandler(props.friend)}>Update</p>
        <p title="Delete" className="DeleteButton" onClick={() => props.deleteHandler(props.friend.id)}>Delete</p>  
      </div>
    </div>    
  );
}

export default Friend;
