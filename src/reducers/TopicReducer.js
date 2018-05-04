import {
    TOPIC_GET_ALL,
    TOPIC_GET_ALL_FAIL,
    TOPIC_GET_ALL_SUCCESS,
    TOPIC_UPDATE,
    TOPIC_UPDATE_FAIL,
    TOPIC_UPDATE_SUCCESS,
    TOPIC_REMOVE,
    TOPIC_REMOVE_FAIL,
    TOPIC_REMOVE_SUCCESS,
    TOPIC_CREATE,
    TOPIC_CREATE_FAIL,
    TOPIC_CREATE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    loading: true,
    list: null,
    creating: false,
    editing: null,
    removing: null,
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
        case TOPIC_UPDATE_SUCCESS: {
            let list = state.list.map(obj => action.payload.id === obj.id ? action.payload : obj);
            return { ...state, list, editing: null };
        }
        case TOPIC_CREATE:
            return { ...state, creating: true };
        case TOPIC_CREATE_FAIL:
            return { ...state, creating: false };
        case TOPIC_CREATE_SUCCESS: {
            return { ...state, list: [...state.list, action.payload], creating: false };
        }
        case TOPIC_REMOVE:
            return { ...state, removing: action.payload.id };
        case TOPIC_REMOVE_FAIL:
            return { ...state, removing: null };
        case TOPIC_REMOVE_SUCCESS: {
            let list = state.list.filter(obj => action.payload !== obj.id);
            return { ...state, list, removing: null };
        }
        default:
            return state;
    }
};