import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';

let Img = require('react-image');

class ChosenHotel extends Component {
    state = {
        hotels: [],
        searchParams: {},
        visibleRoom: false
    };

    changeVisibleRoomStatus = () => this.setState({visibleRoom: !this.state.visibleRoom});
    recervationRoom = () => {
        const {hotelStore, searchParams} = this.props;
        const out = JSON.stringify({
            start_datetime: new Date(searchParams.startDatetime),
            end_datetime: new Date(searchParams.endDatetime),
            cost: 5000,
            hotelId: hotelStore.hotel,
            roomId: 1,
            customerId: 1
        })
        console.log(out)



        fetch('http://globalkeys.herokuapp.com/api/booking', {
            mode: 'no-cors',
            method: 'POST',
            body: out,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
        }).catch(err => console.error(err));


    }

    componentDidMount() {
        fetch('https://globalkeys.herokuapp.com/api/hotel')
            .then(res => res.json())
            .then(json => this.setState({hotels: json}))
            .catch(e => console.error((e)));
    }

    getHotel = (hotel) =>
        <div className="alert alert-light" role="alert" key={hotel.id}>
            <h3>{hotel.name}</h3>
            <br/>
            <Img width="100%" src={hotel.photo}/>
            <br/><br/>
            <div className="row">
                <div className="col-md-6 mb-6">
                    <div>
                        <Img width="100%"
                             src={"https://www.vertical-leap.uk/wp-content/uploads/2017/11/map-1400x800.jpg"}/>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div>
                        <p> &#10163;  {hotel.address}</p>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac lectus massa. Vivamus lobortis urna leo, a viverra turpis mattis at. Maecenas libero sem, ultrices non suscipit sed, lobortis vitae velit. Etiam massa orci, hendrerit ac elit pellentesque, gravida elementum neque. Aliquam eu porta augue. Vestibulum mollis ex sit amet ligula efficitur gravida. Sed faucibus nec erat non scelerisque. Morbi tellus risus, dictum vel ligula at, consectetur tempor lacus. Maecenas quis sollicitudin tortor, et commodo dolor. Fusce sit amet orci commodo, iaculis nibh ac, auctor massa. Etiam elementum tempus erat eget interdum. 
                        </span>
                    </div>
                </div>
            </div>
            <br/>

            <button onClick={this.changeVisibleRoomStatus} className="btn btn-outline-info btn-lg"
                    type="submit" key={hotel.id}>Забронировать
            </button>
            <br/> <br/>
            <div className="row">
                <h3>Lorem ipsum dolor sit amet</h3>
                <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac lectus massa. Vivamus lobortis urna leo, a viverra turpis mattis at. Maecenas libero sem, ultrices non suscipit sed, lobortis vitae velit. Etiam massa orci, hendrerit ac elit pellentesque, gravida elementum neque. Aliquam eu porta augue. Vestibulum mollis ex sit amet ligula efficitur gravida. Sed faucibus nec erat non scelerisque. Morbi tellus risus, dictum vel ligula at, consectetur tempor lacus. Maecenas quis sollicitudin tortor, et commodo dolor. Fusce sit amet orci commodo, iaculis nibh ac, auctor massa. Etiam elementum tempus erat eget interdum. Quisque venenatis rutrum pharetra. Nunc ex lacus, porttitor non erat nec, condimentum egestas nibh. Nam augue sem, mollis bibendum cursus eu, eleifend non mauris. Maecenas sodales arcu sed lectus fermentum, in dignissim sem faucibus. Maecenas vel lectus et nibh suscipit posuere quis eu tellus. Quisque sagittis lacus non eleifend egestas. Pellentesque pulvinar diam vel odio imperdiet, in viverra nulla congue. Morbi faucibus molestie magna, sed porta diam tempus sed. Nullam enim justo, pulvinar sodales vehicula ac, dictum et lacus. Morbi quis ex eu nibh malesuada ornare a nec turpis. In hac habitasse platea dictumst. Suspendisse eget nulla varius, bibendum leo eget, pretium magna. Cras et pulvinar metus, ac malesuada metus. Suspendisse eget eros sit amet purus bibendum pharetra non nec ex.
                                Nam eu tempus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Nam eu tellus eget ligula porttitor suscipit ut a ante. Nulla finibus mi eget elit ornare, ut placerat massa aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec non vulputate nibh. Nulla convallis turpis purus. Quisque tellus felis, posuere sed nisi quis, tempus imperdiet ipsum. 
                            </span>
            </div>
        </div>

    // updateSearchParams = (id) => {
    //     this.props.onUpdateSearchParams({...this.state.searchParams, hotel: id});
    //     this.props.history.push('/room')
    // };

    render() {
        const {hotelStore, searchParams} = this.props;
        const {visibleRoom} = this.state;
        const hotel = this.state.hotels.find(({id}) => id === hotelStore.hotel);
        return (
            <>
                {hotel && <div className="container">
                    <div style={{margin: 'auto'}} className="row">
                        <div className="col-lg work-field">
                            <div className="alert alert-light" role="alert">
                                {this.state.hotels.filter(({id}) => id === hotelStore.hotel)
                                    .map(hotel => this.getHotel(hotel))}
                                {/*{this.state.hotels.filter({city_id} => city_id === Id)}   */}
                            </div>
                        </div>
                    </div>
                    <Dialog title={'Бронирование номера'} onClose={this.changeVisibleRoomStatus} visible={visibleRoom}>
                        <div className="alert alert-light" role="alert" key={hotel.id}>
                            <h3>{hotel.name}</h3>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 mb-6">
                                    <div>
                                        <Img width="100%"
                                             src={"https://www.vertical-leap.uk/wp-content/uploads/2017/11/map-1400x800.jpg"}/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-6">
                                    <div>
                                        <p> &#10163;  {hotel.address}</p>
                                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac lectus massa.
                        </span>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <p> Дата заезда: {searchParams.startDatetime} </p>
                                <p>Дата выезда: {searchParams.endDatetime}</p>
                                <p>Количество человек: {searchParams.guests}</p>
                            </div>
                            <div className="column">
                                <h3> Описание </h3>
                                <p>{hotel.description}</p>

                                <button className="btn btn-outline-info btn-lg"
                                        type="submit"
                                        key={hotel.id}
                                        onClick={this.recervationRoom}
                                >
                                    Забронировать
                                </button>
                            </div>
                        </div>
                    </Dialog>
                    <br/>
                </div>}

            </>
        )
    }
}

const mapStateToProps = (store) => ({
    searchParams: store.searchStore,
    hotelStore: store.hotelStore
});

const mapDispatchToProps = (dispatch) => ({
    onUpdateSearchParams: (payload) => {
        dispatch({type: 'UPDATE_SEARCH', payload});
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChosenHotel));
