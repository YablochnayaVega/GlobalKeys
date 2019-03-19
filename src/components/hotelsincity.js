import React, {Component} from 'react';

const City = (props) => {
    return(
        <div>
            <h2>Поиск по городу {props.name}:</h2>
        </div>
    )
}
const Hotel = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <p> &#9733;&#9733;&#9733;&#9733;&#9734;</p>
            <p> &#10163; {props.address} </p>
            <p> Минимальная цена зa ночь: {props.number}</p>
        </div>
    )
}

class HotelsInCity extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div style={{margin: 'auto'}} className="row" >
                    <City/>
                </div>
            </div>
            <br/>
            <div className="container">
                <div style={{margin: 'auto'}} className="row" >
                    <div className="col-lg work-field">
                        <div style={{border: '1px double grey'}} className="alert alert-light" role="alert">
                            <Hotel/>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default HotelsInCity;