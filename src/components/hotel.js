import React, {Component} from 'react';
//import NameHotel from "./components/nameHotel";


let Img = require('react-image');

const Photo = () => <Img src="https://hotels.sletat.ru/i/im/83187_0_1024_569_1.jpg" />;

class Hotel extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div style={{margin: 'auto'}} className="row" >
                    <div>
                        <h2>{this.props.name}gi</h2>
                    </div>
                </div>
                <div style={{margin: 'auto'}} className="row" >
                    <div className="col-lg work-field">
                        <div style={{border: '1px double white'}} className="alert alert-light" role="alert">
                            <Photo/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div style={{margin: 'auto'}} className="row" >
                    <div className="col-lg work-field">
                        <div style={{border: '1px double grey'}} className="alert alert-light" role="alert">
                            <div>
                                <h3>{this.props.name}</h3>
                                <p> &#9733;&#9733;&#9733;&#9733;&#9734;</p>
                                <p> &#10163;{this.props.Address}</p>
                                <p> Минимальная цена зa ночь: </p>
                            </div>
                            <br/>
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
