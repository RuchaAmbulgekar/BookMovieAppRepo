import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
//import Controller from './screens/Controller';
 import Header from './common/header/Header';
import LoginRegisterModal from './screens/loginRegisterModal/LoginRegisterModal';
import Home from './screens/home/Home';

// ReactDOM.render(<Controller />, document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(<Header></Header>, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(<Home/>, document.getElementById('root'));
registerServiceWorker();
