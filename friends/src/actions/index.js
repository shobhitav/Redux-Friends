import axios from "axios";
export const LOGGING_IN = "LOGGING_IN";
export const LOGGING_IN_SUCCESS = "LOGGING_IN_SUCCESS";
export const LOGGING_IN_FAILURE = "LOGGING_IN_FAILURE";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADDING_FRIEND_SUCCESS = "ADDING_FRIEND_SUCCESS";
export const ADDING_FRIEND_FAILURE = "ADDING_FRIEND_FAILURE";
export const DELETING_FRIEND = "DELETING_FRIEND";
export const DELETING_FRIEND_SUCCESS = "DELETING_FRIEND_SUCCESS";
export const DELETING_FRIEND_FAILURE = "DELETING_FRIEND_FAILURE";
export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const UPDATING_FRIEND_SUCCESS = "UPDATING_FRIEND_SUCCESS";
export const UPDATING_FRIEND_FAILURE = "UPDATING_FRIEND_FAILURE";

export const loggingInAction = creds => dispatch => {
    dispatch({ type: LOGGING_IN });
    return axios
                .post("http://localhost:5000/api/login", creds)
                .then( resp => {
                        localStorage.setItem("token", resp.data.payload);
                        dispatch({type: LOGGING_IN_SUCCESS});
                    }
                )
                .catch( err => dispatch({type: LOGGING_IN_FAILURE, error: err.message}) );
};

export const fetchingFriendsAction = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    return axios
                .get("http://localhost:5000/api/friends", {
                    headers: { Authorization: localStorage.getItem("token") }
                })
                .then( resp => dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: resp.data}) )
                .catch( err => dispatch({type: FETCHING_FRIENDS_FAILURE, error: err.message}) );
};

export const addingFriendAction = (newFriend) => dispatch => {
    dispatch({ type: ADDING_FRIEND });
    return axios
                .post("http://localhost:5000/api/friends", newFriend, {
                    headers: { Authorization: localStorage.getItem("token") }
                })
                .then( resp => dispatch({type: ADDING_FRIEND_SUCCESS, payload: resp.data}) )
                .catch( err => dispatch({type: ADDING_FRIEND_FAILURE, error: err.message}) );
};

export const deletingFriendAction = (id) => dispatch => {
    dispatch({ type: DELETING_FRIEND });
    return axios
                .delete(`http://localhost:5000/api/friends/${id}`, {
                    headers: { Authorization: localStorage.getItem("token") }
                })
                .then( resp => dispatch({type: DELETING_FRIEND_SUCCESS, payload: resp.data}) )
                .catch( err => dispatch({type: DELETING_FRIEND_FAILURE, error: err.message}) );
};

export const updatingFriendAction = (updatedFriend) => dispatch => {
    dispatch({ type: UPDATING_FRIEND });
    return axios
                .put(`http://localhost:5000/api/friends/${updatedFriend.id}`, updatedFriend, {
                    headers: { Authorization: localStorage.getItem("token") }
                })
                .then( resp => dispatch({type: UPDATING_FRIEND_SUCCESS, payload: resp.data}) )
                .catch( err => dispatch({type: UPDATING_FRIEND_FAILURE, error: err.message}) );
};
