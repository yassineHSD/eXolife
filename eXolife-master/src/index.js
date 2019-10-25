import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import {App} from './JS/App';
import Menu from './JS/menu';
import Home from './JS/Home';
import Help from './JS/About';
import Sort from './JS/Sort';
import SortMenu from './JS/SortMenu';
import * as serviceWorker from './JS/serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
