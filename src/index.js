import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';


ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<Header></Header>, document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(
//     <BrowserRouter>
// ReactDOM.render( <BrowserRouter><Home/></BrowserRouter>, document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(<LoginRegisterModal/>, document.getElementById('root'));
// registerServiceWorker();


// ReactDOM.render(
//     <BrowserRouter>
//         <Details/>
//     </BrowserRouter>, 
// document.getElementById('root'));
// registerServiceWorker();
