import { LOGGING_IN, LOGGING_IN_SUCCESS, LOGGING_IN_FAILURE } from "../actions";
import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE } from "../actions";
import { ADDING_FRIEND, ADDING_FRIEND_SUCCESS, ADDING_FRIEND_FAILURE } from "../actions";
import { DELETING_FRIEND, DELETING_FRIEND_SUCCESS, DELETING_FRIEND_FAILURE } from "../actions";
import { UPDATING_FRIEND, UPDATING_FRIEND_SUCCESS, UPDATING_FRIEND_FAILURE } from "../actions";

const initialState = {
  loggingIn: false,
  fetchingFriends: false,
  friends: [],
  addingFriend: false,
  deletingFriend: false,
  updatingFriend: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      state = {...state, loggingIn: true};
      break;
    case LOGGING_IN_SUCCESS:
      state = {...state, loggingIn: false};
      break;  
    case LOGGING_IN_FAILURE:
      state = {...state, loggingIn: false, error: action.error};
      break;
    case FETCHING_FRIENDS:
      state = {...state, fetchingFriends: true};
      break;
    case FETCHING_FRIENDS_SUCCESS:
      state = {...state, fetchingFriends: false, friends: action.payload};
      break;  
    case FETCHING_FRIENDS_FAILURE:
      state = {...state, fetchingFriends: false, error: action.error};
      break;
    case ADDING_FRIEND:
      state = {...state, addingFriend: true};
      break;
    case ADDING_FRIEND_SUCCESS:
      state = {...state, addingFriend: false, friends: action.payload};
      break;
    case ADDING_FRIEND_FAILURE:
      state = {...state, addingFriend: false, error: action.error};
      break;
    case DELETING_FRIEND:
      state = {...state, deletingFriend: true};
      break;
    case DELETING_FRIEND_SUCCESS:
      state = {...state, deletingFriend: false, friends: action.payload};
      break;
    case DELETING_FRIEND_FAILURE:
      state = {...state, deletingFriend: false, error: action.error};
      break;
    case UPDATING_FRIEND:
      state = {...state, updatingFriend: true};
      break;
    case UPDATING_FRIEND_SUCCESS:
      state = {...state, updatingFriend: false, friends: action.payload};
      break;
    case UPDATING_FRIEND_FAILURE:
      state = {...state, updatingFriend: false, error: action.error};
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
