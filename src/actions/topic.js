import axios from 'axios';
import { TOPIC_URL } from '../constants';
import {
    TOPIC_GET_ALL,
    TOPIC_GET_ALL_FAIL,
    TOPIC_GET_ALL_SUCCESS,
    TOPIC_CREATE,
    TOPIC_CREATE_FAIL,
    TOPIC_CREATE_SUCCESS,
    TOPIC_UPDATE,
    TOPIC_UPDATE_FAIL,
    TOPIC_UPDATE_SUCCESS,
    TOPIC_REMOVE,
    TOPIC_REMOVE_FAIL,
    TOPIC_REMOVE_SUCCESS
} from './types';

export const getTopics = () => {
    return async dispatch => {
        dispatch({
            type: TOPIC_GET_ALL
        });
        try {
            const result = await axios.get(TOPIC_URL);
            dispatch({
                type: TOPIC_GET_ALL_SUCCESS,
                payload: result.data
            });
        } catch (error) {
            dispatch({
                type: TOPIC_GET_ALL_FAIL,
                payload: error
            });
        }
    };
}

export const updateTopic = (topic) => {
    return async dispatch => {
        dispatch({
            type: TOPIC_UPDATE,
            payload: topic
        });
        try {
            const result = await axios.put(TOPIC_URL + topic.id, topic);
            dispatch({
                type: TOPIC_UPDATE_SUCCESS,
                payload: result.data
            });
        } catch (error) {
            dispatch({
                type: TOPIC_UPDATE_FAIL,
                payload: error
            });
        }
    };
}

export const removeTopic = (topic) => {
    return async dispatch => {
        dispatch({
            type: TOPIC_REMOVE,
            payload: topic
        });
        try {
            const result = await axios.delete(TOPIC_URL + topic.id);
            dispatch({
                type: TOPIC_REMOVE_SUCCESS,
                payload: topic.id
            });
        } catch (error) {
            dispatch({
                type: TOPIC_REMOVE_FAIL,
                payload: error
            });
        }
    };
}

export const createTopic = (topic) => {
    return async dispatch => {
        dispatch({
            type: TOPIC_CREATE,
            payload: topic
        });
        try {
            const result = await axios.post(TOPIC_URL, topic);
            dispatch({
                type: TOPIC_CREATE_SUCCESS,
                payload: result.data
            });
        } catch (error) {
            dispatch({
                type: TOPIC_CREATE_FAIL,
                payload: error
            });
        }
    };
}


