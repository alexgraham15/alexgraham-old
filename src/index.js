import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hero from './App';
import AboutUs from './AboutUs';
import Experience from './Experience';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Hero />, document.getElementById('root'));
ReactDOM.render(<AboutUs />, document.getElementById('iFirst'));
ReactDOM.render(<Experience />, document.getElementById('experience'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
