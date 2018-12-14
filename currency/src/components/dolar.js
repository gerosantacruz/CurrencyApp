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
    /*const access_key = '984160642c25c44b6e5a0c5b85780bda';
        const currencies = 'EUR,GBP,CAD,PLN';
        const source = 'USD';*/
    fetch(
      `https://free.currencyconverterapi.com/api/v6/convert?q=USD_ARS&compact=y`
    )
      .then(res => res.json())
      .then(data => this.setState({ cambio: data.USD_ARS.val }));

    console.log(this.state.cambio);
  }

  render() {
    return (
      <div class="container">
        <h3> </h3>
        <div class="row">
          <img src={icon} alt="American flag" />   Dolar Estado Unidense: U$D 1 ={" "}
          {this.state.cambio}$
        </div>
      </div>
    );
  }
}

export default Dolar;
