import React, { Component } from "react";

//get info from real rest api
class Real extends Component {
  constructor() {
    super();

    this.state = {
      moneda: "",
      valor: 0,
      fecha:""
    };
  }

  componentDidMount() {
    fetch("/cotizacion/real")
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
        <h2>Ultima Actualizacion fue el: {this.state.fecha}</h2>
      </div>
    );
  }
}

export default Real;
