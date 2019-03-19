import React, {Component} from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
//import Home from "./components/home";
//import HotelsInCity from "./components/hotelsincity";
//import DatePicker from "./components/datepicker";
import Hotel from "./components/hotel";
// import NameHotel from "./components/nameHotel";


class App extends Component {

    constructor(props) {
        super(props);

        this.gettingHotels().catch(e => {console.error(e)});

        this.state = {
            hotels: [],
        }
    }
    gettingHotels = async () => {
        const url = await fetch('http://localhost:8080/api/hotel');
        this.setState({hotels: await url.json() || []})
    };

    render() {
        return (
            <div className="App">
                <Header/>
                {this.state.hotels.map(({Id,Name}) => <Hotel  key={Id} name={Name}/>)}
                <Footer/>
                
            </div>
        );
    }
}

export default App;
