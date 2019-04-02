import React, { Component } from 'react';
let Img = require('react-image');


class Home extends Component {
    constructor(props) {
        super(props);

        this.getCities().catch(e => { console.error(e) });

        this.state = {
            cities: [],
        }
    }

    getCities = async () => {
        const url = await fetch('http://localhost:8080/api/city');
        this.setState({ cities: await url.json() || [] })
    };

    getCity = (city) =>
        <div style={{ border: '1px double grey' }} className="alert alert-light" role="alert" key={city.Id}>
            <h3>{city.Name}</h3>
            <p> Количество предложений: {city.Offers} </p>
            <p> Количество номеров: {city.Rooms}</p>
            <a href="/hotel"><Img width="100%" src={city.Photo} /></a>  
            
        </div>


    clickHandler = () => {
        alert('pepe djuzeppe')
    }

    render() {
        return (
            <>
                <div className="container">
                    <div style={{ margin: 'auto' }} className="row" >
                        <h2>Самые популярные города:</h2>

                    </div>
                </div>
                <br />
                <div className="container">
                    <div style={{ margin: 'auto' }} className="row" >
                        <div className="col-lg work-field">
                                {this.state.cities.map(city => this.getCity(city))}
                        </div>
                    </div>
                </div>
            </>


        )
    }
}

export default Home;