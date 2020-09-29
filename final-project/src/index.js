import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';

import NavBar from './components/NavBar';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <NavBar />
    </Provider>,
    document.getElementById('root')
);

