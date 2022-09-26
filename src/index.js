import React , {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
// import store from'./redux/store';
import { configureStore } from "./redux/store";


ReactDOM.render(
    <Provider store={configureStore().store}>
        <App />
    </Provider> ,
    document.getElementById('root'));
