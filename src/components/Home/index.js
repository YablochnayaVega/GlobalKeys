import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

let Img = require('react-image');

class Home extends Component {
    state = {
        cities: [],
        searchParams: {}
    };

    componentDidMount() {
        fetch('https://globalkeys.herokuapp.com/api/city')
            .then(res => res.json())
            .then(json => this.setState({cities: json}))
            .catch(e => console.error((e)));
    }

    getCity = (city) =>
        <div onClick={() => this.updateSearchParams(city.id)} style={{border: '1px double grey'}}
             className="alert alert-light" role="alert" key={city.id}>
            <h3>{city.name}</h3>
            <p> Количество предложений: {city.offers} </p>
            <p> Количество номеров: {city.rooms}</p>
            <Img width="100%" src={city.photo}/>

        </div>;

    updateSearchParams = (cityId) => {
        this.props.onUpdateSearchParams({...this.state.searchParams, city:cityId});
        this.props.history.push('/hotels')
    };

    render() {
        return (
            <>
                <div className="container">
                    <div style={{margin: 'auto'}} className="row">
                        <h2>Самые популярные города:</h2>

                    </div>
                </div>
                <br/>
                <div className="container">
                    <div style={{margin: 'auto'}} className="row">
                        <div className="col-lg work-field">
                            {this.state.cities.map(city => this.getCity(city))}
                        </div>
                    </div>
                </div>
            </>


        )
    }
}

export default withRouter(
    connect(
        state => ({
            searchParams: state.searchParams
        }),
        dispatch => ({
            onUpdateSearchParams: (payload) => {
                dispatch({type: 'UPDATE_SEARCH', payload});
            },
        })
    )(Home)
);
