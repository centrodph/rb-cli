import axios from "axios";
import { TWITTER_URL } from "../constants";
import {
  TWITTER_SUSCRIBE,
  TWITTER_SUSCRIBE_FAIL,
  TWITTER_SUSCRIBE_SUCCESS
} from "./types";

export const suscribeTwitter = topic => {
  return async dispatch => {
    dispatch({
      type: TWITTER_SUSCRIBE,
      payload: topic
    });
    try {
      const result = await axios.post(TWITTER_URL + "suscribe", topic);
      dispatch({
        type: TWITTER_SUSCRIBE_SUCCESS,
        payload: result.data
      });
    } catch (error) {
      dispatch({
        type: TWITTER_SUSCRIBE_FAIL,
        payload: error
      });
    }
  };
};
