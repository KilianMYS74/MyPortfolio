import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Comfortaa-Bold.ttf';
import './fonts/Comfortaa-Regular.ttf';
import './fonts/Comfortaa-Light.ttf';
import "typeface-comfortaa";

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
