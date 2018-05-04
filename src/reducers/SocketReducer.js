import {
    SOCKET_MESSAGE_GREETINGS,
    SOCKET_CONNECT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    connected: false,
    messages: null,
    initsuscribe: false,
    greetings: null,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SOCKET_MESSAGE_GREETINGS:
            return {
                ...state,
                initsuscribe: true,
                greetings: action.payload
            };
        case SOCKET_CONNECT_SUCCESS:
            return {
                ...state,
                connected: true
            }
        default:
            return state;
    }
};