
import { combineReducers } from 'redux';
import TopicReducer from './TopicReducer';
export default combineReducers({
    topics: TopicReducer,
    version: () => '0.0.1'
});