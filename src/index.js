import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/css/App.css';
import App from './components/App';
import MyAppBar from './components/MyAppBar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('App'));
ReactDOM.render(<MyAppBar />, document.getElementById('MyAppBar'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
