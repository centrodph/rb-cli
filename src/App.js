import React, { Component } from "react";
import "react-notifications/lib/notifications.css";
// import SockJS from 'sockjs-client';
// import Stomp from 'stompjs';
import { NotificationContainer } from "react-notifications";
import { connect } from "react-redux";
import { wsUpdate, wsConnect, wsSuscribeMock } from "./actions/suscription";

//Custom
import "./assets/App.css";
import Notification from "./component/Notification";
import Footer from "./component/Footer";
import TopicList from "./component/TopicList";
import TopicForm from "./component/TopicForm";

const base = process.env.REACT_APP_SERVICE_URL;
class App extends Component {
  componentDidMount() {
    this.props.wsUpdate();
    this.props.wsConnect();

    // var sock = new SockJS(`${base}socket`);
    // sock.onopen = function () {
    //     NotificationManager.success('Socket', 'Connection Close');
    // };
    // sock.onmessage = function (e) {
    //     NotificationManager.success('Socket', 'new message');
    // };
    // sock.onclose = function () {
    //     NotificationManager.error('Socket', 'Connection Close', 5000);
    // };
    // const stompClient = Stomp.over(sock);
    // stompClient.connect({}, function (frame) {
    //     stompClient.subscribe('/topic/greetings', function (greeting) {
    //         NotificationManager.success('Socket', greeting.body);
    //     });
    //     stompClient.subscribe('/app/topic', function (greeting) {
    //         NotificationManager.success('Socket', greeting.body);
    //     });
    // });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.connected === true && nextProps.initsuscribe === false) {
      this.props.wsSuscribeMock();
    }
    return true;
  }

  render() {
    const { greetings } = this.props;
    return (
      <div className="component-app">
        <header className="header">Simple Twitter app</header>
        <div className="app-content">
          <div className="main">
            <h2>Main</h2>

            <TopicList />

            {greetings && <div> {greetings} </div>}
          </div>
          <div className="side">
            <TopicForm />
            <Notification />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ socket }) => {
  const { greetings, connected, initsuscribe } = socket;
  return {
    greetings,
    connected,
    initsuscribe
  };
};
export default connect(mapStateToProps, {
  wsUpdate,
  wsConnect,
  wsSuscribeMock
})(App);
