import {
    SOCKET_MESSAGE
} from '../actions/types';

const INITIAL_STATE = {
    messages: {},
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SOCKET_MESSAGE:
            return {
                ...state,
                loading: false,
                error: '',
                list: action.payload
            };
        default:
            return state;
    }
};