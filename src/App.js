import React, { Component } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Hotel from "./components/hotel";
import ChosenHotel from "./components/chosenhotel";
import Room from "./components/room";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return <>
            <Header/>
            {/* <Room/> */}
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/hotel" component={Hotel} />
                    <Route path="/chosenhotel" component={ChosenHotel} />
                </Switch>
            </Router>
            <Footer/>
        </>
    }
}

export default App;
