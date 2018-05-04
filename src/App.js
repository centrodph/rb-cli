import React, { Component } from 'react';
import 'react-notifications/lib/notifications.css';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { NotificationContainer, NotificationManager } from 'react-notifications';
//Custom
import './assets/App.css';
import Notification from './component/Notification';
import Footer from './component/Footer';
import TopicList from './component/TopicList';
import TopicForm from './component/TopicForm';

const base = process.env.REACT_APP_SERVICE_URL;
class App extends Component {
    componentDidMount() {
        console.error("ds");
        var sock = new SockJS(`${base}socket`);
        sock.onopen = function () {
            console.error("ds");
            NotificationManager.success('Socket', 'Connection Close');
        };
        sock.onmessage = function (e) {
            NotificationManager.success('Socket', 'new message');
        };
        sock.onclose = function () {
            NotificationManager.error('Socket', 'Connection Close', 5000);
        };
        const stompClient = Stomp.over(sock);
        stompClient.connect({}, function (frame) {
            stompClient.subscribe('/topic/greetings', function (greeting) {
                NotificationManager.success('Socket', greeting.body);
            });
            stompClient.subscribe('/app/topic', function (greeting) {
                NotificationManager.success('Socket', greeting.body);
            });
        });
    }

    render() {
        return (
            <div className="component-app">
                <header className="header">Simple Twitter app</header>
                <div className="app-content">
                    <div className="main">
                        <h2>Main</h2>
                        <TopicList />
                    </div>
                    <div className="side">
                        <TopicForm />
                        <Notification />
                        <NotificationContainer />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
