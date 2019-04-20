import React, {Component} from 'react';
// import { connect } from 'react-redux';

import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./components/Home";
import Hotel from "./components/Hotel";
import ChosenHotel from "./components/chosenhotel";
import Room from "./components/room";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//test
class App extends Component {
    render() {
        return <>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/hotels" component={Hotel}/>
                    <Route path="/chosenhotels" component={ChosenHotel} />
                    <Route path="/room" component={Room} />
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
            <Footer/>
        </>
    }
}

export default App;
