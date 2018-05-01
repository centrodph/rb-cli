import axios from 'axios';
import { TOPIC_URL } from '../constants';
import {
    TOPIC_GET_ALL,
    TOPIC_GET_ALL_FAIL,
    TOPIC_GET_ALL_SUCCESS
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