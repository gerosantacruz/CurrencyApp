import React, { Component } from "react";
import { render } from "react-dom";


import Dolar from "./components/dolar";
import Euro from "./components/euro";
import Real from "./components/real";

render(
  <div>
    <h1>Cotizaciones de monedas Argentina: </h1>
    <br />
    <div>
      {" "}
      <Dolar />{" "}
    </div>

    <div>
      {" "}
      <Euro />{" "}
    </div>

    <div>
      {" "}
      <Real />
    </div>
  </div>,

  document.getElementById("root")
);
