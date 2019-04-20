import React, {Component} from 'react';
import {connect} from "react-redux";

let Img = require('react-image');

class Hotel extends Component {
    state = {
        hotels: [],
    };

    componentDidMount() {
        fetch('https://globalkeys.herokuapp.com/api/hotel')
            .then(res => res.json())
            .then(json => this.setState({hotels: json}))
            .catch(e => console.error((e)));
    }


    // gettingHotels = async () => {
    //     const url = await;
    //     this.setState({hotels: await url.json() || []})
    // };

    getHotel = (hotel) =>
        <div style={{border: '1px double grey'}} className="alert alert-light" role="alert" key={hotel.id}>
            <h3>{hotel.name}</h3>
            <br/>
            <a href="/chosenhotel"><Img width="100%" src={hotel.photo}/></a>
            <br/><br/>
            <p> {hotel.stars}/5</p>
            <p> &#10163;  {hotel.address}</p>
            <p> Минимальная цена зa ночь: </p>

        </div>


    render() {
        const {searchParams} = this.props;
        return (
            <>
                <div className="container">
                    <div style={{margin: 'auto'}} className="row">
                        <div className="col-lg work-field">
                            <div className="alert alert-light" role="alert">
                                {this.state.hotels.filter(({cityId}) => cityId === searchParams.city)
                                    .map(hotel => this.getHotel(hotel))}
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

const mapStateToProps = (state) => ({
    searchParams: state.searchStore
});

const mapDispatchToProps = (dispatch) => ({
    onUpdateSearchParams: (payload) => {
        dispatch({type: 'UPDATE_SEARCH', payload});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);
