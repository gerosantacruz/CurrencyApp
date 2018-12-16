import React, { Component } from "react";

class Euro extends Component {
  constructor() {
    super();

    this.state = {
      moneda: "",
      valor: 0,
      fecha:''
    };
  }

  componentDidMount() {
    fetch("/cotizacion/euro")
      .then(res => res.json())
      .then(data => {
        this.setState({ moneda: data.result.source, valor: data.result.value, fecha: data.result.updated });
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

export default Euro;
