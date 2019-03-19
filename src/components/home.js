import React, {Component} from 'react';

const Cities = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <p> Количество предложений: {props.currency} </p>
            <p> Количество номеров: {props.number}</p>
        </div>
    )
}

class Home extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div style={{margin: 'auto'}} className="row" >
                    <h2>Самые популярные города:</h2>

                </div>
            </div>
            <br/>
            <div className="container">
                <div style={{margin: 'auto'}} className="row" >
                    <div className="col-lg work-field">
                        <div style={{border: '1px double grey'}} className="alert alert-light" role="alert">
                            <Cities/>
                        </div>
                    </div>
                </div>
            </div>
            </>


        )
    }
}

export default Home;