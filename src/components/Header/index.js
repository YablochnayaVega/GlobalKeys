import React, {Component, createRef} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Index extends Component {

    state = {
        searchParams: {},
        cities: []
    };

    cityRef = createRef();
    startDatetimeRef = createRef();
    endDatetimeRef = createRef();
    guestsCountRef = createRef();

    componentDidMount() {
        fetch('https://globalkeys.herokuapp.com/api/city')
            .then(res => res.json())
            .then(json => this.setState({cities: json}))
            .catch(e => console.error((e)));
    }

    updateSearchParams = () => {
        this.props.onUpdateSearchParams(this.state.searchParams);
        this.props.history.push('/hotels')
    };

    addCityToState = () => {
        this.setState({
            searchParams: {
                ...this.state.searchParams,
                city: +this.cityRef.current.value
            }
        })
    };
    addStartDatetimeToState = () => {
        this.setState({
            searchParams: {
                ...this.state.searchParams,
                startDatetime: this.startDatetimeRef.current.value
            }
        })
    };
    addEndDatetimeToState = () => {
        this.setState({
            searchParams: {
                ...this.state.searchParams,
                endDatetime: this.endDatetimeRef.current.value
            }
        })
    };
    addGuestsToState = () => {
        this.setState({
            searchParams: {
                ...this.state.searchParams,
                guests: this.guestsCountRef.current.value
            }
        })
    };

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <a className="navbar-brand" href="/">GlobalKeys</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="nav navbar-nav mr-auto">
                        </ul>
                        <a className="btn btn-light my-2 my-sm-0" href="/">Выйти</a>
                        <ul/>
                        <a className="btn btn-light my-2 my-sm-0" href="/">Авторизация</a>
                        <ul/>
                        <a className="btn btn-outline-light my-2 my-sm-0" href="/">Регистрация</a>
                    </div>
                </nav>
                <br/>
                <div className="container">
                    <div style={{margin: 'auto'}} className="row">
                        <div className="col-lg work-field">
                            <div className="form-row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="city">Город</label>
                                    <select
                                        ref={this.cityRef}
                                        className="form-control"
                                        onChange={this.addCityToState}
                                        value={this.props.searchParams.city}
                                        required>
                                        <option/>
                                        {this.state.cities.map(city =>
                                            <option key={city.id} value={city.id}>{city.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="col-md-2 mb-2">
                                    <label htmlFor="dates">Дата прибытия</label>
                                    <input
                                        value={this.props.searchParams.startDatetime}
                                        ref={this.startDatetimeRef}
                                        onChange={this.addStartDatetimeToState}
                                        className="form-control"
                                        type="date"
                                        required
                                    />
                                </div>
                                <div className="col-md-2 mb-2">
                                    <label htmlFor="dates">Дата выезда</label>
                                    <input
                                        value={this.props.searchParams.endDatetime}
                                        ref={this.endDatetimeRef}
                                        onChange={this.addEndDatetimeToState}
                                        className="form-control"
                                        type="date"
                                        required
                                    />
                                </div>
                                <div className="col-md-2 mb-2">
                                    <label htmlFor="count_guests">Количество гостей</label>
                                    <select
                                        value={this.props.searchParams.guests}
                                        ref={this.guestsCountRef}
                                        className="form-control"
                                        onChange={this.addGuestsToState}
                                        required
                                    >
                                        <option/>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <br/>
                                    <button className="btn btn-outline-info btn-lg"
                                            onClick={this.updateSearchParams}>Найти
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

            </>
        )
    }
}

export default withRouter(
    connect(
        state => ({
            searchParams: state.searchStore
        }),
        dispatch => ({
            onUpdateSearchParams: (payload) => {
                dispatch({type: 'UPDATE_SEARCH', payload});
            },
        })
    )(Index)
);
