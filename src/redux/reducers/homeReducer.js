import {
  GET_DESTINATION,
  //   GET_PREFERITI,
  GET_USER_LOGGED,
  LOGOUT_USER,
} from "../actions";

const initialState = {
  destinations: [],
  user: null,
  destination: null,
  commenti: [],
  preferiti: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DESTINATION:
      return {
        ...state,
        destinations: action.payload,
      };
    case GET_USER_LOGGED:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    // case GET_PREFERITI:
    //   return {
    //     ...state,
    //     preferiti: action.payload,
    //   };
    default:
      return state;
  }
};

export default homeReducer;
