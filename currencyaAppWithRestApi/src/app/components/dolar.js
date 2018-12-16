import React, { Component } from "react";


class Dolar extends Component {
  constructor() {
    super();

    this.state = {
      moneda: "",
      valor: 0
    };
  }

  componentDidMount() {
    fetch("/cotizacion/dolar")
      .then(res => res.json())
      .then(data => {
        this.setState({ moneda: data.result.source, valor: data.result.value });
        console.log(data);
        console.log(this.state.moneda);
        console.log(this.state.valor);
      });
  }

  render() {
    return (
      <div>
        <h2>{this.state.moneda} : {this.state.valor.toFixed(2)}</h2>        
      </div>
    );
  }
}

export default Dolar;
