import React, { Component } from "react";
import icon from "../icons/usa.png";


//this component return the dolar value which get from the api

class Dolar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cambio: ""
    };
  }
  componentDidMount() {
    fetch(
      `https://free.currencyconverterapi.com/api/v6/convert?q=USD_ARS&compact=y`
    )
      .then(res => res.json())
      .then(data => this.setState({ cambio: data.USD_ARS.val.toFixed(2) }));

    console.log(this.state.cambio);
  }

  render() {
    return (
      <div className="container">
        <h3> </h3>
        <div className="row">
          <img src={icon} alt="American flag" />   Dolar Estado Unidense: U$D 1 ={" "}
          {this.state.cambio}$
        </div>
      </div>
    );
  }
}

export default Dolar;
