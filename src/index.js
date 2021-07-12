import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import Routes from './routers/routes';
import { Provider } from 'react-redux';
import configureStore from './shared/redux-store/store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    , document.getElementById('root'));
