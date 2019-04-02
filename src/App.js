import React, { Component } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Hotel from "./components/hotel";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return <>
            <Header />
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/hotel" component={Hotel} />
                </Switch>
            </Router >
            <Footer/>
        </>
    }
}

export default App;
