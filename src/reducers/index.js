
import { combineReducers } from 'redux';
import TopicReducer from './TopicReducer';
import SocketReducer from './SocketReducer';
export default combineReducers({
    topics: TopicReducer,
    socket: SocketReducer,
    version: () => '0.0.1'
});