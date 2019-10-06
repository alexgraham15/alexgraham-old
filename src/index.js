import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import Layout from './Components/JS/App';
import * as serviceWorker from './serviceWorker';
import store from './Store/index'

const App = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
    <Layout />
    </Provider>, App);

serviceWorker.unregister();
