import {
    TOPIC_GET_ALL,
    TOPIC_GET_ALL_FAIL,
    TOPIC_GET_ALL_SUCCESS,
    TOPIC_UPDATE,
    TOPIC_UPDATE_FAIL,
    TOPIC_UPDATE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    loading: true,
    list: null,
    editing: null,
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
        case TOPIC_UPDATE:
            return { ...state, editing: action.payload.id };
        case TOPIC_UPDATE_FAIL:
            return { ...state, editing: null };
        case TOPIC_UPDATE_SUCCESS:
            let list = state.list.map(obj => action.payload.id === obj.id ? action.payload : obj);
            return { ...state, list, editing: null };
        default:
            return state;
    }
};