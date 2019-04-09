import React, {Component} from 'react';


let Img = require('react-image');

class Room extends Component {
    constructor(props) {
        super(props);

        this.gettingHotel().catch(e => { console.error(e) });

        this.state = {
            hotels: [],
        }
    }


    gettingHotel = async () => {
        const url = await fetch('http://localhost:8080/api/hotel');
        this.setState({ hotels: await url.json() || [] })
    };

    getHotel = (hotel) =>
        <div className="alert alert-light" role="alert" key={hotel.Id}>
            <h3>{hotel.Name}</h3>
            <br/>
            <div className="row">
                <div className="col-md-6 mb-6">
                    <div>
                        <Img width="100%"  src={"https://www.vertical-leap.uk/wp-content/uploads/2017/11/map-1400x800.jpg"}/>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div>
                        <p> &#10163;  {hotel.Address}</p>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac lectus massa. Vivamus lobortis urna leo, a viverra turpis mattis at. Maecenas libero sem, ultrices non suscipit sed, lobortis vitae velit. Etiam massa orci, hendrerit ac elit pellentesque, gravida elementum neque. Aliquam eu porta augue. Vestibulum mollis ex sit amet ligula efficitur gravida. Sed faucibus nec erat non scelerisque. Morbi tellus risus, dictum vel ligula at, consectetur tempor lacus. Maecenas quis sollicitudin tortor, et commodo dolor. Fusce sit amet orci commodo, iaculis nibh ac, auctor massa. Etiam elementum tempus erat eget interdum. 
                        </span>
                    </div>
                </div>
            </div>
            <br/>
            <form action="/search" method="get">
                            <div className="form-row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="places">Количество мест</label>
                                    <select type="number" className="form-control" id="places" name="places" required>
                                        <option></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="dates">Даты</label>
                                    <input type="date" className="form-control datebox" id="date" name="date"
                                           required/>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="floor">Этаж</label>
                                    <select type="number" className="form-control" id="floor" name="floor" required>
                                        <option></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <br/>

                                    <button className="btn btn-outline-info btn-lg" type="submit">Забронировать</button>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac lectus massa. Vivamus lobortis urna leo, a viverra turpis mattis at. Maecenas libero sem, ultrices non suscipit sed, lobortis vitae velit. Etiam massa orci, hendrerit ac elit pellentesque, gravida elementum neque. Aliquam eu porta augue. Vestibulum mollis ex sit amet ligula efficitur gravida. Sed faucibus nec erat non scelerisque. Morbi tellus risus, dictum vel ligula at, consectetur tempor lacus. Maecenas quis sollicitudin tortor, et commodo dolor. Fusce sit amet orci commodo, iaculis nibh ac, auctor massa. Etiam elementum tempus erat eget interdum. Quisque venenatis rutrum pharetra. Nunc ex lacus, porttitor non erat nec, condimentum egestas nibh. Nam augue sem, mollis bibendum cursus eu, eleifend non mauris. Maecenas sodales arcu sed lectus fermentum, in dignissim sem faucibus. Maecenas vel lectus et nibh suscipit posuere quis eu tellus. Quisque sagittis lacus non eleifend egestas. Pellentesque pulvinar diam vel odio imperdiet, in viverra nulla congue. Morbi faucibus molestie magna, sed porta diam tempus sed. Nullam enim justo, pulvinar sodales vehicula ac, dictum et lacus. Morbi quis ex eu nibh malesuada ornare a nec turpis. In hac habitasse platea dictumst. Suspendisse eget nulla varius, bibendum leo eget, pretium magna. Cras et pulvinar metus, ac malesuada metus. Suspendisse eget eros sit amet purus bibendum pharetra non nec ex.
                                Nam eu tempus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Nam eu tellus eget ligula porttitor suscipit ut a ante. Nulla finibus mi eget elit ornare, ut placerat massa aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec non vulputate nibh. Nulla convallis turpis purus. Quisque tellus felis, posuere sed nisi quis, tempus imperdiet ipsum. 
                            </span>
                        </div>
            
        
            
            
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

export default Room;
