import React, { Component } from 'react';
import './assets/App.scss';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
const base = process.env.REACT_APP_SERVICE_URL;

class App extends Component {
    componentDidMount() {
        var sock = new SockJS(`${base}socket`);
        sock.onopen = function() {
            console.log('open');
        };
        sock.onmessage = function(e) {
            console.log('message', e.data);
        };
        sock.onclose = function() {
            console.log('close');
        };
        const stompClient = Stomp.over(sock);
        stompClient.connect({}, function(frame) {
            console.info('Connected: ' + frame);
            stompClient.subscribe('/topic/greetings', function(greeting) {
                console.info(greeting);
            });
            stompClient.subscribe('/app/topic', function(greeting) {
                console.info(greeting);
            });
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">GP</header>
                <p className="App-intro">Works</p>
            </div>
        );
    }
}

export default App;
