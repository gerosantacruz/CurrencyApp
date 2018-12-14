import React, { Component } from "react";

import "./App.css";
import Dolar from "./components/dolar";
import Euro from "./components/euro";
import Real from "./components/real";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cotizaciones de monedas extranjeras</h1>
          <h3>Pesos Argentinos (ARS)</h3>
          <div>
          <Dolar />
        </div>
        <br />
        <div>
          <Euro />
        </div>
        <br />
        <div>
          <Real />
        </div>
  
        </header>
        </div>
        
    );
  }
}

export default App;
