import React, {Component} from 'react';

let Img = require('react-image');

export default class Hotel extends Component {
    state = {
        hotels: [],
    };

    componentDidMount() {
        fetch('https://globalkeys.herokuapp.com/api/city')
            .then(res => res.json())
            .then(json => this.setState({hotels: json}))
            .catch(e => console.error((e)));
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


    // gettingHotels = async () => {
    //     const url = await;
    //     this.setState({hotels: await url.json() || []})
    // };

    getHotel = (hotel) =>
        <div style={{border: '1px double grey'}} className="alert alert-light" role="alert" key={hotel.Id}>
            <h3>{hotel.Name}</h3>
            <br/>
            <a href="/chosenhotel"><Img width="100%" src={hotel.Photo}/></a>
            <br/><br/>
            <p> {hotel.Stars}/5</p>
            <p> &#10163;  {hotel.Address}</p>
            <p> Минимальная цена зa ночь: </p>

        </div>


    render() {
        return (
            <>
                <div className="container">
                    <div style={{margin: 'auto'}} className="row">
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
