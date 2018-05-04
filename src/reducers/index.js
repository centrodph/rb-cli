import { combineReducers } from "redux";
import TopicReducer from "./TopicReducer";
import SocketReducer from "./SocketReducer";
import TweetsReducer from "./TweetsReducer";
export default combineReducers({
  topics: TopicReducer,
  socket: SocketReducer,
  tweetts: TweetsReducer,
  version: () => "0.0.1"
});
