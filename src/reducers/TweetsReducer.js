import { SOCKET_MESSAGE } from "../actions/types";

const INITIAL_STATE = {
  messages: [],
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SOCKET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};
