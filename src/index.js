import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import appReducers from './reducers';
import logger from 'redux-logger'
const createAppStore = applyMiddleware(ReduxThunk)(createStore);



ReactDOM.render(
    <Provider store={createAppStore(appReducers, applyMiddleware(logger))}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
