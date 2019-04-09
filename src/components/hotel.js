import React, {Component} from 'react';

//import NameHotel from "./components/nameHotel";


let Img = require('react-image');

//const Photo = () => <Img src="https://hotels.sletat.ru/i/im/83187_0_1024_569_1.jpg" />;

class Hotel extends Component {
    constructor(props) {
        super(props);

        this.gettingHotels().catch(e => { console.error(e) });

        this.state = {
            hotels: [],
        }
    }

    createStars = () => {
        let star = []
        for (let i = 0; i < 4; i++) {
          star.push(<span> &#9733; </span>)
        }
        for (let i = 0; i < 1; i++) {
            star.push(<span> &#9734; </span>)
          }
        return star
      }


    gettingHotels = async () => {
        const url = await fetch('http://localhost:8080/api/hotel');
        this.setState({ hotels: await url.json() || [] })
    };

    getHotel = (hotel) =>
        <div style={{ border: '1px double grey' }} className="alert alert-light" role="alert" key={hotel.Id}>
            <h3>{hotel.Name}</h3>
            <br/>
            <a href="/chosenhotel"><Img width="100%"  src={hotel.Photo}/></a>
            <br/><br/>
            <p> {hotel.Stars}/5</p>
            <p> &#10163;  {hotel.Address}</p>
            <p> Минимальная цена зa ночь: </p>
            
        </div>

    

    render() {
        return (
            <>
            <div className="container">
                <div style={{margin: 'auto'}} className="row" >
                    <div className="col-lg work-field">
                        <div className="alert alert-light" role="alert"> 
                            {this.state.hotels.map(hotel => this.getHotel(hotel))} 
                            {/*{this.state.hotels.filter({city_id} => city_id === Id)}   */}
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            </>
        )
    }
}

export default Hotel;
