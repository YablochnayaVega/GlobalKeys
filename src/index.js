import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Home from "./components/home";
// import Hotel from "./components/hotel";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <div className="App">
        <App />
    </div>
    , document.getElementById('root'));

serviceWorker.unregister();

// {/* <Router>
//     <Switch>
//         <Route path="/home" component={Home}/>
//         <Route path="/hotel" component={Hotel}/>
//         <Route path="/" component={App}/>
//     </Switch>
// </Router> */}