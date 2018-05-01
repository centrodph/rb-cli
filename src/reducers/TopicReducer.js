import {
    TOPIC_GET_ALL,
    TOPIC_GET_ALL_FAIL,
    TOPIC_GET_ALL_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    loading: true,
    list: null,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOPIC_GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                list: action.payload
            };
        case TOPIC_GET_ALL_FAIL:
            return { ...state, error: action.payload };
        case TOPIC_GET_ALL:
            return { ...state, ...INITIAL_STATE, loading: true };
        default:
            return state;
    }
};