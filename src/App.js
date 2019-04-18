import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/Home";
// import Index from "./components/Hotel";
// import ChosenHotel from "./components/chosenhotel";
// import Room from "./components/room";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {
    render() {
        return <>
            <Header/>
            {/* <Room/> */}
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                    {/*<Route path="/hotels" component={Hotel} />*/}
                    {/*<Route path="/chosenhotel" component={ChosenHotel} />*/}
                </Switch>
            </Router>
            <Footer/>
        </>
    }
}

export default App;
