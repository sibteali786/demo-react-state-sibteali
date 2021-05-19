import React, { useState } from "react";
import "./Assig.css";

function Assig() {
  let [isLit, setLit] = useState(true);
  let [temp, changeTemp] = useState(72);
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      <h4>Thr Room is {isLit ? "Light" : "Dark"}</h4>
      <br />
      <button onClick={() => setLit(true)}>ON</button>
      <button onClick={() => setLit(false)}>OFF</button>
      <br />
      <h4>The temperature in Farenheit is {temp}</h4>
      <button onClick={() => changeTemp(++temp)}>Increase Temperature</button>
      <button onClick={() => changeTemp(--temp)}>Decrease Temperature</button>
    </div>
  );
}

export default Assig;
