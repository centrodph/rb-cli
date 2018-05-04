import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { SOCKET_URL } from "../constants";
import {
  SOCKET_OPEN,
  SOCKET_MESSAGE,
  SOCKET_CLOSE,
  SOCKET_CONNECT,
  SOCKET_CONNECT_SUCCESS,
  SOCKET_CONNECT_FAIL,
  SOCKET_SUSBRIBE,
  SOCKET_MESSAGE_FAIL,
  SOCKET_MESSAGE_GREETINGS
} from "./types";

const sock = new SockJS(SOCKET_URL);
const stompClient = Stomp.over(sock);

export const wsUpdate = () => {
  return async dispatch => {
    sock.onopen = function() {
      dispatch({
        type: SOCKET_OPEN
      });
    };
    sock.onmessage = function(e) {
      dispatch({
        type: SOCKET_MESSAGE,
        payload: e
      });
    };
    sock.onclose = function() {
      dispatch({
        type: SOCKET_CLOSE
      });
    };
  };
};

export const wsConnect = () => {
  return async dispatch => {
    dispatch({
      type: SOCKET_CONNECT
    });
    try {
      stompClient.connect({}, function(frame) {
        dispatch({
          type: SOCKET_CONNECT_SUCCESS,
          payload: frame
        });
      });
    } catch (error) {
      dispatch({
        type: SOCKET_CONNECT_FAIL,
        payload: error
      });
    }
  };
};

export const wsSuscribe = interest => {
  return async dispatch => {
    dispatch({
      type: SOCKET_SUSBRIBE
    });
    try {
      stompClient.subscribe(`/topic/${interest}`, function(message) {
        dispatch({
          type: SOCKET_MESSAGE,
          payload: {
            interest,
            message
          }
        });
      });
    } catch (error) {
      dispatch({
        type: SOCKET_MESSAGE_FAIL,
        payload: error
      });
    }
  };
};

export const wsSuscribeMock = () => {
  return async dispatch => {
    dispatch({
      type: SOCKET_SUSBRIBE
    });
    try {
      stompClient.subscribe(`/topic/greetings`, function(message) {
        dispatch({
          type: SOCKET_MESSAGE_GREETINGS,
          payload: message
        });
      });
    } catch (error) {
      dispatch({
        type: SOCKET_MESSAGE_FAIL,
        payload: error
      });
    }
  };
};
